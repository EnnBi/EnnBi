export interface TechnologyDetail {
  name: string;
  description: string;
  examples: string[];
}

export const technologyColumns: string[][] = [
  [
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Image Analysis',
    'Blockchain',
    'Big Data',
    'Internet of Things',
    'Virtual Reality',
    'Augmented Reality',
    'Cloud',
    'Software as a Service (SaaS)',
  ],
  [
    'Developers for Hire',
    '.NET',
    'Java',
    'Python',
    'PHP',
    'Golang',
    'C++',
    'Node.js',
    'JavaScript',
    'React Native',
    'Mobile',
  ],
  [
    'Microsoft',
    'Azure',
    'Power Apps',
    'Dynamics 365',
    'SharePoint and Microsoft 365',
    'Power BI',
    'Amazon Web Services',
    'Adobe Commerce',
    'Shopify',
    'ServiceNow',
    'Salesforce',
    'Pimcore',
  ],
];

export const technologyDetails: TechnologyDetail[] = [
  {
    name: 'Artificial Intelligence',
    description:
      'Artificial Intelligence helps automate decision-making, understand language, and process large volumes of data at scale.',
    examples: [
      'Customer support assistants that answer repetitive questions instantly.',
      'Fraud detection engines that flag suspicious transactions in real time.',
    ],
  },
  {
    name: 'Data Science',
    description:
      'Data Science combines statistics, experimentation, and engineering to uncover insights and guide strategic decisions.',
    examples: [
      'Executive dashboards tracking conversion trends and customer churn.',
      'A/B testing frameworks to improve product features with evidence.',
    ],
  },
  {
    name: 'Machine Learning',
    description:
      'Machine Learning builds predictive models from historical data to optimize operations and personalize user experiences.',
    examples: [
      'Demand forecasting models for inventory and procurement planning.',
      'Recommendation engines for content, products, or next-best actions.',
    ],
  },
  {
    name: 'Image Analysis',
    description:
      'Image Analysis uses computer vision techniques to detect objects, classify images, and extract visual information.',
    examples: [
      'Quality-control systems that detect defects on manufacturing lines.',
      'Document scanning tools that capture data from invoices and IDs.',
    ],
  },
  {
    name: 'Blockchain',
    description:
      'Blockchain provides tamper-resistant, distributed ledgers for transparent transactions and auditable workflows.',
    examples: [
      'Supply chain tracking with verifiable handoff records.',
      'Smart contracts for automated settlement and compliance checks.',
    ],
  },
  {
    name: 'Big Data',
    description:
      'Big Data platforms process and analyze high-volume, high-velocity datasets across multiple systems.',
    examples: [
      'Event pipelines handling millions of clickstream records daily.',
      'Unified analytics across CRM, ERP, and marketing platforms.',
    ],
  },
  {
    name: 'Internet of Things',
    description:
      'IoT connects sensors and devices to collect telemetry, trigger actions, and enable remote monitoring.',
    examples: [
      'Fleet tracking systems with GPS and engine diagnostics.',
      'Smart energy monitoring for factories and office campuses.',
    ],
  },
  {
    name: 'Virtual Reality',
    description:
      'Virtual Reality creates fully immersive 3D environments for training, simulation, and interactive experiences.',
    examples: [
      'Safety simulations for high-risk industrial procedures.',
      'Virtual property walkthroughs for real estate sales teams.',
    ],
  },
  {
    name: 'Augmented Reality',
    description:
      'Augmented Reality overlays digital content on the physical world to improve guidance and engagement.',
    examples: [
      'On-device maintenance instructions for field technicians.',
      'Retail try-on experiences for furniture and fashion products.',
    ],
  },
  {
    name: 'Cloud',
    description:
      'Cloud architecture enables scalable infrastructure, managed services, and faster product delivery cycles.',
    examples: [
      'Auto-scaling APIs that handle traffic spikes without downtime.',
      'Disaster recovery setups with multi-region backups.',
    ],
  },
  {
    name: 'Software as a Service (SaaS)',
    description:
      'SaaS delivers software over the web with subscription licensing, centralized updates, and multi-tenant architecture.',
    examples: [
      'B2B workflow platforms with role-based access and billing tiers.',
      'Self-service admin consoles for tenant onboarding and management.',
    ],
  },
  {
    name: 'Developers for Hire',
    description:
      'Dedicated developer engagements provide flexible engineering capacity aligned with your roadmap and delivery goals.',
    examples: [
      'A full-stack team extension for a fast-moving startup.',
      'Specialist engineers for legacy modernization projects.',
    ],
  },
  {
    name: '.NET',
    description:
      '.NET is a robust framework for building enterprise-grade APIs, web apps, and integrated backend systems.',
    examples: [
      'ERP connectors and internal business process automation tools.',
      'Secure REST APIs with role-based identity and access control.',
    ],
  },
  {
    name: 'Java',
    description:
      'Java powers stable, high-performance applications for financial systems, telecom, and large-scale enterprise platforms.',
    examples: [
      'Transaction-heavy payment processing microservices.',
      'Core backend services for policy and claims management.',
    ],
  },
  {
    name: 'Python',
    description:
      'Python accelerates development for data platforms, automation scripts, and AI-driven applications.',
    examples: [
      'ETL pipelines that clean and normalize operational data.',
      'Model-serving APIs for prediction and classification workloads.',
    ],
  },
  {
    name: 'PHP',
    description:
      'PHP remains a practical option for content-driven websites, business portals, and custom e-commerce implementations.',
    examples: [
      'Custom CMS development for editorial teams.',
      'Integration modules for payment gateways and shipping services.',
    ],
  },
  {
    name: 'Golang',
    description:
      'Golang is suited for high-concurrency services, lightweight APIs, and efficient cloud-native tooling.',
    examples: [
      'Real-time event processing services for logistics operations.',
      'Fast internal tooling for CI/CD and platform automation.',
    ],
  },
  {
    name: 'C++',
    description:
      'C++ supports performance-critical applications where low-level memory control and speed are essential.',
    examples: [
      'Embedded control software for connected hardware devices.',
      'High-throughput compute modules in simulation platforms.',
    ],
  },
  {
    name: 'Node.js',
    description:
      'Node.js enables event-driven backend services and JavaScript-based full-stack development.',
    examples: [
      'Real-time chat and notification systems using websockets.',
      'BFF layers orchestrating APIs for web and mobile frontends.',
    ],
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript powers interactive web interfaces and shared logic across browser and server environments.',
    examples: [
      'Dynamic dashboards with live filtering and chart updates.',
      'Reusable UI component libraries for product consistency.',
    ],
  },
  {
    name: 'React Native',
    description:
      'React Native delivers cross-platform mobile apps from one codebase while preserving native performance patterns.',
    examples: [
      'Delivery apps with live order tracking on iOS and Android.',
      'Consumer loyalty apps with push notifications and QR scanning.',
    ],
  },
  {
    name: 'Mobile',
    description:
      'Mobile engineering focuses on responsive, secure, and reliable apps tailored to on-the-go user behavior.',
    examples: [
      'Field service apps for offline data capture and sync.',
      'Customer self-service portals for booking and payments.',
    ],
  },
  {
    name: 'Microsoft',
    description:
      'Microsoft ecosystem services support enterprise identity, productivity, collaboration, and platform governance.',
    examples: [
      'Single sign-on implementation with Entra ID.',
      'Workflow integrations across Outlook, Teams, and SharePoint.',
    ],
  },
  {
    name: 'Azure',
    description:
      'Azure provides enterprise cloud services for hosting, security, observability, and managed databases.',
    examples: [
      'AKS-based microservice deployments with blue-green releases.',
      'Serverless automation with Functions and Logic Apps.',
    ],
  },
  {
    name: 'Power Apps',
    description:
      'Power Apps enables low-code application development for business processes and internal operations.',
    examples: [
      'Approval workflows for procurement and vendor onboarding.',
      'Inspection apps for site teams with photo capture.',
    ],
  },
  {
    name: 'Dynamics 365',
    description:
      'Dynamics 365 unifies CRM and ERP capabilities to improve sales, finance, and service operations.',
    examples: [
      'Lead-to-cash automation for sales teams.',
      'Customer service case management with SLA tracking.',
    ],
  },
  {
    name: 'SharePoint and Microsoft 365',
    description:
      'SharePoint and Microsoft 365 support secure collaboration, document management, and intranet portals.',
    examples: [
      'Knowledge bases with versioning and approval workflows.',
      'Department intranets integrated with Teams channels.',
    ],
  },
  {
    name: 'Power BI',
    description:
      'Power BI converts business data into interactive reports and KPIs for operational and executive teams.',
    examples: [
      'Revenue and margin dashboards by region and product line.',
      'Real-time service-level reporting for support operations.',
    ],
  },
  {
    name: 'Amazon Web Services',
    description:
      'AWS offers a broad cloud stack for compute, storage, analytics, machine learning, and secure networking.',
    examples: [
      'E-commerce backends on ECS with managed databases.',
      'Data lakes and analytics pipelines using S3 and Athena.',
    ],
  },
  {
    name: 'Adobe Commerce',
    description:
      'Adobe Commerce powers enterprise e-commerce with advanced catalog, promotions, and B2B buying experiences.',
    examples: [
      'Multi-storefront deployments with shared product catalogs.',
      'Custom checkout and inventory synchronization workflows.',
    ],
  },
  {
    name: 'Shopify',
    description:
      'Shopify enables fast, secure storefront delivery with app integrations, payment support, and scalable operations.',
    examples: [
      'D2C stores with subscriptions, bundles, and loyalty programs.',
      'Shopify Plus implementations with ERP and fulfillment integration.',
    ],
  },
  {
    name: 'ServiceNow',
    description:
      'ServiceNow digitizes IT and business workflows with service catalog, automation, and incident management.',
    examples: [
      'ITSM setup with SLA tracking and escalation policies.',
      'Employee onboarding flows across HR and IT systems.',
    ],
  },
  {
    name: 'Salesforce',
    description:
      'Salesforce centralizes customer data and drives sales, service, and marketing automation at scale.',
    examples: [
      'Lead scoring and opportunity tracking pipelines.',
      'Customer service automation with omnichannel case handling.',
    ],
  },
  {
    name: 'Pimcore',
    description:
      'Pimcore combines PIM, DAM, and content management for consistent multi-channel product experiences.',
    examples: [
      'Centralized product data syndication across marketplaces.',
      'Digital asset governance for campaigns and catalogs.',
    ],
  },
];
