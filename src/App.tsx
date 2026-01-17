import LiquidEther from './components/LiquidEther';

function App() {
  return (
    <div className="app-container">
      <div className="background-wrapper">
        <LiquidEther
          colors={['#f55656', '#ef9b4e', '#e26f03']}
          mouseForce={24}
          cursorSize={100}
          viscous={30}
          dt={0.014}
          resolution={0.5} // High quality
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <main className="content-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Liquid</span> <span className="white-text">Ether</span>
          </h1>
          <p className="hero-subtitle">
            Experience the fluid dynamics of the future.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
