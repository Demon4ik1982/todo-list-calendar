import './Button.css';

type TProps = {
    type?: 'primary' | 'done' | 'delete' | 'data' | 'data-choose' | 'add';
    disabled?: boolean;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

export const Button = ({ children, onClick, type = 'primary', disabled }: TProps) => {
    return (
        <button
          disabled={disabled}
          className={`Button ${type}`}
          onClick={onClick}
        >
            {children}
        </button>
    )
}
