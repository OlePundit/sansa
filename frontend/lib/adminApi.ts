const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const API_URL = `${BASE_URL}/api`;

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin_token');
}

async function request<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((options.headers as Record<string, string>) || {}),
    },
  });

  if (!res.ok) {
    if (res.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return {} as T;
  return res.json();
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export async function login(email: string, password: string) {
  const data = await request<{ token: string; user: AdminUser }>('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_token', data.token);
  }
  return data;
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_token');
  }
}

export function isAuthenticated(): boolean {
  return Boolean(getToken());
}

// ─── Blogs ───────────────────────────────────────────────────────────────────

export async function getBlogs(): Promise<Blog[]> {
  const data = await request<Record<string, unknown>>('/blogs');
  if (Array.isArray(data)) return data as unknown as Blog[];
  if (Array.isArray((data as { blogs?: Blog[] }).blogs)) return (data as { blogs: Blog[] }).blogs;
  if (Array.isArray((data as { data?: Blog[] }).data)) return (data as { data: Blog[] }).data;
  return [];
}

export async function getBlog(slug: string): Promise<Blog> {
  const data = await request<{ data?: Blog } | Blog>(`/blogs/${slug}`);
  return (data as { data?: Blog }).data ?? (data as Blog);
}

export async function createBlog(payload: Partial<Blog>) {
  return request('/blogs', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateBlog(slug: string, payload: Partial<Blog>, thumbnailFile?: File) {
  if (thumbnailFile) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    const form = new FormData();
    Object.entries(payload).forEach(([k, v]) => {
      if (v !== undefined && v !== null && k !== 'thumbnail') form.append(k, String(v));
    });
    form.append('thumbnail', thumbnailFile);
    const res = await fetch(`${API_URL}/blogs/${slug}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: form,
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || `Request failed: ${res.status}`);
    }
    return res.json();
  }
  const { thumbnail: _thumbnail, ...rest } = payload;
  return request(`/blogs/${slug}`, {
    method: 'PUT',
    body: JSON.stringify(rest),
  });
}

export async function deleteBlog(slug: string) {
  return request(`/blogs/${slug}`, { method: 'DELETE' });
}

// ─── Landing Pages ───────────────────────────────────────────────────────────

export async function getLPs(): Promise<LP[]> {
  const data = await request<Record<string, unknown>>('/lps');
  if (Array.isArray(data)) return data as unknown as LP[];
  if (Array.isArray((data as { data?: LP[] }).data)) return (data as { data: LP[] }).data;
  return [];
}

export async function getLP(slug: string): Promise<LP> {
  const data = await request<{ data?: LP } | LP>(`/lps/${slug}`);
  return (data as { data?: LP }).data ?? (data as LP);
}

export async function createLP(payload: Partial<LP>) {
  return request('/lps', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateLP(slug: string, payload: Partial<LP>) {
  return request(`/lps/${slug}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export async function deleteLP(slug: string) {
  return request(`/lps/${slug}`, { method: 'DELETE' });
}

// ─── Contacts ────────────────────────────────────────────────────────────────

export async function getContacts(): Promise<Contact[]> {
  const data = await request<Record<string, unknown>>('/contact');
  if (Array.isArray(data)) return data as unknown as Contact[];
  if (Array.isArray((data as { data?: Contact[] }).data)) return (data as { data: Contact[] }).data;
  return [];
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AdminUser {
  id: number;
  name: string;
  email: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  body: string;
  description?: string;
  meta_description?: string;
  thumbnail?: string;
  category?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LP {
  id: number;
  slug: string;
  title?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  faq1?: string;
  faq2?: string;
  faq3?: string;
  faq4?: string;
  faq5?: string;
  ans1?: string;
  ans2?: string;
  ans3?: string;
  ans4?: string;
  ans5?: string;
  benefits?: string;
  benefits2?: string;
  intro?: string;
  category?: string;
  meta_description?: string;
  created_at?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}
