import './App.css';
import luxury from './assets/icon-luxury.svg';
import sedans from './assets/icon-sedans.svg';
import suvs from './assets/icon-suvs.svg';

function App() {
  return (
    <section className="cards">
      <div className="card card--1">
        <img src={sedans} alt="sedans" />
        <h1>sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <a href="/" className="btn">Learn More</a>
      </div>
      <div className="card card--2">
        <img src={suvs} alt="suvs" />
        <h1>suvs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <a href="/" className="btn">Learn More</a>
      </div>
      <div className="card card--3">
        <img src={luxury} alt="luxury" />
        <h1>luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <a href="/" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default App;
