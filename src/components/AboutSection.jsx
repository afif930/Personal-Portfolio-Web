import { Briefcase, Code, Code2, User } from "lucide-react"
import { cn } from "../lib/utils"


export const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                {/* Tittle */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* About Text */}
                    <div className="space-y-8">
                        <h3 className="text-4xl font-semibold">Developer with a Physics Background</h3>

                        <p className="text-muted-foreground">
                            I’m a physics undergraduate with a strong interest in software development. 
                            I enjoy building practical tools—from AI-powered chatbots to lightweight desktop utilities—
                            and I focus on writing clean, logical code that solves real problems.
                        </p>

                        <p className="text-muted-foreground">
                            Most of my projects revolve around Python, web development, and automation. 
                            I like working on small to medium-sized builds where I can iterate quickly, 
                            refine ideas, and turn them into functional, polished experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                                {" "}
                            </a>

                            <a 
                                href="#contact" 
                                className={cn(
                                    "px-6 py-2 rounded-full border border-primary text-primary",
                                    "hover:bg-primary/10 transition-colors duration-300"
                                )}
                            >
                                {" "}
                                Download CV
                                {" "}
                            </a>
                        </div>
                    </div>

                    {/* Skills / Services */}
                    <div className="grid grid-cols-1 gap-3">
                        {/* Column  1 */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code2 className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web & Desktop App Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive web apps and efficient desktop tools using Python, FastAPI, 
                                        React, and CustomTkinter. I focus on clean logic, usability, and maintainable code.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design Support</h4>
                                    <p className="text-muted-foreground">
                                        Designing simple, intuitive interfaces to support the apps I build. 
                                        My focus is clarity, accessibility, and turning functionality into a smooth user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="gradient-border p-5 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Organising features, structuring development flow, and breaking problems 
                                        into manageable steps to ensure projects move efficiently from concept to completion.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}