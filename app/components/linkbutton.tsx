"use client";
import "./styles/linkbutton.css";

interface LinkButtonProps {
    href: string;
    text: string;
    style?: React.CSSProperties;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, style }) => {
    return (
        <input type="button" className="link-button" value={text} onClick={() => window.open(href, "_blank")} style={style} />
    );
}

export default LinkButton;