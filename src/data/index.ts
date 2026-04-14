import { ServiceType, TestimonialType, ProjectType } from '../types';

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    icon: "Code",
  },
  {
    id: 2,
    title: "Web & Mobile Apps",
    description: "Responsive web applications and native mobile apps that deliver exceptional user experiences.",
    icon: "Smartphone",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable, secure, and reliable cloud infrastructure to power your business applications.",
    icon: "Cloud",
  },
  {
    id: 4,
    title: "AI/ML Integration",
    description: "Cutting-edge artificial intelligence and machine learning solutions to drive innovation.",
    icon: "Brain",
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "We deliver high-quality solutions on time and within budget.",
    icon: "Timer",
  },
  {
    id: 2,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, adapting to changing needs.",
    icon: "LineChart",
  },
  {
    id: 3,
    title: "Modern UI/UX",
    description: "Beautiful, intuitive interfaces that enhance user satisfaction.",
    icon: "Layout",
  }
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Mosque Accounts Platform",
    description: "Account management software for mosque committees — tracks day-to-day collections (zakat, sadaqah, general donations), running expenses, and dedicated fund drives, with auto-generated receipts and monthly statements for committee review.",
    image: "",
    tags: ["Accounting", "Web App", "Non-profit", "Reports"]
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Patient-facing booking and records portal for a multi-specialty clinic — connects front-desk operations with consultant calendars, lab uploads, and follow-up reminders.",
    image: "",
    tags: ["Healthcare", "Web App", "Mobile"]
  },
  {
    id: 3,
    title: "E-Commerce Transformation",
    description: "D2C storefront and inventory platform for a Kashmiri craft retailer, replacing a fragmented marketplace setup with a self-managed Shopify storefront and a centralized product catalog.",
    image: "",
    tags: ["E-Commerce", "Mobile", "Cloud"]
  },
  {
    id: 4,
    title: "Smart Restaurant System",
    description: "POS, kitchen display, and self-service kiosk software for a multi-outlet F&B operator. Real-time order status across stations and unified daily reporting.",
    image: "",
    tags: ["POS", "Kiosk", "Mobile Ordering", "Real-time"]
  },
  {
    id: 5,
    title: "AI-Powered Customer Service",
    description: "First-line LLM agent for a fast-growing logistics operator — handles tracking queries, parcel rebookings, and refund initiation across web chat and WhatsApp, with human escalation.",
    image: "",
    tags: ["AI", "NLP", "Machine Learning", "Customer Service"]
  },
  {
    id: 6,
    title: "Predictive Analytics Dashboard",
    description: "Sales-forecasting and customer-cohort dashboard for a pharma distributor, replacing scattered Excel models with a single Power BI workspace fed by their CRM and ERP.",
    image: "",
    tags: ["AI", "Analytics", "Data Visualization", "Predictive Modeling"]
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Mr Abid",
    position: "Business Owner",
    company: "Heritage Craft.",
    quote: "",
    image: "",
  },
  {
    id: 2,
    name: "Adnan",
    position: "Director",
    company: "Logisco Courier Service",
    quote: "",
    image: "",
  },
  {
    id: 3,
    name: "Kamran Lone",
    position: "MD",
    company: "M Studio",
    quote: "",
    image: "",
  }
];
