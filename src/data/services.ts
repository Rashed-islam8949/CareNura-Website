export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: "core" | "ecosystem";
  accentColor: "blue" | "indigo" | "teal" | "neutral";
  shortDescription: string;
  heroDescription: string;
  businessProblems: string[];
  capabilities: ServiceCapability[];
  technologies: string[];
  relatedServicesSlugs: string[]; // For cross-linking
  image?: string;
}

export const services: Service[] = [
  {
    slug: "web-software",
    title: "Web & Software Engineering",
    category: "core",
    accentColor: "blue",
    shortDescription: "Scalable, high-performance web applications and SaaS platforms.",
    heroDescription: "We engineer enterprise-grade web applications and scalable SaaS platforms built with modern cloud architectures. Our focus is on absolute performance, security, and maintainability.",
    businessProblems: [
      "Monolithic systems causing deployment bottlenecks",
      "Poor performance leading to customer churn",
      "Inability to scale under high user load",
      "High infrastructure and maintenance costs"
    ],
    capabilities: [
      {
        title: "Custom Web Apps",
        description: "Bespoke, high-performance applications built specifically for your complex business rules."
      },
      {
        title: "SaaS Development",
        description: "Multi-tenant architectures designed for massive scale and seamless subscription management."
      },
      {
        title: "Business Portals",
        description: "Secure, role-based dashboards integrating multiple internal systems into a unified interface."
      },
      {
        title: "API Engineering",
        description: "REST and GraphQL architectures built for high-throughput data exchange."
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Go", "PostgreSQL", "AWS"],
    relatedServicesSlugs: ["ai-automation", "data-intelligence"]
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    category: "core",
    accentColor: "indigo",
    shortDescription: "Custom AI agents and workflow automations to accelerate growth.",
    heroDescription: "Integrate native artificial intelligence into your business processes. We build intelligent agents and automated workflows that handle complexity so your team can focus on strategy.",
    businessProblems: [
      "Manual, repetitive operational workflows",
      "High customer support response times",
      "Inconsistent data processing",
      "Lack of intelligent predictive systems"
    ],
    capabilities: [
      {
        title: "AI Customer Agents",
        description: "Context-aware conversational systems that handle nuanced customer queries."
      },
      {
        title: "Workflow Automation",
        description: "End-to-end process automation bridging legacy tools and modern APIs."
      },
      {
        title: "LLM Integration",
        description: "Custom RAG (Retrieval-Augmented Generation) pipelines for internal data."
      },
      {
        title: "Smart Assistants",
        description: "Internal AI copilots that assist employees in making rapid decisions."
      }
    ],
    technologies: ["OpenAI", "Python", "LangChain", "Vector Databases", "n8n", "FastAPI"],
    relatedServicesSlugs: ["data-intelligence", "web-software"]
  },
  {
    slug: "data-intelligence",
    title: "Data & Business Intelligence",
    category: "core",
    accentColor: "teal",
    shortDescription: "Transform raw data into actionable insights and predictive models.",
    heroDescription: "We engineer scalable data pipelines and interactive dashboards that turn raw information into a clear competitive advantage. Move from reactive reporting to proactive strategy.",
    businessProblems: [
      "Siloed data across disjointed systems",
      "Inability to extract real-time business insights",
      "Slow, manual reporting cycles",
      "Lack of predictive analytics for forecasting"
    ],
    capabilities: [
      {
        title: "Business Dashboards",
        description: "Real-time, interactive visualizations of your most critical KPIs."
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning models forecasting trends, demand, and risk."
      },
      {
        title: "Data Pipelines",
        description: "Fault-tolerant ETL/ELT architectures processing massive data volumes."
      },
      {
        title: "Data Warehousing",
        description: "Centralized, optimized storage for complex analytical querying."
      }
    ],
    technologies: ["ClickHouse", "dbt", "PostgreSQL", "Python", "Apache Kafka", "GCP BigQuery"],
    relatedServicesSlugs: ["ai-automation", "growth-marketing"]
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Native and cross-platform mobile experiences for iOS and Android.",
    heroDescription: "Premium mobile applications designed for seamless user experiences. We leverage cross-platform engineering to deliver high performance without the overhead of dual codebases.",
    businessProblems: [
      "Poor mobile user engagement",
      "High cost of maintaining separate iOS and Android teams",
      "Subpar performance in existing mobile apps"
    ],
    capabilities: [
      {
        title: "Cross-Platform Apps",
        description: "Unified codebase delivering native-like performance on both platforms."
      },
      {
        title: "Native iOS/Android",
        description: "Platform-specific engineering for complex hardware integrations."
      },
      {
        title: "Mobile UX/UI",
        description: "Touch-optimized, intuitive interfaces focusing on conversion."
      }
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "TypeScript"],
    relatedServicesSlugs: ["web-software", "branding-creative"],
    image: "/images/Mobile Apps.png"
  },
  {
    slug: "growth-marketing",
    title: "Growth & Digital Marketing",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Data-driven digital marketing and growth hacking strategies.",
    heroDescription: "Engineering the funnel. We apply a data-first approach to acquisition, conversion, and retention, ensuring your digital products reach the right audience efficiently.",
    businessProblems: [
      "High customer acquisition costs (CAC)",
      "Low conversion rates on key funnels",
      "Lack of clear attribution models"
    ],
    capabilities: [
      {
        title: "Performance Marketing",
        description: "ROI-focused campaigns across search and social channels."
      },
      {
        title: "SEO Strategy",
        description: "Technical and content-driven search engine optimization."
      },
      {
        title: "Conversion Optimization",
        description: "A/B testing and funnel refinement to maximize yield."
      }
    ],
    technologies: ["Google Analytics", "PostHog", "Meta Ads", "Google Ads", "Vercel Analytics"],
    relatedServicesSlugs: ["branding-creative", "data-intelligence"],
    image: "/images/Growth & Digital Marketing.png"
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Premium visual identity, UI/UX design, and brand positioning.",
    heroDescription: "Your brand is your ultimate differentiator. We design cohesive, premium identities and user interfaces that communicate intelligence, trust, and sophistication.",
    businessProblems: [
      "Inconsistent brand messaging across platforms",
      "Outdated visual identity losing market relevance",
      "Poor UI causing user friction"
    ],
    capabilities: [
      {
        title: "Visual Identity",
        description: "Logos, color systems, and typography ensuring premium positioning."
      },
      {
        title: "UI/UX Design",
        description: "User-centric interface design systems that look beautiful and perform."
      },
      {
        title: "Design Systems",
        description: "Scalable component libraries bridging design and engineering."
      }
    ],
    technologies: ["Figma", "Framer", "Adobe Creative Cloud", "Storybook"],
    relatedServicesSlugs: ["web-software", "video-motion"],
    image: "/images/Branding & Creative.png"
  },
  {
    slug: "video-motion",
    title: "Video & Motion",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "High-end motion graphics and video production for digital platforms.",
    heroDescription: "Communicate complex concepts through fluid motion and high-end video production. We craft visual narratives that capture attention in a saturated digital landscape.",
    businessProblems: [
      "Inability to explain complex products simply",
      "Low engagement on digital advertising channels",
      "Static brand presence lacking dynamism"
    ],
    capabilities: [
      {
        title: "Motion Graphics",
        description: "Fluid, brand-aligned animations for web and marketing."
      },
      {
        title: "Product Promos",
        description: "High-impact videos explaining software and digital solutions."
      },
      {
        title: "Micro-interactions",
        description: "Subtle UI animations enhancing the digital experience."
      }
    ],
    technologies: ["After Effects", "Cinema 4D", "Premiere Pro", "Lottie"],
    relatedServicesSlugs: ["branding-creative", "growth-marketing"],
    image: "/images/Video & Motion.png"
  },
  {
    slug: "n8n-automation",
    title: "n8n & Workflow Automation",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Custom workflow automation connecting APIs and business tools using n8n.",
    heroDescription: "We build custom automation pipelines using n8n and other robust workflow tools to eliminate manual data entry and connect your entire software ecosystem.",
    businessProblems: [
      "Manual data entry between systems",
      "Inefficient internal processes",
      "API integration bottlenecks"
    ],
    capabilities: [
      {
        title: "API Orchestration",
        description: "Seamlessly connect disparate tools and APIs without writing heavy custom backend code."
      },
      {
        title: "Custom Nodes",
        description: "Developing custom n8n nodes for proprietary internal systems."
      },
      {
        title: "Business Automation",
        description: "End-to-end automation of sales, marketing, and HR workflows."
      }
    ],
    technologies: ["n8n", "Node.js", "Webhooks", "REST APIs", "Zapier"],
    relatedServicesSlugs: ["ai-automation", "data-intelligence"],
    image: "/images/n8n & Workflow Automation.png"
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Deploy intelligent agents, computer vision, and NLP models into production.",
    heroDescription: "From training custom models to deploying state-of-the-art LLMs, we integrate advanced artificial intelligence seamlessly into your existing digital products.",
    businessProblems: [
      "Unstructured data sitting unused",
      "Need for intelligent personalization",
      "High costs for manual analysis tasks"
    ],
    capabilities: [
      {
        title: "LLM Integration",
        description: "Custom chatbots, RAG pipelines, and AI assistants powered by OpenAI and Anthropic."
      },
      {
        title: "Computer Vision",
        description: "Image recognition, object detection, and automated visual analysis."
      },
      {
        title: "Predictive Modeling",
        description: "Machine learning algorithms that forecast trends and user behavior."
      }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Pinecone", "HuggingFace"],
    relatedServicesSlugs: ["data-science", "web-software"],
    image: "/images/Ai and machine learning .png"
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "Extract deep insights from complex datasets with statistical modeling.",
    heroDescription: "We turn raw, chaotic data into a strategic asset. Our data science team builds robust analytical models to uncover hidden patterns and drive business growth.",
    businessProblems: [
      "No clear visibility into business metrics",
      "Poor data quality and fragmented sources",
      "Guesswork in strategic decision making"
    ],
    capabilities: [
      {
        title: "Statistical Analysis",
        description: "Deep dive into your data to uncover correlations and causalities."
      },
      {
        title: "Data Visualization",
        description: "Interactive, real-time dashboards that tell a story with your data."
      },
      {
        title: "Data Engineering",
        description: "Building scalable pipelines to clean, transform, and store big data."
      }
    ],
    technologies: ["Pandas", "Scikit-Learn", "Tableau", "PowerBI", "BigQuery", "Snowflake"],
    relatedServicesSlugs: ["ai-machine-learning", "data-intelligence"],
    image: "/images/Data Science & Analytics.png"
  },
  {
    slug: "full-stack-engineering",
    title: "Full-Stack Web Dev",
    category: "ecosystem",
    accentColor: "neutral",
    shortDescription: "End-to-end web development with modern JavaScript and robust backends.",
    heroDescription: "We engineer lightning-fast, accessible, and scalable web applications from the database layer up to the user interface using modern full-stack frameworks.",
    businessProblems: [
      "Slow, outdated web applications",
      "Lack of technical expertise for custom features",
      "Poor SEO and Core Web Vitals"
    ],
    capabilities: [
      {
        title: "Frontend Engineering",
        description: "Responsive, animated, and highly interactive user interfaces."
      },
      {
        title: "Backend Architecture",
        description: "Secure, scalable, and highly available server-side infrastructure."
      },
      {
        title: "Database Design",
        description: "Optimized relational and NoSQL database schemas for fast querying."
      }
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Prisma"],
    relatedServicesSlugs: ["mobile-apps", "web-software"],
    image: "/images/Full-Stack Web Dev banner .png"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
