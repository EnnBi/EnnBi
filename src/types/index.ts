export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}