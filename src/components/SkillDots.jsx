import { Dot } from "./Dot";

export const SkillDots = ({ level }) => {
    const dots = [1, 2, 3];

    return (
        <div className="flex gap-1">
            {dots.map((i) => (
                <Dot key={i} active={i <= level} />
            ))}
        </div>
    );
};
