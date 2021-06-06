import './App.css';
import homepage from './assets/homepage.svg';
import idea from './assets/idea.svg';
import search from './assets/search.svg';
import software from './assets/software.svg';

const cards = [
  {
    className:"card card--1",
    title: "Supervisor",
    paragraph: "Monitors activity to identify project roadblocks",
    image: search
  }, {
    className:"card card--2",
    title: "Team Builder",
    paragraph: "Scans our talent network to create the optimal team for your project",
    image: homepage
  }, {
    className:"card card--3",
    title: "Karma",
    paragraph: "Regularly evaluates our talent to ensure quality",
    image: idea
  }, {
    className:"card card--4",
    title: "Calculator",
    paragraph: "Uses data from past projects to provide better delivery estimates",
    image: software
  }
];

function CardInfo({ card }) {
  return (
    <article className={card.className}>
      <div className="card__title">{card.title}</div>
      <div className="card__paragraph">{card.paragraph}</div>
      <img src={card.image} alt="search icon" class="card__image" />
    </article>
  );
}

function App() {
  return (
    <>
      <div className="header-content-wrapper">
        <div className="header__main-title">Reliable, efficient delivery</div>
        <div className="header__second-title">Powered by Technology</div>
        <div className="header__paragraph">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
      </div>

      <div className="main-container">
        {<CardInfo card = {cards[0]} />}
        <div className="middle-container">
          {<CardInfo card = {cards[1]} />}
          {<CardInfo card = {cards[2]} />}
        </div>
        {<CardInfo card = {cards[3]} />}
      </div>
    </>
  );
}

export default App;
