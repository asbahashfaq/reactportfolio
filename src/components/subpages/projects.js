
function Projects() {

    return (
        <div className="projectsPage">
            <h2 className="mainHeading">
                Recent Projects
            </h2>
            <div className="recentProjects">
                <ul>
                    <li>
                        <h3 className="subHeading"><a href="https://github.com/asbahashfaq/project4">KidSocial - Video Call app for kids</a></h3>
                        <p>A fullstack web app with user accounts and video call functionality.</p>
                        <ul className="tech"> 
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>PostgreSQL</li> 
                            <li>Socket.io</li>
                            <li>Simple-Peer</li>
                            <li>WebRTC</li>
                            <li>NodeMailer</li>
                            <li>Sass</li>
                            <li>Heroku</li> 
                        </ul>
                        <img src="https://github.com/asbahashfaq/project4/raw/master/demo/login.png" alt="" />
                        <ul className="functionality">
                            <li>Allows parents to create an account for themselves.</li>
                            <li>Parents can create accounts for their children.</li>
                            <li>Parents can add contacts to their accounts, and decide which contacts their children can get in touch with.</li>
                            <li>On account creation, each contact will get an email with their login credentials, and can log in to their accounts and place and accept calls.</li>
                            <li>Children can log in to their accounts, created by their parents, and see all the contacts added for them.</li>
                            <li>They can call their contacts by clicking on their pictures, as well as receive calls innitiated by their contacts.</li>
                        </ul>
                    </li>

                    <li>
                        <h3 className="subHeading"><a href="https://github.com/asbahashfaq/typo">TYPO - Speed Typing App</a></h3>
                        <p>A full-stack database backed Sinatra application, where users can test their typing speed.</p>
                        <ul className="tech"> 
                            <li>Sinatra</li>
                            <li>Ruby</li>
                            <li>PostgreSQL</li>
                            <li>HTML5</li> 
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>GitHub</li> 
                            <li>Heroku</li> 
                        </ul>
                        <img src="https://github.com/asbahashfaq/typo/raw/master/demo/demo.gif" alt="" />
                        <ul className="functionality">
                            <li>Allows users to test their typing speed by typing the chosen paragraph.</li>
                            <li>Lets users save their progress by creating their account, or logging in.</li>
                            <li>Lets users improve their scores by redoing tests, and move up in the scoreboard</li>
                        </ul>
                    </li> 

                    <li>
                        <h3 className="subHeading"><a href="https://github.com/asbahashfaq/tic-tac-toe">Tic Tac Toe</a></h3>
                        <p>A frontend-only app that lets users play the classic tic tac toe game.</p>
                        <ul className="tech"> 
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li> 
                            <li>GitHub</li> 
                            <li>GitHub Pages</li>  
                        </ul>
                        <img src="https://raw.githubusercontent.com/asbahashfaq/tic-tac-toe/master/screenshots/demo.gif" alt="" />
                        <ul className="functionality">
                            <li>Lets users select the difficulty level.</li>
                            <li>Basic AI using ranking matrix lets users play against the computer.</li>
                            <li>Implements Clippath Animation using CSS transitions, to animate the strokes for x and o.</li>
                            <li>Computer can play against computer, allowing users to spectate</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="pastProjects">
                <h3 className="subHeading">Past Work</h3>
                <p>Some websites I have contributed to with previous employers are listed below</p>
                <ul>
                    <li><a href="http://urswim.com/">Long Island Swim School</a></li>
                    <li><a href="http://3valleyvans.com/en/">3ValleyVans</a></li>
                    <li><a href="https://davidgoldmanphoto.com/">David Goldman Photography</a></li>
                    <li><a href="http://www.zerouniversal.com/home.php">Zero Universal</a></li>
                    <li><a href="http://amysmythkids.com/portfolio/">Amy Smyth Photography</a></li>
                    <li><a href="http://www.spitchconsulting.com/">Spitch Consulting </a></li>
                    <li><a href="http://www.next.co.uk/apps">Next Mobile App</a></li>
                </ul>
            </div>
            <div className="universityProjects">
                <p>Some university projects I worked on are listed below along with course names. More information available on request.</p>
                <ul>
                    <li>Wireless, Wearable, Embedded ECG Monitoring System - Final Year Project</li>
                    <li>Universal tourism portalfor Islamabad, using HTML5, Express.js and different APIs - Web Engineering</li>
                    <li>Frontend of a compiler for C language, using C++ - Software Construction</li>
                    <li>Android app launcher, using gesture recognition - Human Computer Interaction</li>
                    <li>Rotating LED globe using programmable microcontrollers in Assembly language - Computer Architecture and Organization</li>
                    <li>Conference manager, using AVL trees to optimize searches from huge databases - Design and Analysis of Algorithms</li>
                    <li>Website for movies, songs, and picturesmanagement, using ASP.net - Software Engineering & Database Management</li>
                    <li>Report generation on the basis of general employees survey, from HMC Taxila - Project Management</li>
                    <li>Windows application for students test records - Object Oriented Programming</li>
                    <li>Helicopter hurdle game using logic gates and ICs - Digital Logic Design</li>
                    <li>Map Viewer, in console application using C++ - Fundamentals of Computer Programming</li>
                    <li>Ensuring reliable connection at Application layer over UDP - Computer Networks</li>
                    <li>Universal Text Editor using Windows Presentation Forms - Software Requirements Engineering</li>
                    <li>Wireless Emergency Charger [Labeled “Product, not project” by instructor] -Fundamentals of ICT</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;