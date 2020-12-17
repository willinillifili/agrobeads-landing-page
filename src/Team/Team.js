import team from '../css/Team.css';
import teamData from '../data/Team.js';

function Team() {
  return(
    <section id="team">
      <div className="team-section team-photos">
        <div className="team-photo"></div>
        <div className="founder-photo"></div>
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
