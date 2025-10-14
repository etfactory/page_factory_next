/* Footer component is now integrated into layout.tsx as Footer function */
import "./styles/footer.css";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                © Euntaek 'Robert' Oh. All rights reserved.
                <br />
                This Page is powered by Next.js.
                <br />
                <div className="footer-links">
                    <Link href="/setting">Settings</Link>
                </div>
            </div>
            <img src="/logo/etfactory.dev.svg" alt="etfactory.dev Logo" />
        </footer>
    )
}