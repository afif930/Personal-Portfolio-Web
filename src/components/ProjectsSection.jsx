import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Water Quality Evaluation App",
        description: "A desktop application that evaluates water quality and provides recommendations for improvement.",
        image: "/projects/WaterApp.png",
        tags: ["Python", "CustomTkinter", "GUI", "Input Processing", "Recommendations"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "The Legend of The Land",
        description: "A Python desktop login app for a fantasy game, built with Tkinter and Pygame. Features animated loading, music, user authentication, and character profile display.",
        image: "/projects/TheLegendOfTheLand.png",
        tags: ["Python", "Tkinter", "Pygame", "Desktop App", "Game UI", "Animation", "Authentication", "Music"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Smart Library",
        description: "A Python-based self-checkout library system with a Tkinter GUI, integrated with Arduino Uno and RFID reader for automated book borrowing and returning. Users log in, scan book RFID cards, receive email notifications for borrow/return events and fines, and all transactions are logged to CSV files. Includes an admin panel for managing the book database.",
        image: "/projects/SmartLibrary.png",
        tags: ["Python", "Tkinter", "Arduino", "RFID", "Desktop App", "Self-Checkout", "Library System", "Automation", "Email Notification", "CSV", "Admin Panel", "Hardware Integration"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "PDF Splitter and Rename for Litbang PSUA",
        description: "A simple desktop app to split and rename PDF files. Users select a PDF, set the output filename, destination folder, program name, and pages per split. The app splits the PDF and saves each part with a custom name format.",
        image: "/projects/PdfSplitter.png",
        tags: ["Python", "Tkinter", "PDF", "File Processing", "Desktop App", "Automation", "Rename", "Split", "GUI"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "Diggo AI",
        description: "A Retrieval-Augmented Generation (RAG) chatbot system deployed on a VPS using Docker. It consists of four containers: Ollama for model management and requests (using nomic-embed-text for embeddings and a custom Diggo AI model based on Llama 3), ChromaDB for vector storage, a Python-based ingestion service for embedding files, and a FastAPI retrieval service that handles the web UI, query translation, context retrieval, and response generation.",
        image: "/projects/DiggoAI.png",
        tags: ["Python", "FastAPI", "Docker", "Ollama", "ChromaDB", "RAG", "LLM", "Embeddings", "Vector Database", "Chatbot", "Web UI", "VPS", "Retrieval-Augmented Generation", "Llama 3", "NLP", "AI"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>    
                            <h3 className="text-xl font-semibold mb-3"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        {" "}
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        {" "}
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com" 
                    target="_blank"
                >
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};