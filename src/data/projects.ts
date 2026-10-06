export interface Project {
  slug: string;
  title: string;
  category: "engineering" | "ai" | "data";
  type: "Concept Showcase" | "Architecture Showcase" | "Internal Project";
  shortDescription: string;
  problem: string;
  approach: string;
  solution: string;
  technicalHighlights: string[];
  currentStatus: string;
  technologies: string[];
  serviceSlugs: string[]; // Links to relevant services
}

export const projects: Project[] = [
  {
    slug: "ai-customer-intelligence",
    title: "AI-Powered Customer Intelligence",
    category: "ai",
    type: "Concept Showcase",
    shortDescription: "An internal architectural model demonstrating scalable AI agent deployment for real-time customer support routing and sentiment analysis.",
    problem: "Inefficient manual routing of customer queries, leading to bottlenecked operations and inconsistent data formatting.",
    approach: "Design an event-driven system where incoming requests are immediately ingested and evaluated by specialized language models before hitting human queues.",
    solution: "A custom LLM pipeline orchestrating multiple specialized agents. One agent classifies intent, another retrieves context via RAG, and a final agent generates a draft response or routes to the correct human department.",
    technicalHighlights: [
      "Sub-second intent classification using optimized smaller models.",
      "Vector search integration for instant knowledge base retrieval.",
      "Stateless agent architecture allowing horizontal scaling under load."
    ],
    currentStatus: "Architecture fully mapped; core components successfully benchmarked in isolated testing.",
    technologies: ["Python", "Next.js", "OpenAI API", "PostgreSQL", "LangChain"],
    serviceSlugs: ["ai-automation", "web-software"]
  },
  {
    slug: "enterprise-data-pipeline",
    title: "Enterprise Data Pipeline",
    category: "data",
    type: "Architecture Showcase",
    shortDescription: "A secure, high-throughput data processing architecture designed to handle millions of events per second with zero data loss.",
    problem: "Data bottlenecks in legacy monolithic systems causing analytics delays and periodic data loss during traffic spikes.",
    approach: "Decouple ingestion from processing using a distributed streaming platform, ensuring fault tolerance and exactly-once processing semantics.",
    solution: "Implementation of a distributed event-driven microservices architecture. Apache Kafka handles ingestion buffering, while specialized Go services process, validate, and write the data into ClickHouse for real-time analytics.",
    technicalHighlights: [
      "Decoupled event streaming handling burst traffic up to 10k RPS.",
      "Columnar storage optimization reducing query times for aggregations.",
      "Automated schema validation preventing corrupt data injection."
    ],
    currentStatus: "System design finalized; infrastructure-as-code (Terraform) templates prepared for rapid deployment.",
    technologies: ["Go", "Kafka", "ClickHouse", "Terraform", "React"],
    serviceSlugs: ["data-intelligence", "web-software"]
  },
  {
    slug: "scalable-saas-core",
    title: "Scalable SaaS Core Architecture",
    category: "engineering",
    type: "Internal Project",
    shortDescription: "A multi-tenant boilerplate architecture designed for security, isolation, and rapid deployment of new enterprise applications.",
    problem: "Starting complex SaaS products from scratch involves repetitive, error-prone setup of authentication, billing, and tenant isolation.",
    approach: "Build a reusable, rigorously tested core repository implementing row-level security (RLS) and strict bounded contexts.",
    solution: "A Next.js front-end paired with a Node.js API layer. PostgreSQL utilizes schema-based multi-tenancy and RLS to ensure complete data isolation. Integrated with modern payment and auth providers from day one.",
    technicalHighlights: [
      "Database-level row security guaranteeing zero cross-tenant data leakage.",
      "Edge-cached routing for lightning-fast global load times.",
      "Modular design allowing simple swapping of infrastructure providers."
    ],
    currentStatus: "In active internal use; serves as the foundation for our rapid prototyping phase.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    serviceSlugs: ["web-software"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
