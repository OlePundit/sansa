// types/index.ts
export interface Service {
  id: number;
  slug: string;
  title: string;
  body: string;
  description?: string;
  thumbnail?: string;
  created_at?: string;
  updated_at?: string;
}
export interface LP {
  id: number;
  intro:string;
  slug: string;
  title: string;
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
}
export interface Blog {
  id: number;
  slug: string;
  title: string;
  body: string;
  description?: string; // Add this line - description is optional
  excerpt?: string;  // Add this line - excerpt is optional
  thumbnail?: string;
  created_at?: string;
  updated_at?: string;
  // Add other fields as needed based on your API response
}
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

export interface ServicesResponse {
  services: Service[];
}

export interface BlogsResponse {
  blogs: Blog[];
}

export interface BlogGridProps {
  blogs: Blog[];
}

export interface NavbarSectionProps {
  services: Service[];
}

export interface LPNavbarSectionProps {
  services: Service[];
  thumbnail: string;
  title: string;
  intro: string;
}

export interface FaqSectionProps {
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
}