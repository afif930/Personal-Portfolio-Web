export const Dot = ({ active }) => {
    return (
        <svg 
            width="10" 
            height="10" 
            viewBox="0 0 10 10" 
            className={active ? "fill-primary" : "fill-muted-foreground/40"}
        >
            <circle cx="5" cy="5" r="4" />
        </svg>
    );
};
