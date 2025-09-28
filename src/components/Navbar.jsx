import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; 
import { useRef } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const skipRestoreScroll = useRef(false);


    const previousScrollY = useRef(0);

    useEffect(() => {
        if (isMenuOpen) {
            previousScrollY.current = window.scrollY;
            window.scrollTo(0, 0);
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
            // Only restore scroll if not navigating to #hero
            if (!skipRestoreScroll.current) {
                window.scrollTo(0, previousScrollY.current);
            }
            skipRestoreScroll.current = false; // Reset after closing menu
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            setAtTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )} 
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Afif </span> Portofolio
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a 
                            href={item.href} 
                            key={key} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button*/}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {" "}
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>} 
                    {" "}
                </button>
            </div>
            {/* Mobile Menu */}
            

            <div 
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center mobile-menu md:hidden",
                    isMenuOpen && atTop ? "mobile-menu-visible" : "mobile-menu-hidden"
                )}
            >
                <div className="mb-8">
                    <ThemeToggle mobile size={100}/>
                </div>
                <div className="flex flex-col space-y-8 text-xl">
                    {/* Theme toggle for mobile */}
                    
                    
                    {navItems.map((item, key) => (
                        <a 
                            href={item.href} 
                            key={key} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => {
                                skipRestoreScroll.current = true;
                                setIsMenuOpen(false);
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                    
                </div>
            </div>
        </nav>
    );
        
};