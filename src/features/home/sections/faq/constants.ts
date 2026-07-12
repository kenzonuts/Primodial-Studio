export const FAQ_SECTION_COPY = {
  eyebrow: "FAQ",
  headline: "Frequently Asked Questions",
  description:
    "Clear answers to the questions teams ask before starting a partnership with Primordial Studio.",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "services",
    question: "What services does Primordial Studio provide?",
    answer:
      "We are a Creative Technology Studio covering software engineering, website and mobile development, UI/UX design, brand identity, artificial intelligence, creative technology, Roblox development, and 3D visualization. Engagements can focus on a single capability or combine design and engineering end to end.",
  },
  {
    id: "process",
    question: "How does the development process work?",
    answer:
      "We follow a structured path: Discovery, Strategy, Design, Development, Testing, then Launch & Growth. You get clear milestones, visible progress, and decisions documented so the product stays coherent from first conversation to post-release iteration.",
  },
  {
    id: "startups",
    question: "Can you work with startups?",
    answer:
      "Yes. We partner with early-stage and growth-stage teams who need senior craft without unnecessary process. We help prioritize scope, choose durable architecture, and ship an MVP that can scale as the business proves itself.",
  },
  {
    id: "maintenance",
    question: "Do you provide long-term maintenance?",
    answer:
      "Yes. Many clients keep us as an ongoing partner for monitoring, iteration, performance work, and feature development after launch. We prefer relationships measured in product outcomes—not one-off handoffs.",
  },
  {
    id: "redesign",
    question: "Can you redesign existing products?",
    answer:
      "Absolutely. We audit current product experience and technical foundations, then redesign interfaces and systems with minimal disruption—improving usability, performance, and maintainability without throwing away what already works.",
  },
  {
    id: "timeline",
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on scope and complexity. A focused marketing site may take a few weeks; a full product platform can span several months. After discovery, we provide a clear plan with phases, dependencies, and realistic delivery windows.",
  },
  {
    id: "ai",
    question: "Can you develop AI-powered applications?",
    answer:
      "Yes. We integrate practical AI—assistants, automation, and LLM-powered workflows—into real products. We prioritize reliability, data handling, and measurable business value over experimental demos.",
  },
  {
    id: "roblox",
    question: "Do you build Roblox experiences?",
    answer:
      "Yes. Our Roblox work includes gameplay systems, scripting, UI, economy design, multiplayer architecture, and map production—built with the same engineering discipline we apply to web and mobile products.",
  },
];
