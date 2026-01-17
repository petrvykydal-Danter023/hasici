import LiquidEther from '../components/LiquidEther';
import { Shield, Phone, MapPin, Flag, User, Clock, AlertTriangle, Car, FileText } from 'lucide-react';

const Jsdho = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>

            {/* Liquid Background (Fixed) - Creates the "side stripes" effect */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <LiquidEther
                    colors={['#f55656', '#ef9b4e', '#333']}
                    mouseForce={20}
                    cursorSize={80}
                    viscous={30}
                    isViscous={true}
                    iterationsViscous={40}
                    iterationsPoisson={20}
                    dt={0.01}
                    resolution={0.5}
                    autoSpeed={0.3}
                    autoIntensity={2}
                    autoDemo={true}
                    style={{ width: '100%', height: '100%' }}
                />
                {/* Light overlay to ensure it's not too distracting if it peeks through, 
                    but sidebar effect relies on this being visible. 
                    User asked for "stripes", so we let it be visible on sides. 
                 */}
            </div>

            {/* Scrollable Content Wrapper */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>

                {/* Main White Content Column */}
                <div style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    maxWidth: '1000px',
                    minHeight: '100vh',
                    boxShadow: '0 0 50px rgba(0,0,0,0.5)', /* Shadow to separate from sides */
                    padding: '100px 4rem 4rem 4rem', /* Top padding for navbar space */
                    position: 'relative'
                }}>

                    {/* Header */}
                    <div style={{ marginBottom: '4rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                        <span className="section-subtitle" style={{ marginBottom: '1rem', display: 'block', color: '#f55656', fontWeight: 700, letterSpacing: '0.1em' }}>VÝJEZDOVÁ JEDNOTKA</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#000', lineHeight: 1.1, marginBottom: '2rem' }}>
                            SDHo Jevíčko – JPO II/1
                        </h1>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#444', fontWeight: 300 }}>
                            Jednotka sboru dobrovolných hasičů obce (JSDHo) Jevíčko. <br />
                            V případě mimořádné události a potřeby hasičů volejte telefonní číslo <strong style={{ color: '#f55656' }}>150</strong> nebo <strong style={{ color: '#f55656' }}>112</strong>.
                        </p>
                    </div>

                    {/* Content - Blog Style */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                        {/* Sídlo a Velení */}
                        <div className="blog-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <MapPin size={28} style={{ color: '#f55656' }} />
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: '#111' }}>Sídlo a velení</h2>
                            </div>
                            <p className="blog-text">
                                <strong>Sídlo:</strong> hasičská zbrojnice, Svitavská 466, Jevíčko, 569 43.<br />
                                <strong>Velitel JSDHo Jevíčko:</strong> Stanislav Ducháček<br />
                                Tel.: <a href="tel:739425442" style={{ color: '#f55656', textDecoration: 'none' }}>739 425 442</a>, Email: <a href="mailto:duchacek@jevicko.cz" style={{ color: '#f55656', textDecoration: 'none' }}>duchacek@jevicko.cz</a>
                            </p>
                            <div style={{ marginTop: '1rem' }}>
                                <a href="https://sdhjevicko.cz/?page_id=19640" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#f55656', borderColor: '#f55656' }}>
                                    <FileText size={16} /> Aktuální měsíční přehled výjezdů
                                </a>
                            </div>
                        </div>

                        {/* Organizace */}
                        <div className="blog-section">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>O jednotce</h3>
                            <p className="blog-text">
                                JSDHo Jevíčko je zřízena na základě zákonných norem, plní své povinnosti a za její činnost odpovídá jmenovaný velitel. Disponuje technikou obce a určitými technickými prostředky a vybavením, jejím prvořadým úkolem je provádění hasebních a záchranných prací při mimořádných událostech.
                            </p>
                            <p className="blog-text" style={{ marginTop: '1rem' }}>
                                S tím souvisí i další úkoly při přípravě techniky, materiálu a přípravě na řešení mimořádných situací – školení a výcvik. Členové JSDHO Jevíčko mají uzavřen pracovně právní vztah s obcí a za svoji činnost a zajišťování pohotovostí pobírají mzdu. Činnost JSDHO Jevíčko je financována z prostředků obce.
                            </p>
                        </div>

                        {/* JPO II/1 */}
                        <div className="blog-section" style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f55656' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Shield size={28} style={{ color: '#f55656' }} />
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: '#111' }}>Zařazení JPO II/1</h2>
                            </div>
                            <p className="blog-text">
                                Naše jednotka je zařazena jako <strong>JPO II/1</strong>, což znamená, že zajišťuje výjezd jednoho družstva o počtu 1+3 do <strong>pěti minut</strong> od vyhlášení poplachu.
                            </p>
                            <p className="blog-text" style={{ marginTop: '1rem' }}>
                                Jednotka je předurčena mimo jiné k zásahům na dopravní nehody a jako first responder s AED. Členové JPO slouží pohotovosti mimo pracoviště v počtu 1+3 v režimu 24/7.
                            </p>
                        </div>

                        {/* Technika */}
                        <div className="blog-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Car size={28} style={{ color: '#f55656' }} />
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, color: '#111' }}>Technika</h2>
                            </div>
                            <ul className="blog-list" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.5rem', color: '#444' }}>
                                <li style={{ paddingLeft: '1.5rem', borderLeft: '2px solid #ddd' }}>
                                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: '#111' }}>Tatra 815 CAS 20</strong>
                                    Cisternová automobilová stříkačka vybavená hasícím a řezacím vysokotlakým zařízením COBRA, AED, a širokým technickým vybavením na dopravní nehody a technické zásahy.
                                </li>
                                <li style={{ paddingLeft: '1.5rem', borderLeft: '2px solid #ddd' }}>
                                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: '#111' }}>Tatra 815-7 CAS 30</strong>
                                    Velkokapacitní cisternová automobilová stříkačka sloužící převážně na požáry a jako zásobárna vody.
                                </li>
                                <li style={{ paddingLeft: '1.5rem', borderLeft: '2px solid #ddd' }}>
                                    <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem', color: '#111' }}>Fiat Ducato</strong>
                                    Dodávka pro přepravu osob a materiálu.
                                </li>
                            </ul>
                        </div>

                        {/* Grid for smaller details */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '1rem' }}>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <AlertTriangle size={24} style={{ color: '#ef9b4e' }} />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Poplach a Svolání</h3>
                                </div>
                                <p className="blog-text">
                                    Poplach nám vyhlašuje KOPIS HZS PAK Pardubice. Svolávání probíhá prostřednictvím AMDS, SMS a aplikace v mobilních telefonech.
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Clock size={24} style={{ color: '#ef9b4e' }} />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Čas výjezdu</h3>
                                </div>
                                <p className="blog-text">
                                    Od vyhlášení poplachu jsme povinni dostavit se do 5 minut do zbrojnice a vyjet. Průměrná doba je přibližně 3 minuty.
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <User size={24} style={{ color: '#ef9b4e' }} />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Služby</h3>
                                </div>
                                <p className="blog-text">
                                    V pracovní dny (6:00–14:30) zajišťuje výjezd jeden zaměstnanec na zbrojnici a zaměstnanci města. V ostatní dobu je držena pohotovost 1+3 mimo zbrojnici.
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <Flag size={24} style={{ color: '#ef9b4e' }} />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Zřizovatel</h3>
                                </div>
                                <p className="blog-text">
                                    Jednotka je zřízena městem Jevíčko. Smluvně také zajišťujeme požární ochranu pro obce Biskupice a Víska u Jevíčka.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <style>{`
                    .blog-text {
                        font-size: 1.05rem;
                        line-height: 1.7;
                        color: #444;
                        margin: 0;
                    }
                    .blog-section {
                        margin-bottom: 2rem;
                    }
                    @media (max-width: 1100px) {
                        /* On smaller screens where margins disappear, we might want to ensure some liquid is still visible or just collapse nicely */
                        .app-container {
                            max-width: 100%;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Jsdho;
