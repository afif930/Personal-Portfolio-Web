import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Water Quality Evaluation App",
        description: "A desktop application that analyzes water quality based on user-input parameters and automatically generates improvement recommendations. Designed with a clean CustomTkinter UI and modular calculation logic.",
        image: "/projects/WaterApp.png",
        tags: ["Python", "CustomTkinter", "Desktop App", "Data Processing", "Water Quality Analysis", "Recommendations"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "The Legend of The Land",
        description: "A fantasy-themed login and profile system built with Tkinter and Pygame. Features animated loading screens, background music, user authentication, and character visualization. Designed as a polished desktop UI experience.",
        image: "/projects/TheLegendOfTheLand.png",
        tags: ["Python", "Tkinter", "Pygame", "Desktop App", "Animation", "Game UI", "Authentication", "Multimedia"],
        demoUrl: "#",
        githubUrl: "https://github.com/afif930/TheLegendOfTheLand",
    },
    {
        id: 3,
        title: "PDF Splitter and Rename for Litbang PSUA",
        description: "A lightweight desktop tool for splitting and renaming PDF files in batch. Users can customize filename formats, split configurations, and output directories. Built for real workflow needs at Litbang PSUA.",
        image: "/projects/PdfSplitter.png",
        tags: ["Python", "Tkinter", "PDF Processing", "Automation", "File Management", "Desktop App"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Smart Library",
        description: "A self-checkout library application integrating Python, Tkinter, Arduino, and RFID. Users can log in, scan books, and receive automated email notifications. Includes fine tracking, CSV-based logging, and an admin dashboard for managing the library database.",
        image: "/projects/SmartLibrary.png",
        tags: ["Python", "Tkinter", "Arduino", "RFID", "Desktop App", "Automation", "Email Notification", "CSV Logging", "Admin Dashboard", "Hardware Integration"],
        demoUrl: "#",
        githubUrl: "#",
    },    
    {
        id: 5,
        title: "Diggo AI",
        description: "A full Retrieval-Augmented Generation (RAG) system deployed on a VPS using Docker. Architecture includes Ollama (custom Llama-3 model), ChromaDB for vector storage, a Python ingestion service for file embeddings, and a FastAPI web server handling multilingual queries, context retrieval, and UI rendering.",
        image: "/projects/DiggoAI.png",
        tags: ["Python", "FastAPI", "Docker", "RAG", "Llama 3", "Ollama", "ChromaDB", "Embeddings", "Vector Database", "NLP", "Chatbot", "Multilingual", "Web Deployment"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const ProjectsSection = () =>{
    
    return <section id="projects" className="py-23 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on. Click on the project titles to learn more about each one.
            </p>
            {/* The grid is the parent flex container that determines the row alignment. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        // The card itself must be a flex container with `flex-col`
                        // to organize the image, content, and links vertically.
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"
                            />
                        </div>
                        
                        {/* **KEY CHANGE 1:** This inner content div is now a flex column
                          container with `flex-grow` (or `flex-1`) to push the link section to the bottom.
                        */}
                        <div className="p-6 flex flex-col flex-1"> 
                            <div className="flex flex-wrap gap-2 mb-3 border-b border-border/80 pb-3">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>    
                            
                            {/* Title remains fixed size, thus aligning across all cards in the row.
                            */}
                            <h3 className="text-xl font-semibold mb-3"> 
                                {project.title} 
                            </h3>
                            
                            {/* **KEY CHANGE 2:** `flex-grow` (or `flex-1`) is added to the 
                              description to make it take up all available vertical space 
                              between the title and the links, effectively pushing the links down.
                            */}
                            <p className="text-muted-foreground text-sm flex-1 mb-4"> 
                                {project.description} 
                            </p>
                        </div>
                        
                        {/* Links - now consistently placed at the bottom */}
                        <div className="flex justify-between items-center mt-auto px-4 py-4 border-t border-border/80">
                            <div className="flex space-x-3">
                                <a 
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    aria-label={`Demo of ${project.title}`}
                                >
                                    {" "}
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    aria-label={`GitHub repository for ${project.title}`}
                                >
                                    {" "}
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com/afif930" 
                    target="_blank"
                >
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};