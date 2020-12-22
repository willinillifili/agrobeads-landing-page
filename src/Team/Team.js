import team from '../css/Team.css';
import teamData from '../data/Team.js';
import teamPhoto from "../assets/agrobeads_team.jpg";
import ceoPhoto from "../assets/agrobeads_ceo_jose_couvertier.jpg";

function Team() {
  return(
    <section id="team">
      <div className="team-section team-photos">
        <div className="team-photo">
          <img alt="the agrobeads team" src={teamPhoto}/>
        </div>
        <div className="ceo-photo">
          <img alt="jose couvertier at conference" src={ceoPhoto}/>
        </div>
      </div>
      <div className="team-section about-the-team">
        <h2>{teamData.title}</h2>
        <div className="brown-icon-separator"></div>
        <div className="team-description">
          <p>{teamData.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
