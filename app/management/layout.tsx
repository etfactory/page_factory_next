import Sidebar from "./components/sidebar"

/* 여기에 단독 레이아웃 못쓰나 */
export default function ManagementLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white">
            <Sidebar />
            <main className="flex-1 w-full overflow-x-hidden py-16">{children}</main>
        </div>
    )
}