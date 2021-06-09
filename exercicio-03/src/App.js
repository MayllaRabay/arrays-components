import { useState } from 'react';
import './App.css';
import account from './assets/account.svg';
import dot from './assets/dot.svg';
import manage from './assets/manage.svg';
import myhome from './assets/myhome.svg';
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
  }, {
    companyImage: manage,
    companyName: "Manage",
    newJob: true,
    jobName: "Fullstack Developer",
    jobTime: "1d ago",
    jobContract: "Part Time",
    jobLocation: "Remote",
    jobTechs: ["Fullstack", "Midweight", "Python", "React"]
  }, {
    companyImage: account,
    companyName: "Account",
    newJob: false,
    jobName: "Junior Frontend Developer",
    jobTime: "2d ago",
    jobContract: "Part Time",
    jobLocation: "USA only",
    jobTechs: ["Frontend", "Junior", "React", "Sass", "Javascript"]
  }, {
    companyImage: myhome,
    companyName: "MyHome",
    newJob: false,
    jobName: "Junior Frontend Developer",
    jobTime: "5d ago",
    jobContract: "Contract",
    jobLocation: "USA only",
    jobTechs: ["Frontend", "Junior", "CSS", "Javascript"]
  },
];

function JobCard({ job }) {
  let [isActive, setIsActive] = useState(false);

  function handleClick(){
    setIsActive(!isActive);
  }

  return (
    <div className={isActive ? "card card__active" : "card"}>
      <img src={job.companyImage} alt="" className="card__company-image" />
      <div className="card__info-wrapper">
        <div>
          <div className="info__company-name">{job.companyName}</div>
          {job.newJob ? <div className="info__new-job-alert">NEW!</div> : ""}
          {isActive ? <div className="info__featured-job-alert">FEATURED</div> : ""}
        </div>
        <div onClick={handleClick} className="info__job-name">{job.jobName}</div>
        <div className="info__job-info">
          <div className="job__time">{job.jobTime}</div>
          <img src={dot} alt="" />
          <div className="job__contract">{job.jobContract}</div>
          <img src={dot} alt="" />
          <div className="job__location">{job.jobLocation}</div>
        </div>
      </div>
      <div className="card__tech-wrapper">
        {job.jobTechs.map((jobTech, index) => <div key={index} className="card__tech-name">{jobTech}</div>)}
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
        {jobs.map((job, index) => <JobCard key={index} job={job} />)}
      </div>
    </>
  );
}

export default App;
