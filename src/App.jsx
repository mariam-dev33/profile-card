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
          <h1>
            Victor Crest <span>26</span>
          </h1>
          <h2>London</h2>
          <hr />
          <div className="notes">
            <div className="followers">
              <p>80K</p>
              <h3>Followers</h3>
            </div>
            <div className="likes">
              <p>803K</p>
              <h3>Likes</h3>
            </div>
            <div className="bottom">
              <p>1.4K</p>
              <h3>Photos</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
