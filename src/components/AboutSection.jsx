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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* About Text */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Developer & Designer</h3>

                        <p className="text-muted-foreground">
                            I'm a physics undergrad with a passion for coding and design. 
                            From building chatbots to crafting user interfaces, I love bringing ideas to life through technology.
                        </p>

                        <p className="text-muted-foreground">
                            I've worked on diverse projects, honing my skills in problem-solving and creative thinking.
                            Whether it's developing a new feature or designing a sleek interface, I thrive on challenges that push me to learn and grow.
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
                                        Building responsive and dynamic web applications using modern frameworks, 
                                        and crafting efficient desktop applications.
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
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive and engaging user interfaces, 
                                        focusing on user experience and visual aesthetics.
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
                                        Experienced in managing projects from concept to completion, 
                                        ensuring timely delivery and quality outcomes.
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