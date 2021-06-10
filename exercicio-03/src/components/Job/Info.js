import { useState } from 'react';
import account from '../../assets/account.svg';
import air from '../../assets/air.svg';
import dot from '../../assets/dot.svg';
import eyecam from '../../assets/eyecam.svg';
import faceit from '../../assets/faceit.svg';
import insure from '../../assets/insure.svg';
import loopstudios from '../../assets/loopstudios.svg';
import manage from '../../assets/manage.svg';
import myhome from '../../assets/myhome.svg';
import photosnap from '../../assets/photosnap.svg';
import shortly from '../../assets/shortly.svg';

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
  }, {
    companyImage: loopstudios,
    companyName: "Loop Studios",
    newJob: false,
    jobName: "Software Engineer",
    jobTime: "1w ago",
    jobContract: "Full time",
    jobLocation: "Worldwide",
    jobTechs: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"]
  }, {
    companyImage: faceit,
    companyName: "FaceIt",
    newJob: false,
    jobName: "Junior Backend Developer",
    jobTime: "2w ago",
    jobContract: "Full time",
    jobLocation: "UK only",
    jobTechs: ["Backend", "Junior", "Rub", "RoR"]
  }, {
    companyImage: shortly,
    companyName: "Shortly",
    newJob: false,
    jobName: "Junior Developer",
    jobTime: "2w ago",
    jobContract: "Full time",
    jobLocation: "Worldwide",
    jobTechs: ["Frontend", "Junior", "HTML", "Sass", "Javascript"]
  }, {
    companyImage: insure,
    companyName: "Insure",
    newJob: false,
    jobName: "Junior Frontend Developer",
    jobTime: "2w ago",
    jobContract: "Full time",
    jobLocation: "USA only",
    jobTechs: ["Frontend", "Junior", "Vue", "Sass", "Javascript"]
  }, {
    companyImage: eyecam,
    companyName: "Eyecam Co.",
    newJob: false,
    jobName: "Full Stack Engineer",
    jobTime: "3w ago",
    jobContract: "Full time",
    jobLocation: "Worldwide",
    jobTechs: ["Fullstack", "Midweight", "Javascript", "Django", "Python"]
  }, {
    companyImage: air,
    companyName: "The Air Filter Company",
    newJob: false,
    jobName: "Front-end Dev",
    jobTime: "1mo ago",
    jobContract: "Part time",
    jobLocation: "Worldwide",
    jobTechs: ["Frontend", "Junior", "React", "Sass", "Javascript"]
  }
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

export { jobs, JobCard };
