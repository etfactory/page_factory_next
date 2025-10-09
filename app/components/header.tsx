/* Header component is now integrated into layout.tsx as Navigator function */
import Link from "next/link";
import "./styles/header.css";

export default function Navigator() {
    return (
        <nav className="nav">
            <Link href="/" className="nav-left"><img src="/logo/page factory black.svg" alt="pageFactory Logo" style={{ height: "20px" }} /></Link>
            <div className="nav-right">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/profile" className="nav-link">Profile</Link>
                <Link href="/portfolio" className="nav-link">Portfolio</Link>
            </div>
        </nav>
    )
}