import './App.css';
import homepage from './assets/homepage.svg';
import idea from './assets/idea.svg';
import search from './assets/search.svg';
import software from './assets/software.svg';

function App() {
  return (
    <>
      <header>
        <h1>Reliable, efficient delivery</h1>

        <h2>Powered by Technology</h2>

        <h4>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</h4>
      </header>

      <main>
        <article className="card card--1">
          <div className="card__title">Supervisor</div>
          <div className="card__paragraph">Monitors activity to identify project roadblocks</div>
          <div className="card__image">{search}</div>
        </article>

       <div className="middle-content-wrapper">
          <article className="card card--2">
            <div className="card__title">Team Builder</div>
            <div className="card__paragraph">Scans our talent network to create the optimal team for your project</div>
            <div className="card__image">{homepage}</div>
          </article>

          <article className="card card--3">
            <div className="card__title">Karma</div>
            <div className="card__paragraph">Regularly evaluates our talent to ensure quality</div>
            <div className="card__image">{idea}</div>
          </article>
        </div>

        <article className="card card--4">
          <div className="card__title">Calculator</div>
          <div className="card__paragraph">Uses data from past projects to provide better delivery estimates</div>
          <div className="card__image">{software}</div>
        </article>
      </main>
    </>
  );
}

export default App;
