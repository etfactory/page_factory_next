"use client";

interface LinkButtonProps {
    href: string;
    text: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, style, onClick }) => {
    return (
        <input type="button" className="font-[paperozi] w-[150px] text-white py-[10px] px-[20px] border-none rounded-[50px] cursor-pointer text-[1rem] mr-[10px]" value={text} onClick={onClick ? onClick : () => window.open(href, "_blank")} style={style} />
    );
}

export default LinkButton;