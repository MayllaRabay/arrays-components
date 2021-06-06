import imageDaniel from "../../assets/image-daniel.jpg";
import imageJeanette from "../../assets/image-jeanette.jpg";
import imageJonathan from "../../assets/image-jonathan.jpg";
import imageKira from "../../assets/image-kira.jpg";
import imagePatrick from "../../assets/image-patrick.jpg";

const authors = [
  {
    article: "card card--1",
    avatar: imageDaniel,
    name: "Daniel Clifford",
    title: "Verified Graduate",
    heading: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    paragraph: "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
  }, {
    article: "card card--2",
    avatar: imageJonathan,
    name: "Jonathan Walters",
    title: "Verified Graduate",
    heading: "The team was very supportive and kept me motivated.",
    paragraph: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
  }, {
    article: "card card--3",
    avatar: imageJeanette,
    name: "Jeanette Harmon",
    title: "Verified Graduate",
    heading: "An overall wonderful and rewarding experience.",
    paragraph: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
  }, {
    article: "card card--4",
    avatar: imagePatrick,
    name: "Patrick Abrams",
    title: "Verified Graduate",
    heading: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    paragraph: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
  }, {
    article: "card card--5",
    avatar: imageKira,
    name: "Kira Whittle",
    title: "Verified Graduate",
    heading: "Such a life-changing experience. Highly recommended!",
    paragraph: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
  }
];

function AuthorInfo({ author }) {
  return (
    <article className={author.article}>
      <div className="author__content-wrapper">
        <img src={author.avatar} alt="author avatar" className="author__avatar" />
        <div className="author__text-wrapper">
          <div className="author__name">{author.name}</div>
          <div className="author__title">{author.title}</div>
        </div>
      </div>
      <h3 className="card__heading">{author.heading}</h3>
      <p className="card__paragraph">“ {author.paragraph} ”</p>
    </article>
  );
}

const authorInfo = authors.map(author => <AuthorInfo author = {author} />);

export default authorInfo;