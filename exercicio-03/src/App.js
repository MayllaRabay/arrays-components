import './App.css';
import dot from './assets/dot.svg';
import photosnap from './assets/photosnap.svg';
import shapeLeft from './assets/shape-left.svg';
import shapeRight from './assets/shape-right.svg';

function App() {
  return (
    <>
      <div className="header">
        <img src={shapeLeft} alt="" className="header__shape-left" />
        <img src={shapeRight} alt="" className="header__shape-right" />
      </div>

      <div className="main-content-wrapper">
        <div className="card">
          <img src={photosnap} alt="" className="card__company-image" />
          <div className="card__info-wrapper">
            <div>
              <div className="info__company-name">Photosnap</div>
              <div className="info__new-job-alert">NEW!</div>
            </div>
            <div className="info__job-name">Senior Frontend Developer</div>
            <div className="info__job-info">
              <div className="job__time">1d ago</div>
              <img src={dot} alt="" />
              <div className="job__contract">Full Time</div>
              <img src={dot} alt="" />
              <div className="job__location">USA only</div>
            </div>
          </div>
          
          <div className="card__tech-wrapper">
            <div className="card__tech-name">Frontend</div>
            <div className="card__tech-name">Senior</div>
            <div className="card__tech-name">HTML</div>
            <div className="card__tech-name">CSS</div>
            <div className="card__tech-name">Javascript</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
