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
    title: "FinTech Platform",
    description: "A comprehensive financial technology platform that revolutionized payment processing for a leading financial institution.",
    image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["FinTech", "Cloud", "AI"]
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "An integrated healthcare management solution that streamlined patient care and administrative processes.",
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Healthcare", "Web App", "Mobile"]
  },
  {
    id: 3,
    title: "E-Commerce Transformation",
    description: "A complete digital transformation for a retail chain, including e-commerce platform and inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-Commerce", "Mobile", "Cloud"]
  },
  {
    id: 4,
    title: "Smart Restaurant System",
    description: "An innovative food ordering solution featuring self-service kiosks, mobile ordering, and kitchen display systems for streamlined restaurant operations.",
    image: "https://images.pexels.com/photos/4199524/pexels-photo-4199524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["POS", "Kiosk", "Mobile Ordering", "Real-time"]
  },
  {
    id: 5,
    title: "AI-Powered Customer Service",
    description: "An intelligent customer service platform using natural language processing and machine learning to provide 24/7 automated support with human-like interactions.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["AI", "NLP", "Machine Learning", "Customer Service"]
  },
  {
    id: 6,
    title: "Predictive Analytics Dashboard",
    description: "A sophisticated analytics platform using AI to predict market trends, customer behavior, and business metrics with interactive visualizations.",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["AI", "Analytics", "Data Visualization", "Predictive Modeling"]
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Mr Abid",
    position: "Business Owner",
    company: "Heritage Craft.",
    quote: "EnnBi delivered beyond our expectations. Their expertise in cloud solutions has transformed our operations and improved efficiency by 40%.",
  },
  {
    id: 2,
    name: "Adnan",
    position: " Director",
    company: "Logisco Courier Service",
    quote: "The mobile application developed by EnnBi has received outstanding feedback from our customers and significantly improved our user engagement metrics.",
  },
  {
    id: 3,
    name: "Kamran Lone",
    position: "MD",
    company: "M Studio",
    quote: "Working with EnnBi was a game-changer for our business. Their AI-driven solution has helped us increase sales by 35% in just six months.",
  }
];