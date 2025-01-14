import ProjectDetail from "@/components/projectDetails";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Fabrica Fetish",
    description:
      "Fabrica Fetish is a modern e-commerce platform for smooth shopping and efficient admin management",
    image: `/1.fabrica-fetish.png`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    github: "https://github.com/mohammad-al-samiul/fabrica-fetish-client",
    live: "https://fabrica-fetish-client.vercel.app",
    longDescription:
      "Fabrica Fetish is a modern e-commerce platform that provides a seamless shopping experience with features like product browsing, order tracking, and secure payment integration through AamarPay. Users can easily manage their orders, while admins have powerful tools for managing products, users, and payments. The platform is optimized for all devices with a responsive design.",
    features: [
      "Browse, search, and filter products by categories and price",
      "View detailed product information, add items to the cart, and checkout seamlessly",
      "Access order history and track payments with real-time updates",
      "Admin features to manage users, assign roles, and monitor system activity",
      "Add, update, and organize products into categories",
      "Monitor and manage orders and payments with detailed records",
      "Responsive design with light/dark theme toggling for all devices",
      "Secure payments integrated with AamarPay for fast and reliable transactions",
    ],
  },
  {
    id: 2,
    title: "Bikehub",
    description:
      "The Bikehub is a responsive app for hassle-free bike rentals, ensuring efficiency and security.",
    image: "/2.Bikhub.png",
    tags: ["React", "Redux", "Typescript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/bikehub-client",
    live: "https://bikehub-client.netlify.app/",
    longDescription:
      "Bikehub is an intuitive bike rental system offering secure authentication, easy bike management, and seamless booking. Users can browse, book, and manage rentals, while admins have powerful tools for managing bikes, users, and payments. Advanced features like coupon management, discounts, and a gamified discount wheel enhance user engagement. The platform’s responsive design ensures a smooth experience on all devices, making bike rentals hassle-free and efficient.",
    features: [
      "Secure authentication with Firebase and JWT authorization",
      "Easy bike browsing, booking, and rental management",
      "Admin dashboard for managing bikes, users, and rental statuses",
      "Payment processing and tracking for paid/unpaid rentals",
      "Coupon and discount system with gamified discount wheel",
      "Responsive design for mobile, tablet, and desktop compatibility",
      "Advanced reporting and analytics for admins",
      "User profile management for updating personal details and rental history",
    ],
  },
  {
    id: 3,
    title: "Regal Dragon",
    description:
      "Regal Dragon's app provides secure ordering, admin tools, and analytics in a responsive design.",
    image: "/3.Regal-Dragon.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client",
    live: "https://regal-dragon-restaurant.netlify.app",
    longDescription:
      "Regal Dragon is a comprehensive restaurant management website built using the MERN stack (MongoDB, Express.js, React with Vite, and Node.js). This application aims to streamline restaurant operations, providing an intuitive interface for managing reservations, orders, menus, and staff.",
    features: [
      "Secure login and registration with JWT for user authentication",
      "View, create, and manage customer reservations",
      "Track and manage orders in real-time",
      "Add, update, and remove menu items",
      "Manage staff roles and schedules",
      "Dashboard for key metrics and restaurant performance overview",
    ],
  },
  {
    id: 4,
    title: "Doctor's Portal",
    description:
      "Doctor's Portal is for appointment booking, management, and real-time tracking.",
    image: "/4.Doctors-Portal.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
    live: "https://doctors-porta1.netlify.app",
    longDescription:
      "The Doctor's Portal is a modern platform for seamless appointment booking, real-time monitoring, and secure payment processing. Patients can easily schedule, manage, and pay for appointments, while admins can efficiently manage doctor profiles, user appointments, and appointments status. The portal is designed with security and user-friendly features for both patients and healthcare providers.",

    features: [
      "Secure user authentication with Firebase and JWT authorization",
      "Efficient appointment booking and management for patients",
      "Flexible appointment rescheduling and cancellation options",
      "Seamless payment processing integrated with Stripe",
      "Admin panel for managing doctor profiles, appointments, and users",
      "Real-time monitoring of user-booked appointments for admins",
      "Responsive design ensuring accessibility across all devices",
    ],
  },
  {
    id: 5,
    title: "Genius Car",
    description:
      "Genius Car is a secure web app for car services with authentication, service ordering.",
    image: "/5.Genius-Car.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mohammad-al-samiul/genius-car-client",
    live: "https://genius-car-react.netlify.app",
    longDescription:
      "Genius Car is an intuitive platform for managing car services, allowing users to securely book services, track orders, and contact service providers with ease. Integrated with Firebase for secure authentication and JWT for access control, it ensures smooth interaction between users and service providers, all while providing an efficient backend powered by Node.js and MongoDB.",
    features: [
      "Secure user authentication using Firebase and JWT",
      "Browse and order various car services with ease",
      "Contact service provider through integrated messaging form",
      "Manage and track orders efficiently with real-time updates",
      "React-based frontend offering a dynamic user interface",
      "Backend powered by Node.js, Express, and MongoDB for scalable performance",
      "RESTful API for clear separation of concerns and ease of maintenance",
      "User-friendly car service booking process",
    ],
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return notFound();
  }

  return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
