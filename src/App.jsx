import imgPattern from "./assets/images/bg-pattern-card.svg";
import photo from "./assets/images/image-victor.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="">
            <img src={imgPattern} className="pattern-img" alt="" />
          </div>
          <img src={photo} className="profile-img" alt="" />
          <h1>Victor Crest 26</h1>
          <h2>London</h2>
          <div className="top">
            <p>80K</p>
            <p>803K</p>
            <p>1.4K</p>
          </div>
          <div className="bottom">
            <h3>Followers</h3>
            <h3>Likes+</h3>
            <h3>Photos</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
