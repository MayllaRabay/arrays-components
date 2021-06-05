import './App.css';
import imageDaniel from "./assets/image-daniel.jpg";
import imageJeanette from "./assets/image-jeanette.jpg";
import imageJonathan from "./assets/image-jonathan.jpg";
import imageKira from "./assets/image-kira.jpg";
import imagePatrick from "./assets/image-patrick.jpg";

function App() {
  return (
    <div className="main-content-wrapper">
      <article className="card card--1">
        <div className="author__content-wrapper">
          <img src={imageDaniel} alt="author avatar" className="author__avatar" />
          <div className="author__text-wrapper">
            <div className="author__name">Daniel Clifford</div>
            <div className="author__title">Verified Graduate</div>
          </div>
        </div>
        <h3 className="card__heading">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h3>
        <p className="card__paragraph">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
      </article>

      <article className="card card--2">
        <div className="author__content-wrapper">
          <img src={imageJonathan} alt="author avatar" className="author__avatar" />
          <div className="author__text-wrapper">
            <div className="author__name">Jonathan Walters</div>
            <div className="author__title">Verified Graduate</div>
          </div>
        </div>
        <h3 className="card__heading">The team was very supportive and kept me motivated.</h3>
        <div className="card__paragraph">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</div>
      </article>

      <article className="card card--3">
        <div className="author__content-wrapper">
          <img src={imageJeanette} alt="author avatar" className="author__avatar" />
          <div className="author__text-wrapper">
            <div className="author__name">Jeanette Harmon</div>
            <div className="author__title">Verified Graduate</div>
          </div>
        </div>
        <h3 className="card__heading">An overall wonderful and rewarding experience.</h3>
        <div className="card__paragraph">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</div>
      </article>

      <article className="card card--4">
        <div className="author__content-wrapper">
          <img src={imagePatrick} alt="author avatar" className="author__avatar" />
          <div className="author__text-wrapper">
            <div className="author__name">Patrick Abrams</div>
            <div className="author__title">Verified Graduate</div>
          </div>
        </div>
        <h3 className="card__heading">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h3>
        <div className="card__paragraph">“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</div>
      </article>

      <article className="card card--5">
        <div className="author__content-wrapper">
          <img src={imageKira} alt="author avatar" className="author__avatar" />
          <div className="author__text-wrapper">
            <div className="author__name">Kira Whittle</div>
            <div className="author__title">Verified Graduate</div>
          </div>
        </div>
        <h3 className="card__heading">Such a life-changing experience. Highly recommended!</h3>
        <div className="card__paragraph">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</div>
      </article>
    </div>
  );
}

export default App;
