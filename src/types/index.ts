export interface Cottage {
  id: string;
  title: string;
  size: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  floorPlan: string;
  images: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  totalPrice: number;
  downPayment: number;
  installments: number;
  monthlyAmount: number;
  features: string[];
  isPopular?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  interestedIn: string;
}