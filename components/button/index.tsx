import { twMerge } from "tailwind-merge";

export default function Button({ children, className, onClick, disabled, type='dark' }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'light' | 'dark';
}) {
    className = twMerge(
        'px-4 py-3 font-medium rounded-md border-[1px] transition-colors duration-300',
        type === 'dark' ? 'text-dark border-dark hover:bg-dark hover:text-light' : 'text-light border-light hover:bg-light/20',
        className,
    )

    return(
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}