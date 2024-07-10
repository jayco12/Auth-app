import './page.css'
import arrow_forward from '../../../public/assets/arrow_forward.png'
import Team_Data from '../../../public/assets/team_data.jsx'


const AboutPage = () => {

  return (
    <div className="about-us">
        <div className="about-us-intro">
          <h1>Blurb about team's goal/interest in making this.</h1>
          <p>(Add about our team) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="about-us-team">
          <h2>Meet the Team</h2>
        </div>
        <div className="about-us-container">
        {Team_Data.map((team,index)=>{
          return <div key={index} className='about-us-format'>
             <h3>{team.t_no}</h3>
             <h2>{team.t_name}</h2>
             <p>{team.t_desc}</p>
             <div className='about-us-readmore'>
              <p>Read More</p>
              <img src={arrow_forward} alt="" />
             </div>
          </div>
        })}
        </div>
    </div>
  );
};

export default AboutPage;