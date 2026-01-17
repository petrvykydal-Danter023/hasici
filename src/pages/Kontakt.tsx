import { MapPin, Phone, Mail, Facebook, Navigation, Shield, AlertTriangle } from 'lucide-react';
import LiquidEther from '../components/LiquidEther';

const Kontakt = () => {
    return (
        <div style={{ position: 'relative', minHeight: 'auto', background: '#000', overflow: 'hidden' }}>

            {/* Background */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <LiquidEther
                    colors={['#f55656', '#222', '#000']}
                    mouseForce={20}
                    cursorSize={80}
                    viscous={20}
                    isViscous={true}
                    iterationsViscous={30}
                    iterationsPoisson={10}
                    dt={0.015}
                    resolution={0.5}
                    autoSpeed={0.2}
                    autoIntensity={1}
                    autoDemo={true}
                    style={{ width: '100%', height: '100%' }}
                />
                {/* Dark Overlay for readability */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
                    pointerEvents: 'none'
                }}></div>
            </div>

            {/* Content Wrapper */}
            <div className="app-container" style={{ position: 'relative', zIndex: 10, paddingTop: '110px', paddingBottom: '0', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>

                {/* Header - Compact */}
                <div style={{ textAlign: 'center', marginBottom: '1rem', flexShrink: 0 }}>
                    <span style={{ color: '#f55656', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        Dostupnost 24/7
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1 }}>
                        KONTAKT
                    </h1>
                </div>

                {/* Dashboard Grid - Fit in Viewport */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'auto 1fr',
                    gap: '1rem',
                    maxWidth: '1000px', // Reduced max width
                    margin: '0 auto',
                    width: '100%',
                    flex: 1,
                    minHeight: 0,
                    alignItems: 'start' // Align to top
                }}>

                    {/* Emergency Card (Spanning Top) */}
                    <div style={{
                        gridColumn: '1 / -1',
                        background: 'rgba(245, 86, 86, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid #f55656',
                        borderRadius: '16px',
                        padding: '1rem', // Further reduced padding
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        boxShadow: '0 0 40px rgba(245, 86, 86, 0.15)',
                        marginBottom: '1rem' // spacing below
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#f55656' }}>
                            <AlertTriangle size={24} />
                            <span style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tísňová Volání</span>
                        </div>
                        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                            <div className="emergency-number">
                                <span style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.7, display: 'block', marginBottom: '0.2rem' }}>Hasiči</span>
                                <strong style={{ fontSize: '3rem', color: '#fff', lineHeight: 0.8 }}>150</strong>
                            </div>
                            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
                            <div className="emergency-number">
                                <span style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.7, display: 'block', marginBottom: '0.2rem' }}>SOS</span>
                                <strong style={{ fontSize: '3rem', color: '#fff', lineHeight: 0.8 }}>112</strong>
                            </div>
                        </div>
                    </div>

                    {/* Address & Map Card */}
                    <div className="glass-card" style={{ marginTop: '0px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <div className="icon-box"><MapPin size={18} color="#f55656" /></div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Adresa</h3>
                        </div>

                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                            Hasičská zbrojnice Jevíčko<br />
                            Svitavská 466, 569 43
                        </p>

                        {/* Google Maps Embed - Compact */}
                        <div style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.372782481694!2d16.71181831570183!3d49.6306699793707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47127b7b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSvitavsk%C3%A1%20466%2C%20569%2043%20Jev%C3%AD%C4%8Dko!5e0!3m2!1scs!2scz!4v1626346781205!5m2!1scs!2scz"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>

                        <a href="https://maps.google.com/?q=Svitavská+466,+Jevíčko" target="_blank" className="btn-primary" style={{ marginTop: '0.75rem', width: '100%', justifyContent: 'center', padding: '0.5rem' }}>
                            <Navigation size={14} /> Navigovat
                        </a>
                    </div>

                    {/* Leadership Card - Staggered 1 */}
                    <div className="glass-card" style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <div className="icon-box"><Shield size={18} color="#ef9b4e" /></div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Velení</h3>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px' }}>Velitel JSDHo</span>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginTop: '0.2rem' }}>Stanislav Ducháček</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="tel:739425442" className="contact-link">
                                <Phone size={16} /> 739 425 442
                            </a>
                            <a href="mailto:duchacek@jevicko.cz" className="contact-link">
                                <Mail size={16} /> duchacek@jevicko.cz
                            </a>
                        </div>
                    </div>

                    {/* Socials & Other - Staggered 2 */}
                    <div className="glass-card" style={{ marginTop: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <div className="icon-box"><Facebook size={18} color="#1877F2" /></div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Sledujte nás</h3>
                        </div>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Aktuální informace z výjezdů a činnosti jednotky.
                        </p>
                        <a href="https://www.facebook.com/hasicijevicko" target="_blank" className="btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '0.5rem' }}>
                            Facebook SDH Jevíčko
                        </a>
                    </div>

                </div>

            </div>

            <style>{`
                .glass-card {
                    background: rgba(20, 20, 20, 0.6);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1.25rem;
                    display: flex; /* Flex for layout control */
                    flex-direction: column;
                    justify-content: flex-start;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .glass-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                }
                .icon-box {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #fff;
                    text-decoration: none;
                    padding: 0.6rem;
                    background: rgba(255,255,255,0.03);
                    border-radius: 6px;
                    transition: all 0.2s ease;
                    font-size: 0.85rem;
                }
                .contact-link:hover {
                    background: rgba(255,255,255,0.1);
                    color: #ef9b4e;
                }
                .btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: #f55656;
                    color: white;
                    padding: 0.5rem 0.8rem;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: background 0.2s;
                    border: none;
                    font-size: 0.85rem;
                }
                .btn-primary:hover {
                    background: #d43f3f;
                }

                /* Mobile Response: Stack grids */
                @media (max-width: 900px) {
                    .app-container > div:last-child {
                        grid-template-columns: 1fr !important; /* Stack vertically */
                        grid-template-rows: auto !important;
                        display: flex !important;
                        flex-direction: column;
                        overflow-y: auto; /* Allow scrolling on mobile */
                        height: auto !important;
                    }
                    /* Remove stagger on mobile */
                    .glass-card {
                        margin-top: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Kontakt;
