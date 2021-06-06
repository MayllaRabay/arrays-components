import homepage from '../../assets/homepage.svg';
import idea from '../../assets/idea.svg';
import search from '../../assets/search.svg';
import software from '../../assets/software.svg';

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
      <img src={card.image} alt="search icon" className="card__image" />
    </article>
  );
}

export { CardInfo, cards };
