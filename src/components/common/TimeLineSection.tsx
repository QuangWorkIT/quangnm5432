import { motion } from "framer-motion";
import { Code2, Wrench, Database, Sparkles } from "lucide-react";
import SkillBadge from "./SkillBadge";
import TimelineCard from "./TimeLineCard";
import { useLocation } from "react-router";
import { useEffect } from "react";

const TimelineSection = () => {
    const primaryStacks = ["Java", "Spring Boot", "Node.js", "Express.js", "JavaScript", "TypeScript", "React"];
    const tools = ["Docker", "Git", "Redis", "Kafka", "AWS", "Figma"];
    const databases = ["PostgreSQL", "MongoDB", "SQL Server"];

    const experiences = [
        {
            id: "OJT",
            time: "Sep 2025 - Dec 2025",
            title: "On Job Training",
            location: "FPT Software, Ho Chi Minh City",
            position: " Intern Full-Stack Developer",
            description:
                "Served as technical lead for a small development team, designing and implementing a full-stack web application. " +
                "Developed RESTful APIs using Java Spring Boot and built a responsive user interface with React.js. " +
                "Handled deployment and environment configuration on AWS EC2, ensuring application stability and accessibility.",
        },
        {
            id: "fpt-university",
            time: "Sep 2023 - Present",
            title: "FPT University",
            location: "Ho Chi Minh City",
            position: "Bachelor of Software Engineering (Student)",
            description:
                "Studying core software engineering principles, including data structures, algorithms, web application development, " +
                "and database design. Actively building practical projects using modern technologies to strengthen full-stack development skills.",
        },
    ];

    const skillCategories = [
        { title: "Primary Stacks", icon: Code2, skills: primaryStacks },
        { title: "Tools & Platforms", icon: Wrench, skills: tools },
        { title: "Databases", icon: Database, skills: databases },
    ];

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <section className="min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: "rgba(94, 179, 186, 0.1)",
                            border: "1px solid rgba(94, 179, 186, 0.3)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#5eb3ba" }} />
                        <span className="text-sm font-medium" style={{ color: "#5eb3ba" }}>Experience & Skills</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#f2f5f7" }}>
                        My <span style={{
                            background: "linear-gradient(to right, #5eb3ba, rgba(94, 179, 186, 0.7))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>Journey</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "#738594" }}>
                        2+ years of building web applications with modern technologies
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="space-y-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: categoryIndex * 0.1 + 0.3 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="p-2 rounded-lg"
                                        style={{
                                            backgroundColor: "rgba(94, 179, 186, 0.1)",
                                            border: "1px solid rgba(94, 179, 186, 0.3)"
                                        }}
                                    >
                                        <category.icon className="w-5 h-5" style={{ color: "#5eb3ba" }} />
                                    </div>
                                    <h2 className="text-lg font-semibold" style={{ color: "#f2f5f7" }}>{category.title}</h2>
                                </div>
                                <ul className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBadge
                                            key={skill}
                                            skill={skill}
                                            index={categoryIndex * 6 + skillIndex}
                                        />
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div
                            className="h-px flex-1"
                            style={{
                                background: "linear-gradient(to right, transparent, #33373f, #33373f)"
                            }}
                        />
                        <h2 className="text-2xl font-bold" style={{ color: "#f2f5f7" }}>Works</h2>
                        <div
                            className="h-px flex-1"
                            style={{
                                background: "linear-gradient(to left, transparent, #33373f, #33373f)"
                            }}
                        />
                    </div>

                    <ul className="relative">
                        {experiences.map((experience, index) => (
                            <TimelineCard
                                key={experience.title}
                                {...experience}
                                index={index}
                            />
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default TimelineSection;
