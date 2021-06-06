import './App.css';
import homepage from './assets/homepage.svg';
import idea from './assets/idea.svg';
import search from './assets/search.svg';
import software from './assets/software.svg';

function App() {
  return (
    <>
      <div className="header-content-wrapper">
        <div className="header__main-title">Reliable, efficient delivery</div>
        <div className="header__second-title">Powered by Technology</div>
        <div className="header__paragraph">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
      </div>

      <div className="main-container">
        <article className="card card--1">
          <div className="card__title">Supervisor</div>
          <div className="card__paragraph">Monitors activity to identify project roadblocks</div>
          <img src={search} alt="search icon" class="card__image" />
        </article>

        <div className="middle-container">
          <article className="card card--2">
            <div className="card__title">Team Builder</div>
            <div className="card__paragraph">Scans our talent network to create the optimal team for your project</div>
            <img src={homepage} alt="homepage icon" class="card__image" />
          </article>

          <article className="card card--3">
            <div className="card__title">Karma</div>
            <div className="card__paragraph">Regularly evaluates our talent to ensure quality</div>
            <img src={idea} alt="light bulb icon" class="card__image" />
          </article>
        </div>

        <article className="card card--4">
          <div className="card__title">Calculator</div>
          <div className="card__paragraph">Uses data from past projects to provide better delivery estimates</div>
          <img src={software} alt="desktop icon" class="card__image" />
        </article>
      </div>
    </>
  );
}

export default App;
