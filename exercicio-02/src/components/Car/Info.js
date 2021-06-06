import luxury from '../../assets/icon-luxury.svg';
import sedans from '../../assets/icon-sedans.svg';
import suvs from '../../assets/icon-suvs.svg';

const cars = [
  {
    divCard:"card card--1",
    image: sedans,
    title:"sedans",
    paragraph: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  }, {
    divCard:"card card--2",
    image: suvs,
    title:"suvs",
    paragraph: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  }, {
    divCard:"card card--3",
    image: luxury,
    title:"luxury",
    paragraph: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
];

function CarInfo({ car }) {
  return (
    <div className={car.divCard}>
      <img src={car.image} alt="sedans" />
      <h1>{car.title}</h1>
      <p>{car.paragraph}</p>
      <a href="/" className="btn">Learn More</a>
    </div>
  );
}

const carInfo = cars.map(car => <CarInfo car = {car} />);

export default carInfo