import home from '../css/Home.css';
import hero from '../assets/hero.png';
function Home() {
  return(
    <section id="home">
      <div id="heroTextSection">
        <div className="heroImage">
          <img alt="background-image" src={hero}/>
        </div>
        <div className="heroTextElement heroText">
          Let's grow together.
        </div>
        <div className="heroTextElement heroSub">
          All natural solution that satisfies your plant's needs.
        </div>
        <button type="button" className="heroTextElement cta">
          learn more
        </button>
      </div>
    </section>
  );
}

export default Home;
