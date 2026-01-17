
import LiquidEther from '../components/LiquidEther';
import { Phone, Shield, Flame, Car, Wrench, Users, Calendar, Trophy, Globe, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="hero-section">
                <div className="background-wrapper">
                    <LiquidEther
                        colors={['#f55656', '#ef9b4e', '#e26f03']}
                        mouseForce={24}
                        cursorSize={100}
                        viscous={30}
                        isViscous={true}
                        iterationsViscous={56}
                        iterationsPoisson={32}
                        dt={0.014}
                        resolution={0.5}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        autoDemo={true}
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* Dark overlay for text readability */}
                    <div className="bg-overlay"></div>
                </div>

                <div className="content-overlay">
                    <div className="hero-content">
                        <div className="badge">
                            <Shield size={14} fill="currentColor" />
                            <span>Sloužíme lidem od roku 1870</span>
                        </div>

                        <h1 className="hero-title"> SDH
                            <span className="text-highlight"> Jevíčko</span>
                        </h1>

                        <p className="hero-subtitle">
                            Sbor dobrovolných hasičů chrání vás a váš majetek nejen v Jevíčku více než 150 let.
                            Nedílnou součástí sboru je jednotka požární ochrany JPO II/1,
                            která zasahuje při dopravních nehodách, požárech a poskytuje technickou pomoc.
                        </p>

                        <div className="cta-group">
                            <button className="btn-primary">
                                <Phone size={18} fill="currentColor" />
                                <span>Tísnová linka: 150 / 112</span>
                            </button>
                            <a href="#about" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>O nás</a>
                        </div>

                        <div className="divider"></div>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-value">24/7</span>
                                <span className="stat-label">Držíme Pohotovost</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">31+</span>
                                <span className="stat-label">Výjezdů Měsíčně</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">&lt;5 min</span>
                                <span className="stat-label">Reakční čas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section id="activities" className="activities-section">
                <div className="section-header">
                    <span className="section-subtitle">CO DĚLÁME</span>
                    <h2 className="section-title">NAŠE ČINNOST</h2>
                    <p className="section-description">
                        SDH Jevíčko se věnuje záchraně životů, zdraví a majetku, ale také preventivně výchovné
                        činnosti v oblasti požární ochrany a první pomoci.
                    </p>
                </div>

                <div className="cards-grid">
                    {/* Card 1 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Flame size={32} />
                        </div>
                        <h3>HAŠENÍ POŽÁRŮ</h3>
                        <p>Jednotka JPO II/1 zasahuje při požárech v Jevíčku i mimo území svého zřizovatele s moderní zásahovou technikou.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Car size={32} />
                        </div>
                        <h3>DOPRAVNÍ NEHODY</h3>
                        <p>Rychlá pomoc při dopravních nehodách včetně vyprošťování osob z havarovaných vozidel.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Wrench size={32} />
                        </div>
                        <h3>TECHNICKÁ POMOC</h3>
                        <p>Poskytujeme technickou pomoc při živelních pohromách, odstraňování následků bouří a dalších mimořádných situacích.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Users size={32} />
                        </div>
                        <h3>HASIČSKÁ MLÁDEŽ</h3>
                        <p>Významnou složkou sboru je hasičská mládež s dlouholetou tradicí. Mladí hasiči se účastní soutěží a připravují se na pomoc druhým.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Calendar size={32} />
                        </div>
                        <h3>KULTURNÍ AKCE</h3>
                        <p>Pořádáme tradiční Hasičský ples, pálení čarodějnic, závody mladých hasičů a další společenské akce v Jevíčku.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="activity-card">
                        <div className="icon-box">
                            <Trophy size={32} />
                        </div>
                        <h3>POŽÁRNÍ SPORT</h3>
                        <p>Náš mužský tým se pravidelně účastní okresní ligy Svitavska a dalších závodů v požárním sportu.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        <span className="section-subtitle">O NÁS</span>
                        <h2 className="section-title">VÍCE NEŽ 150 LET SLUŽBY KOMUNITĚ</h2>

                        <p className="about-text">
                            Sbor dobrovolných hasičů byl založen v roce 1870 a působí v Jevíčku a jeho okolí
                            již více než 150 let. Nedílnou součástí sboru je jednotka požární ochrany (JPO
                            II/1), která zabezpečuje výjezd zmenšeného družstva (1+3) do 5 minut.
                        </p>

                        <p className="about-text">
                            Ročně vyjíždíme k několika desítkám zásahů jako jsou dopravní nehody, požáry
                            či technická pomoc. Ve výbavě máme množství zásahové techniky a vybavení
                            určeného k záchraně života, zdraví a majetku. SDH Jevíčko má ve vlastnictví
                            mnoho kusů historické techniky.
                        </p>

                        <div className="feature-list">
                            <div className="feature-item">
                                <Shield size={20} className="feature-icon" />
                                <span>Jednotka JPO II/1</span>
                            </div>
                            <div className="feature-item">
                                <History size={20} className="feature-icon" />
                                <span>Historická technika</span>
                            </div>
                            <div className="feature-item">
                                <Globe size={20} className="feature-icon" />
                                <span>Mezinárodní spolupráce</span>
                            </div>
                            <div className="feature-item">
                                <Users size={20} className="feature-icon" />
                                <span>Výcvik mládeže</span>
                            </div>
                        </div>

                        <button className="btn-primary mt-8">HISTORIE SBORU</button>
                    </div>

                    <div className="about-stats-card">
                        <div className="dark-stat">
                            <span className="dark-stat-value">1870</span>
                            <span className="dark-stat-label">ROK ZALOŽENÍ</span>
                        </div>
                        <div className="dark-stat">
                            <span className="dark-stat-value">JPO</span>
                            <span className="dark-stat-label">II/1</span>
                        </div>
                        <div className="dark-stat">
                            <span className="dark-stat-value">5</span>
                            <span className="dark-stat-label">MINUT VÝJEZD</span>
                        </div>
                        <div className="dark-stat">
                            <span className="dark-stat-value">1+3</span>
                            <span className="dark-stat-label">POSÁDKA</span>
                        </div>
                    </div>
                </div>

                <div className="cooperation-banner">
                    <h3>MEZINÁRODNÍ SPOLUPRÁCE</h3>
                    <p>
                        Mládež SDH Jevíčko se pravidelně zúčastňuje mezinárodního tábora ve Finsku, kde navázali velmi dobrou mezinárodní spolupráci.
                        Dále jsme začali s mezinárodní spoluprací s hasiči z Polska. Naši mladí hasiči se pravidelně účastní hasičských soutěží
                        a připravují se na pomoc druhým při mimořádných situacích.
                    </p>
                </div>
            </section>

            {/* News Section */}
            <section id="news" className="news-section">
                <div className="section-header-row">
                    <div className="section-header-left">
                        <span className="section-subtitle">AKTUALITY</span>
                        <h2 className="section-title">NOVINKY ZE SBORU</h2>
                    </div>
                    <button className="btn-outline">VŠECHNY AKTUALITY &rarr;</button>
                </div>

                <div className="news-grid">
                    {/* News Card 1 */}
                    <div className="news-card">
                        <div className="news-card-accent"></div>
                        <div className="news-meta">
                            <span className="news-tag">ZÁSAH</span>
                            <span className="news-date"><Calendar size={14} /> 13. ledna 2026</span>
                        </div>
                        <h3>DOPRAVNÍ NEHODA ZADNÍ ARNOŠTOV</h3>
                        <p>Jednotka SDH Jevíčko zasahovala u dopravní nehody v obci Zadní Arnoštov. Na místě byla poskytnuta technická pomoc.</p>
                        <a href="#" className="read-more">ČÍST VÍCE &rarr;</a>
                    </div>

                    {/* News Card 2 */}
                    <div className="news-card">
                        <div className="news-card-accent"></div>
                        <div className="news-meta">
                            <span className="news-tag">ZÁSAH</span>
                            <span className="news-date"><Calendar size={14} /> 12. ledna 2026</span>
                        </div>
                        <h3>POŽÁR KNÍNICE</h3>
                        <p>Naše jednotka byla povolána k požáru v obci Knínice. Společně s dalšími jednotkami jsme pomohli s likvidací požáru.</p>
                        <a href="#" className="read-more">ČÍST VÍCE &rarr;</a>
                    </div>

                    {/* News Card 3 */}
                    <div className="news-card">
                        <div className="news-card-accent"></div>
                        <div className="news-meta">
                            <span className="news-tag icon-tag">SPOLEČENSKÁ AKCE</span>
                            <span className="news-date"><Calendar size={14} /> Listopad 2025</span>
                        </div>
                        <h3>TRADIČNÍ HASIČSKÝ PLES 2026</h3>
                        <p>Zveme vás na tradiční Hasičský ples, který se bude konat v roce 2026. Připravujeme bohatý program a zábavu pro všechny.</p>
                        <a href="#" className="read-more">ČÍST VÍCE &rarr;</a>
                    </div>
                </div>

                {/* Gallery CTA */}
                <div id="gallery" className="gallery-cta">
                    <h2>FOTOGALERIE</h2>
                    <p>Prohlédněte si fotografie z našich zásahů, soutěží a společenských akcí.</p>
                    <button className="btn-primary">ZOBRAZIT GALERII</button>
                </div>
            </section>
        </>
    );
};

export default Home;
