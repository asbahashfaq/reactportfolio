import Nav from './navigationPanel';
import '../styles/options.scss'
import './global'
import timouts from './global';

function OptionsGrid(props) {

    var paths = {
        experience : 'experience',
        projects: 'projects',
        skills: 'skills',
        education: 'education',
        external: 'externallinks',
        publications: 'publications',
        about: 'about',
        hobbies: 'hobbies'
    }

    // var oldVal1
    // const checkChange = oldVal => {

    //     var newCurrentVal = document.querySelector('#directionHolder').value
    //     console.log('after interval: ', newCurrentVal)
    //     console.log('old ', oldVal1, 'new', newCurrentVal)
    //     if(oldVal1 == newCurrentVal)
    //         console.log("3 seconds gone, open page for: ", newCurrentVal)
    //     oldVal1 = newCurrentVal
    // }
    
    // // var myInterval = setInterval(checkChange, 3000);

    // const doNothing = e => { 
    // } 

    const resetTimouts = () => {
        console.log('clearing timouts: ', timouts)
        timouts.forEach(id => {
            console.log("clearing id: ", id)
            clearTimeout(id)
        });  
        //timouts = []
    }

    const testFunction = (path) => {
        resetTimouts()
        console.log("Current Focus path: ", path)
        
        var timout = setTimeout( () => {
            console.log("Changing path to: ", path)
            props.setCurrentPath(path)
        }, 2000);
        timouts.push(timout)  
        
        console.log("Current timout: ", timout)
        return `Opening...`
    }




    return(
        <div className="optionsWrapper" dir={props.direction}>
            {/* Grid containing all options for portfolio. Each individual page will be called here. Using ReactRouter */}
            <ul className="optionsPanel">
                <li>
                    <div className='item' option={(props.direction == 'tl')?'active':'inactive'} onClick={() => props.setCurrentPath('experience')}>
                        Experience
                        <p className={(props.direction == 'tl')?'openingBar':''}>{(props.direction == 'tl')?testFunction(paths.experience):''}</p>
                    </div>
                </li> 
                <li>
                    <div className='item' option={(props.direction == 't')?'active':'inactive'} onClick={() => props.setCurrentPath('projects')}>
                        Projects
                        <p className={(props.direction == 't')?'openingBar':''}>{(props.direction == 't')?testFunction(paths.projects):''}</p>
                    </div>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'tr')?'active':'inactive'} onClick={() => props.setCurrentPath('skills')}>
                        Skills
                        <p className={(props.direction == 'tr')?'openingBar':''}>{(props.direction == 'tr')?testFunction(paths.skills):''}</p>
                    </div>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'ml')?'active':'inactive'} onClick={() => props.setCurrentPath('education')}>
                        Education
                        <p className={(props.direction == 'ml')?'openingBar':''}>{(props.direction == 'ml')?testFunction(paths.education):''}</p>
                    </div>
                </li>
                <li>
                    {(props.direction == 'm')?resetTimouts():''}
                    <Nav buttons={props.buttons}></Nav>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'mr')?'active':'inactive'} onClick={() => props.setCurrentPath('externallinks')}>
                        External Links
                        <p className={(props.direction == 'mr')?'openingBar':''}>{(props.direction == 'mr')?testFunction(paths.external):''}</p>
                    </div>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'bl')?'active':'inactive'} onClick={() => props.setCurrentPath('publications')}>
                        Publications
                        <p className={(props.direction == 'bl')?'openingBar':''}>{(props.direction == 'bl')?testFunction(paths.publications):''}</p>
                    </div>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'b')?'active':'inactive'} onClick={() => props.setCurrentPath('about')}>
                        About
                        <p className={(props.direction == 'b')?'openingBar':''}>{(props.direction == 'b')?testFunction(paths.about):''}</p>
                    </div>
                </li>
                <li>
                    <div className='item' option={(props.direction == 'br')?'active':'inactive'} onClick={() => props.setCurrentPath('hobbies')}>
                        Hobbies
                        <p className={(props.direction == 'br')?'openingBar':''}>{(props.direction == 'br')?testFunction(paths.hobbies):''}</p>
                    </div>
                </li>
            </ul>
            <div className='instructions'>
                Use arrow keys to navigate. Long press to open a page. You can also click on an option to open the page.
            </div>
        </div>
    )

}

export default OptionsGrid;

// {(props.direction)?props.direction:'n'}