import Sidebar from "./components/sidebar"
import "./components/styles/management.css"

/* 여기에 단독 레이아웃 못쓰나 */
export default function ManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mg-shell">
            <Sidebar />
            <div className="mg-main">{children}</div>
        </div>
    )
}
