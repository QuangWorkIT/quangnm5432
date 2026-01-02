import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Calendar, FolderOpen } from "lucide-react";
import bdn from "@/assets/bdn.png"
import iam from "@/assets/iam.png"
import chat from "@/assets/chat.png"

function ProjectSection() {
    const projects = [
        {
            title: "Blood Donation Support System",
            desc:
                "Developed the frontend for a comprehensive blood donation management platform, providing an intuitive interface for donors, recipients, and healthcare staff. " +
                "Implemented secure navigation, responsive layouts, and role-based user flows to support donation registration, event tracking, and information management.",
            techs: ["React", "TypeScript", "React Router", "Tailwind CSS"],
            time: "Jun 2025 – Aug 2025",
            path: "https://github.com/QuangWorkIT/BloodDonationSupportSystem_FE",
            img: bdn
        },
        {
            title: "Identity and Access Management (IAM) Service",
            desc:
                "Built a web-based Identity and Access Management system to centralize user authentication and authorization. " +
                "Designed RESTful APIs and implemented JWT-based security to manage user roles, permissions, and secure access across multiple services.",
            techs: ["React", "Java", "Spring Boot", "JWT", "PostgreSQL", "REST API"],
            time: "Sep 2025 – Dec 2025",
            path: "",
            img: iam
        },
        {
            title: "Real-Time Chat Application",
            desc:
                "Developed a real-time messaging web application supporting instant message delivery and user presence updates. " +
                "Implemented WebSocket-based communication with a Node.js backend to ensure low-latency, reliable message exchange.",
            techs: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebSocket"],
            time: "Dec 2025 – Jan 2026",
            path: "https://github.com/QuangWorkIT/chat-app-demo",
            img: chat
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    const techVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <div className="p-4 px-6 md:p-6 " style={{ backgroundColor: "#1c1f26" }}>
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FolderOpen className="w-8 h-8" style={{ color: "#5eb3ba" }} />
                    <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "#f2f5f7" }}>
                        My <span style={{
                            background: "linear-gradient(to right, #5eb3ba, rgba(94, 179, 186, 0.7))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>Projects</span>
                    </h1>
                </div>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: "#738594" }}>
                    Explore my recent projects with full-stack development skills
                </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.ul
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.li
                        key={project.title}
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="rounded-xl p-6 flex flex-col h-full gap-2"
                        style={{
                            backgroundColor: "#272a31",
                            border: "1px solid #33373f",
                        }}
                    >
                        <div className="group mb-4 rounded-[10px] border-2 border-[#33373f] overflow-hidden">
                            <div className="aspect-[16/9] w-full">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-left transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Time Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-4 h-4" style={{ color: "#5eb3ba" }} />
                            <span className="text-sm" style={{ color: "#738594" }}>
                                {project.time}
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            className="text-xl font-semibold mb-3 leading-tight"
                            style={{ color: "#f2f5f7" }}
                        >
                            {project.title}
                        </h2>

                        {/* Tech Stack */}
                        <motion.ul
                            className="flex flex-wrap gap-2 mb-4"
                            variants={containerVariants}
                        >
                            {project.techs.map((tech) => (
                                <motion.li
                                    key={tech + project.title}
                                    variants={techVariants}
                                    className="px-3 py-1 text-xs font-medium rounded-full"
                                    style={{
                                        backgroundColor: "rgba(94, 179, 186, 0.1)",
                                        color: "#5eb3ba",
                                        border: "1px solid rgba(94, 179, 186, 0.3)",
                                    }}
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Description */}
                        <p
                            className="text-sm leading-relaxed flex-grow mb-6"
                            style={{ color: "#738594" }}
                        >
                            {project.desc}
                        </p>

                        {/* Action Button */}
                        {project.path ? (
                            <Link to={project.path} target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: "#5eb3ba",
                                        color: "#1c1f26",
                                    }}
                                >
                                    <Github className="w-4 h-4" />
                                    View on GitHub
                                    <ExternalLink className="w-4 h-4" />
                                </motion.button>
                            </Link>
                        ) : (
                            <motion.button
                                disabled
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
                                style={{
                                    backgroundColor: "#33373f",
                                    color: "#738594",
                                }}
                            >
                                <Github className="w-4 h-4" />
                                Coming Soon
                            </motion.button>
                        )}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default ProjectSection;
