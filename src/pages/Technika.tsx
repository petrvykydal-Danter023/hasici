import { useState } from 'react';
import LiquidEther from '../components/LiquidEther';
import { Car, ChevronRight, Droplets, Truck, Zap } from 'lucide-react';

// Vehicle Data
const vehicles = [
    {
        id: 'tatra-815',
        name: 'Tatra 815 CAS 20',
        type: 'Cisternová automobilová stříkačka',
        description: 'Prvozásahové vozidlo určené pro hašení požárů a technické zásahy. Vybaveno vysokotlakým zařízením COBRA pro řezání a hašení vodní mlhou.',
        specs: [
            { label: 'Podvozek', value: '4x4' },
            { label: 'Nádrž - Voda', value: '3400 l' },
            { label: 'Nádrž - Pěnidlo', value: '200 l' },
            { label: 'Posádka', value: '1+5' },
        ],
        color: '#f55656', // FireEngine Red
        icon: <Truck size={120} />
    },
    {
        id: 'tatra-815-7',
        name: 'Tatra 815-7 CAS 30',
        type: 'Velkokapacitní cisterna',
        description: 'Vozidlo určené pro velkoobjemové hašení a kyvadlovou dopravu vody. Disponuje vysokou průchodností terénem a velkou zásobou hasiva.',
        specs: [
            { label: 'Podvozek', value: '6x6' },
            { label: 'Nádrž - Voda', value: '9000 l' },
            { label: 'Nádrž - Pěnidlo', value: '540 l' },
            { label: 'Posádka', value: '1+2' },
        ],
        color: '#e26f03', // Dark Orange
        icon: <Truck size={120} />
    },
    {
        id: 'fiat',
        name: 'Fiat Ducato',
        type: 'Dopravní automobil',
        description: 'Vozidlo pro přepravu osob a materiálu (DA). Slouží k logistice, přepravě členů jednotky na školení a k zásahům menšího rozsahu.',
        specs: [
            { label: 'Podvozek', value: '4x2' },
            { label: 'Míst', value: '9' },
            { label: 'Výbava', value: 'Zdravotnická' },
            { label: 'Motor', value: '2.3 JTD' },
        ],
        color: '#ffffff', // White
        icon: <Car size={120} />
    }
];

const Technika = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeVehicle = vehicles[activeIndex];

    const nextVehicle = () => {
        setActiveIndex((prev) => (prev + 1) % vehicles.length);
    };

    const prevVehicle = () => {
        setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>

            {/* Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <LiquidEther
                    colors={['#333', '#1a1a1a', '#000']} // Dark aesthetic
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
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at center, transparent 0%, #000 90%)',
                    pointerEvents: 'none'
                }}></div>
            </div>

            {/* Main Content Area */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>

                {/* Center Stage: Vehicle Info & Visual */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    padding: '80px 4rem',
                    display: 'flex',
                    alignItems: 'center', // Center vertically
                    justifyContent: 'space-between' // Spread text and visual
                }}>

                    {/* Left: Text Info */}
                    <div style={{ maxWidth: '500px', zIndex: 2 }}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: 900,
                            color: '#fff',
                            textTransform: 'uppercase',
                            lineHeight: 0.9,
                            marginBottom: '1rem',
                            textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                        }}>
                            {activeVehicle.name}
                        </h1>
                        <p style={{ color: activeVehicle.color, fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
                            {activeVehicle.type}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
                            {activeVehicle.specs.map((spec, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{spec.label}</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{spec.value}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            borderLeft: `4px solid ${activeVehicle.color}`,
                            padding: '1.5rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                                {activeVehicle.description}
                            </p>
                        </div>
                    </div>

                    {/* Center/Right: Vehicle Visual */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <div style={{
                            color: activeVehicle.color === '#ffffff' ? '#aaa' : activeVehicle.color,
                            opacity: 0.9,
                            transform: 'scale(3.5)',
                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))',
                            transition: 'all 0.5s ease'
                        }}>
                            {activeVehicle.icon}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Navigation Slider */}
                <div style={{
                    height: '160px', // Fixed height for bottom bar
                    width: '100%',
                    background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    padding: '0 2rem'
                }}>

                    {/* Prev Arrow */}
                    <button onClick={prevVehicle} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff', padding: '1rem', opacity: 0.7, transition: 'opacity 0.2s' }}>
                        <ChevronRight size={48} style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {/* Slider Items */}
                    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '1rem 0', scrollbarWidth: 'none' }}>
                        {vehicles.map((vehicle, index) => (
                            <div
                                key={vehicle.id}
                                onClick={() => setActiveIndex(index)}
                                style={{
                                    width: '200px',
                                    height: '100px',
                                    borderRadius: '8px',
                                    background: activeIndex === index ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                                    border: `1px solid ${activeIndex === index ? vehicle.color : 'rgba(255,255,255,0.1)'}`,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                                    background: vehicle.color
                                }}></div>

                                <span style={{ color: activeIndex === index ? '#fff' : '#888', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    {vehicle.name}
                                </span>
                                <span style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                                    {index + 1} / {vehicles.length}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Next Arrow */}
                    <button onClick={nextVehicle} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff', padding: '1rem', opacity: 0.7, transition: 'opacity 0.2s' }}>
                        <ChevronRight size={48} />
                    </button>

                </div>

            </div>
            <style>{`
                button:hover { opacity: 1 !important; }
                @media (max-width: 768px) {
                    .app-container > div > div:first-child { /* Target main content */
                        flex-direction: column-reverse;
                        justify-content: center;
                        padding-top: 20px;
                    }
                }
            `}</style>

        </div>
    );
};

export default Technika;
