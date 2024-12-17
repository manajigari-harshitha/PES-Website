import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
// import profilepic from "../assets/governingbody/president.png"
import president from "../assets/governingbody/Ruchita.jpg"
import vicepresident from "../assets/governingbody/Jay.jpg"
import agrasen from "../assets/governingbody/Agrasen.jpg"
import brajesh from "../assets/governingbody/Brajesh.jpg"
import pranav from "../assets/governingbody/Pranav.jpg"
import shashank from "../assets/governingbody/Shashank.jpg"
import udit from "../assets/governingbody/Udit.jpg"
import yogesh from "../assets/governingbody/Yogesh.jpeg"
import shiva from "../assets/governingbody/shiva.jpg"
import diya from "../assets/governingbody/diya.jpg"
import directorPic from "../assets/patronAndMentor/rajeev_sir.jpeg"
import pps_sir from "../assets/patronAndMentor/pps_sir.jpeg"
import harpreet_sir from "../assets/patronAndMentor/harpreet_sir.jpg"
import webdev_1 from "../assets/webdevelopers/webdev_1.jpg"
import webdev_2 from "../assets/webdevelopers/webdev_2.jpg"
import webdev_3 from "../assets/webdevelopers/webdev_3.jpg"
import webdev_4 from "../assets/webdevelopers/webdev_4.jpg"
import webdev_5 from "../assets/webdevelopers/webdev_5.jpg"
import webdev_6 from "../assets/webdevelopers/webdev_6.jpg"
import webdev_7 from "../assets/webdevelopers/webdev_7.jpg"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/header-testing.jpg"

function OurTeamPage(){
    return(
        <>  
            <PageHeader
            title = "Our Team"
            image = {HeaderImage}
             />

            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {directorPic}
                            name = "Prof. Rajeev Ahuja"
                            designation = "Director, IIT Ropar"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {pps_sir}
                            name = "Dr. Pushpendra P. Singh"
                            designation = "Associate Professor, IIT Ropar"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {harpreet_sir}
                            name = "Prof. Harpreet Singh"
                            designation = "Professor, IIT Ropar"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                 
                    </div>
                </section>
                <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {president}
                            name = "Ruchita Gupta"
                            designation = "President"
                            email = "2022meb1339@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {vicepresident}
                            name = "Jay Goel"
                            designation = "Vice President"
                            email = "2022eeb1178@iitrpr.ac.in"
                        />
                       
                          <TeamsCard
                            img = {pranav}
                            name = "Pranav Menon"
                            designation = "Secretary-1"
                            email = "2022csb1329@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {yogesh}
                            name = "Yogesh Rathia"
                            designation = "Secretary-2"
                            email = "2023csm1022@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {udit}
                            name = "Udit Vijay"
                            designation = "PR and Sponsorship Lead"
                            email = "2022ceb1033@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {agrasen}
                            name = "Agrasen Yadav"
                            designation = "Paathshala Lead"
                            email = "2023meb1327@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {shiva}
                            name = "Shiva Kumar"
                            designation = "Office Team Lead"
                            email = "2023eeb1244@iitrpr.ac.in"
                        />
                          
                          <TeamsCard
                            img = {diya}
                            name = "Diya Seal"
                            designation = "Social Media Lead"
                            email = "2023meb1341@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {shashank}
                            name = "Shashank Kumar"
                            designation = "Outreach Lead"
                            email = "2021csb1131@iitrpr.ac.in"
                        />
                     
                             <TeamsCard
                            img = {brajesh}
                            name = "Brajesh Khokad"
                            designation = "Event Management Lead"
                            email = "2023csb1111@iitrpr.ac.in"
                        />
                              
                              
                    </div>
                </section>
                <section className="Web-developer OurTeam">
                    <h1>Web Developers</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {webdev_1}
                            name = "Krishan Kant"
                            designation = "Front-end Lead"
                            email = "2021meb1293@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_2}
                            name = "Meriga.Sai Lahari "
                            designation = "Back-end Lead"
                            email = "2023eem1006@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_3}
                            name = "Upasna"
                            designation = "Back-end Team"
                            email = "2021csz0002@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_4}
                            name = "Harshit Kumar"
                            designation = "Back-end Team"
                            email = "2021csb1093@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_5}
                            name = "Gopi Varshini"
                            designation = "Front-end Team"
                            email = "2022mcb1264@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_6}
                            name = "Jay Goel"
                            designation = "Front-end Team"
                            email = "2022eeb1178@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_7}
                            name = "Nalin Angrish"
                            designation = "Back-end Team"
                            email = "2023meb1360@iitrpr.ac.in"
                        />
                    </div>
                </section>
                <Link className='LinkForPastTeams' to="/pastteams">
                    <button type="button" className="PastTeamsButton"><b>Past Teams</b> &#10148;</button>
                </Link>
            </div>
        </>
    )
}

export default OurTeamPage
