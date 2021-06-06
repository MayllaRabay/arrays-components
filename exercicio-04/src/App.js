import './App.css';
import { CardInfo, cards } from './components/Card/Info';

function App() {
  return (
    <>
      <div className="header-content-wrapper">
        <div className="header__main-title">Reliable, efficient delivery</div>
        <div className="header__second-title">Powered by Technology</div>
        <div className="header__paragraph">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
      </div>

      <div className="main-container">
        {<CardInfo card = {cards[0]} />}
        <div className="middle-container">
          {<CardInfo card = {cards[1]} />}
          {<CardInfo card = {cards[2]} />}
        </div>
        {<CardInfo card = {cards[3]} />}
      </div>
    </>
  );
}

export default App;
