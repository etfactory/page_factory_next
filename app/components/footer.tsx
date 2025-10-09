/* Footer component is now integrated into layout.tsx as Footer function */
import "./styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            © Euntaek 'Robert' Oh. All rights reserved.
            <img src="/logo/etfactory.dev.svg" alt="etfactory.dev Logo" />
        </footer>
    )
}