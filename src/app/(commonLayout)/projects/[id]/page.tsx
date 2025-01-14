import ProjectDetail from "@/components/projectDetails";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
    longDescription:
      "This e-commerce platform provides a seamless shopping experience with features like product browsing, cart management, secure checkout with Stripe, and order tracking. Built with Next.js for optimal performance and SEO, it offers a responsive design for all devices.",
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product and order management",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Trello-like application for managing tasks and projects efficiently.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-app-demo.herokuapp.com",
    longDescription:
      "This task management application helps teams organize and track their projects effectively. Inspired by Trello, it offers a user-friendly interface for creating boards, lists, and cards. Built with React and Redux for the frontend, and Node.js with MongoDB for the backend.",
    features: [
      "Drag-and-drop interface for task management",
      "Real-time updates using WebSockets",
      "Team collaboration with shared boards",
      "Task assignments and due dates",
      "File attachments and comments",
      "Activity logs and notifications",
    ],
  },
  {
    id: 3,
    title: "AI-powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing for customer support.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/yourusername/ai-chatbot",
    live: "https://ai-chatbot-demo.pythonanywhere.com",
    longDescription:
      "This AI-powered chatbot leverages natural language processing to provide intelligent customer support. Built with Python and TensorFlow for the backend NLP model, and React for the frontend chat interface, it offers a seamless conversational experience for users seeking assistance.",
    features: [
      "Natural language understanding and generation",
      "Intent recognition and entity extraction",
      "Multi-turn conversation handling",
      "Integration with knowledge base for accurate responses",
      "Sentiment analysis for customer satisfaction monitoring",
      "Easy integration with existing customer support systems",
    ],
  },
];

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) {
    return notFound();
  }
  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  );
}
