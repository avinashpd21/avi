export interface Inquiry {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  budget?: string;
  details: string;
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived';
  createdAt: string;
  userId?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  iconName: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Business' | 'E-Commerce' | 'Landing Pages' | 'School & College' | 'Portfolio';
  description: string;
  image: string;
  technologies: string[];
  liveDemoUrl: string;
  metrics?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'CMS & Styling' | 'AI & Acceleration' | 'Core';
  level: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceSubtext?: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
  deliveryTime: string;
  revisions: string;
  support: string;
  idealFor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  projectType: string;
  isSample: boolean;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing' | 'Delivery' | 'Domain & Hosting' | 'Maintenance' | 'Payment';
}
