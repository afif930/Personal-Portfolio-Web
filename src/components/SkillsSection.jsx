import { useState } from "react";
import { cn } from "../lib/utils";
import { SkillDots } from "./SkillDots";


const skills = [
    // Programming Languages
    {name:"Python", level: 2, category: "languages"},
    {name:"HTML", level: 1, category: "languages"},
    {name:"CSS", level: 1, category: "languages"},
    {name:"JavaScript", level: 1, category: "languages"},
    {name:"Arduino (C/C++)", level: 2, category: "languages"},

    // Frameworks & Libraries
    {name:"FastAPI", level: 2, category: "frameworks"},
    {name:"LangChain", level: 1, category: "frameworks"},
    {name:"ChromaDB", level: 1, category: "frameworks"},
    {name:"React", level: 1, category: "frameworks"},
    {name:"Next.js", level: 1, category: "frameworks"},
    {name:"Tailwind CSS", level: 1, category: "frameworks"},

    // Tools
    {name:"Docker", level: 1, category: "tools"},
    {name:"Git & GitHub", level: 2, category: "tools"},
    {name:"Selenium Automation", level: 1, category: "tools"},
    {name:"Multilingual NLP Pipeline", level: 1, category: "tools"},
];



const categories = ["all", "languages", "frameworks", "tools"];



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30" 
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <SkillDots className="h-10 w-10" level={skill.level} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}