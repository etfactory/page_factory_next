"use client";
import "./styles/linkbutton.css";

interface LinkButtonProps {
    href: string;
    text: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, style, onClick }) => {
    return (
        <input type="button" className="link-button" value={text} onClick={onClick ? onClick : () => window.open(href, "_blank")} style={style} />
    );
}

export default LinkButton;