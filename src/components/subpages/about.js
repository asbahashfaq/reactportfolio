import Contact from './contact'

function About() {

    return (
        <div className='aboutPage'>
            <h2 className='mainHeading'>
                About Me
            </h2>
            <div className='text'>
                My name is Asbah, read on to learn a bit about me...
                <br/><br/>
                I'm a full stack web developer, and have over 7 years of experience building frontend focused apps. I have recently completed a Software Engineering Immersive Course at General Assembly Australia, to facilitate my move into a full stack role. 
                <br/><br/>
                I have a creative and problem solving mindset, and never say no to a challenge. I love building solutions and helping companies build their brand. 
                <br/><br/>
                My dream role would be one where growth is key, with people who build each other up and work together to develop apps and tools that have a life of their own.
                <br/><br/>
                
                <div className="lifeRule">
                    My rule for life: Celebrate successes and welcome failures! 
                </div>
                
                Like everyone, I have faced my fare share of failures, and I have learned to welcome them with open arms which has increased my drive to jump out of situations stronger.
                <br/><br/>
                Some of the things that I value dearly include family, friends and ethics. My family is one of the most important things for me, everything else follows. 
                <br/><br/>
                I value kindness above all, and jump at the chance to help anyone in need. I believe kindess has a way of coming back at us, directly or indirectly, sooner or later.
                <br/><br/>

                <div className='getInTouch'>
                    Get in Touch: 
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/asbahashfaq/">
                                <img src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_LinkedIn-Outline-512.png" alt="" />
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="mailto:asbah.ashfaq@live.com">
                                <img src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/mail_email_e-mail_letter-256.png" alt="" />
                                Email
                            </a>
                        </li>
                    </ul> 
                </div> 
            </div>
        </div>
    )
}

export default About;