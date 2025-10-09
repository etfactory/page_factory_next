import { ReactNode } from "react";

interface ProfileLayoutProps {
    children: ReactNode;
}

export default function ProfileLayout(props: ProfileLayoutProps) {
    return <div>{props.children}</div>;
}