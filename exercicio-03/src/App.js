import './App.css';
import shapeLeft from './assets/shape-left.svg';
import shapeRight from './assets/shape-right.svg';
import { JobCard, jobs } from './components/Job/Info';

function App() {
  return (
    <>
      <div className="header">
        <img src={shapeLeft} alt="" className="header__shape-left" />
        <img src={shapeRight} alt="" className="header__shape-right" />
      </div>

      <div className="main-content-wrapper">
        {jobs.map((job, index) => <JobCard key={index} job={job} />)}
      </div>
    </>
  );
}

export default App;
