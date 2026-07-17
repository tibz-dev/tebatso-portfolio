export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};