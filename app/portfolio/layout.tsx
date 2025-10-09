import { ReactNode } from "react";

interface PortfolioLayoutProps {
    children: ReactNode;
}

export default function ProfileLayout(props: PortfolioLayoutProps) {
    return <div>{props.children}</div>;
}