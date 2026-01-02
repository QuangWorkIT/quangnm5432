import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

interface TimelineCardProps {
    id: string,
    time: string;
    title: string;
    location: string;
    position: string;
    description: string;
    index: number;
}

const TimelineCard = ({ time, title, location, position, description, id, index }: TimelineCardProps) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5*index + 0.5,
                ease: "easeOut"
            }}
            id={id}
            className="relative pl-8 pb-20 last:pb-0"
        >
            {/* Timeline line */}
            <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                    background: "linear-gradient(to bottom, #5eb3ba, rgba(94, 179, 186, 0.5), transparent)"
                }}
            />

            {/* Timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{
                    backgroundColor: "#5eb3ba",
                    boxShadow: "0 0 10px rgba(94, 179, 186, 0.4)"
                }}
            />  

            {/* Card content */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg p-6 transition-colors hover:border-[#5eb3ba]/50"
                style={{
                    backgroundColor: "#272a31",
                    border: "1px solid #33373f"
                }}
            >
                {/* Time badge */}
                <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "#738594" }}>
                    <Calendar className="w-4 h-4" style={{ color: "#5eb3ba" }} />
                    <span className="font-mono">{time}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-[#f2f5f7]">{title}</h3>

                {/* Location & Position */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4" style={{ color: "#738594" }}>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" style={{ color: "rgba(94, 179, 186, 0.7)" }} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" style={{ color: "rgba(94, 179, 186, 0.7)" }} />
                        <span className="font-medium" style={{ color: "#5eb3ba" }}>{position}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed text-sm" style={{ color: "#738594" }}>
                    {description}
                </p>
            </motion.div>
        </motion.li>
    );
};

export default TimelineCard;
