import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"

function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false)

    const navs = [
        { path: "/", label: "Home" },
        { path: "/experience", label: "Experience" },
        { path: "/project", label: "Project" },
    ];

    const isActive = (path: string) => location.pathname === path;

    // tracking header position
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="sticky top-4 z-50 mx-auto px-4 flex justify-center">
            <div className={`
                    relative
                    flex md:justify-between justify-center items-center
                    px-8 py-2 md:py-3 rounded-full
                    transition-all duration-500
                    backdrop-blur-xl backdrop-saturate-150
                    shadow-lg shadow-black/20
                    ${scrolled
                        ? "bg-white/10 border border-white/30 md:w-[80%]"
                        : "bg-white/4 border border-white/10 w-full"}
                `}  >
                {/* Logo */}
                <Link to="/" className="group flex items-center gap-3 hidden md:flex">
                    <div className="relative">
                        <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center border-2 border-[#5EB3BA] transition-all duration-300">
                            <span className="font-bold text-lg">Q</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-[#5EB3BA] rounded-full animate-pulse"></div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold group-hover:text-white/70 transition-colors duration-300">
                            Minh Quang
                        </h1>
                        <p className="text-xs text-muted-foreground">Developer</p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-1">
                        {navs.map((nav) => (
                            <Link to={nav.path} key={nav.path}>
                                <li
                                    className={`relative px-3 py-2 md:text-sm text-xs font-medium rounded-full transition-all duration-200
                                        ${isActive(nav.path)
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-primary-foreground"
                                        }`}
                                >
                                    {nav.label}
                                    {isActive(nav.path) && (
                                        <span className="absolute inset-0 rounded-full animate-pulse"></span>
                                    )}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header
