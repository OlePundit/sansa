const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchServices() {
  const response = await fetch(`${API_URL}/services`);
  if (!response.ok) throw new Error('Failed to fetch services');
  return response.json();
}

export async function fetchBlogs() {
  const response = await fetch(`${API_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
}

export async function fetchPackages() {
  const response = await fetch(`${API_URL}/packages`);
  if (!response.ok) throw new Error('Failed to fetch packages');
  return response.json();
}

export async function fetchOrders() {
  const response = await fetch(`${API_URL}/orders`);
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
}

export async function fetchContacts() {
  const response = await fetch(`${API_URL}/contacts`);
  if (!response.ok) throw new Error('Failed to fetch contacts');
  return response.json();
}

export async function createService(data: any) {
  const response = await fetch(`${API_URL}/services`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create service');
  return response.json();
}

export async function updateService(id: number, data: any) {
  const response = await fetch(`${API_URL}/services/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update service');
  return response.json();
}

export async function deleteService(id: number) {
  const response = await fetch(`${API_URL}/services/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete service');
}

export async function createBlog(data: any) {
  const response = await fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create blog');
  return response.json();
}

export async function updateBlog(id: number, data: any) {
  const response = await fetch(`${API_URL}/blogs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update blog');
  return response.json();
}

export async function deleteBlog(id: number) {
  const response = await fetch(`${API_URL}/blogs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete blog');
}

export async function createPackage(data: any) {
  const response = await fetch(`${API_URL}/packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create package');
  return response.json();
}

export async function updatePackage(id: number, data: any) {
  const response = await fetch(`${API_URL}/packages/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update package');
  return response.json();
}

export async function deletePackage(id: number) {
  const response = await fetch(`${API_URL}/packages/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete package');
}
