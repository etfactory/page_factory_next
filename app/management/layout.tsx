import Sidebar from "./components/sidebar"

/* 여기에 단독 레이아웃 못쓰나 */
export default function ManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}