
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = () => {
    const { pathname, hash } = useLocation();

    // Scroll to top on route change if no hash
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <div className="app-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="nav-links">
                    <Link to="/#hero" className="nav-link">Domů</Link>
                    <Link to="/#about" className="nav-link">O nás</Link>
                    <div className="nav-dropdown">
                        <span className="nav-link dropdown-trigger">Výjezdová jednotka ▾</span>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item orange">Výjezdy v posledním měsíci</a>
                            <Link to="/jsdho" className="dropdown-item dark">JSDHo Jevíčko – JPO II/1</Link>
                            <Link to="/technika" className="dropdown-item orange">Technika</Link>
                        </div>
                    </div>
                    <Link to="/#activities" className="nav-link">Činnost</Link>
                    <Link to="/#news" className="nav-link">Aktuality</Link>
                    <Link to="/#gallery" className="nav-link">Galerie</Link>
                    <Link to="/kontakt" className="nav-btn">KONTAKT</Link>
                </div>
            </nav>

            <Outlet />

            <footer id="contact" className="simple-footer">
                <p>&copy; 2026 SDH Jevíčko. Všechna práva vyhrazena.</p>
            </footer>
        </div>
    );
};

export default Layout;
