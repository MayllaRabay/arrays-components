import './App.css';
import dot from './assets/dot.svg';
import photosnap from './assets/photosnap.svg';
import shapeLeft from './assets/shape-left.svg';
import shapeRight from './assets/shape-right.svg';

const jobs = [
  {
    companyImage: photosnap,
    companyName: "Photosnap",
    newJob: true,
    jobName: "Senior Frontend Developer",
    jobTime: "1d ago",
    jobContract: "Full Time",
    jobLocation: "USA only",
    jobTechs: ["Frontend", "Senior", "HTML", "CSS", "Javascript"]
  }
];

function JobCard({ job }) {
  return (
    <div className="card">
          <img src={job.companyImage} alt="" className="card__company-image" />
          <div className="card__info-wrapper">
            <div>
              <div className="info__company-name">{job.companyName}</div>
              {job.newJob ? <div className="info__new-job-alert" >NEW!</div> : ""}
            </div>
            <div className="info__job-name">{job.jobName}</div>
            <div className="info__job-info">
              <div className="job__time">{job.jobTime}</div>
              <img src={dot} alt="" />
              <div className="job__contract">{job.jobContract}</div>
              <img src={dot} alt="" />
              <div className="job__location">{job.jobLocation}</div>
            </div>
          </div>
          <div className="card__tech-wrapper">
            {job.jobTechs.map( jobTech => <div className="card__tech-name">{jobTech}</div>)}
          </div>
        </div>
  );
}

function App() {
  return (
    <>
      <div className="header">
        <img src={shapeLeft} alt="" className="header__shape-left" />
        <img src={shapeRight} alt="" className="header__shape-right" />
      </div>

      <div className="main-content-wrapper">
        {jobs.map(job => <JobCard job = {job} />)}
      </div>
    </>
  );
}

export default App;
