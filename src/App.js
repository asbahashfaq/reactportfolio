import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import './styles/subpages.scss'
import PortfolioGrid from './components/optionsGrid';
import About from './components/subpages/about';
import Education from './components/subpages/education';
import Experience from './components/subpages/experience';
import ExternalLinks from './components/subpages/externallinks';
import Hobbies from './components/subpages/hobbies';
import Projects from './components/subpages/projects';
import Publications from './components/subpages/publications';
import Skills from './components/subpages/skills';
import Footer from './components/footer'

function App() {

  useEffect(() => {
    if(currentPath == 'home'){
      document.querySelector('.home').focus(); 
    }

    // const checkChange = oldVal => {

    //   var newCurrentVal = document.querySelector('#directionHolder').value
    //   console.log('after interval: ', newCurrentVal)
    //   console.log('old ', oldVal, 'new', newCurrentVal)
    //   if(oldVal == newCurrentVal)
    //       console.log("3 seconds gone, open page for: ", newCurrentVal)
    //   oldVal = newCurrentVal
    // }
  
    // var myInterval = setInterval(checkChange(document.querySelector('#directionHolder').value), 3000);

    // document.querySelector('#directionHolder').addEventListener('change', (e) => {
    //   console.log('event fired, thank Allah')

    //   var currentVal = document.querySelector('#directionHolder').value
    //   console.log("current Value: ", currentVal)
    //   clearInterval(myInterval);
    //   console.log('interval cleared')
    //   myInterval = setInterval(checkChange(currentVal), 3000);      
    // })
      
  });
  const [buttons, setButtons] = useState(
    {
      keys: [],
      directions: {
        'tl':false,
        't':false,
        'tr':false,
        'ml':false,
        'm':false,
        'mr':false,
        'bl':false,
        'b':false,
        'br':false
      }
    }
    //when setting state, change both keys, and directions, classes and hence position on page will be updated based on directions object
  )

  const [currentPath, setCurrentPath] = useState('home')
/*
  document.addEventListener('keydown', (e) => {
    e.stopPropagation()
    if (e.repeat) { return }
      // log.textContent += ` ${e.code}`;
    // console.log(buttons)
    var buttonsArray = [...buttons.keys, e.code]
    if (buttons['keys'].indexOf(e.code) == -1){
      var newButtons = { ...buttons,
        keys: [...buttonsArray]
        // directions: {
        //   'tl':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   't':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowUp')>-1)?true:false,
        //   'tr':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
        //   'ml':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   'm':(buttonsArray.length==0)?true:false,
        //   'mr':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
        //   'bl':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   'b':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowDown')>-1)?true:false,
        //   'br':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false
        // } 
      }
      setButtons(newButtons)
      
    }
    console.log('Key Down: ', e.code)
    
  })
  document.addEventListener('keyup', (e) => {
    e.stopPropagation()
    if (e.repeat) { return } 

    var buttonsArray = buttons.keys.filter(k => k != e.code)

    if (buttons['keys'].indexOf(e.code) == -1){
      var newButtons = {...buttons,
        keys: [...buttonsArray], 
        // directions: {
        //   'tl':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   't':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowUp')>-1)?true:false,
        //   'tr':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
        //   'ml':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   'm':(buttonsArray.length==0)?true:false,
        //   'mr':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
        //   'bl':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
        //   'b':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowDown')>-1)?true:false,
        //   'br':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false
        // } 
      }
      setButtons(newButtons)
    }

    console.log('Key Up: ', e.code)
  })
 */
  const keyDownFunction = e => { 

    e.stopPropagation()
    if (e.repeat) { return }
      // log.textContent += ` ${e.code}`;
    // console.log(buttons)
    var buttonsArray = [...buttons.keys, e.code]
    if (buttons['keys'].indexOf(e.code) == -1){
      var newButtons = { ...buttons,
        keys: [...buttonsArray],
        directions: {
          'tl':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          't':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowUp')>-1)?true:false,
          'tr':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
          'ml':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          'm':(buttonsArray.length==0)?true:false,
          'mr':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
          'bl':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          'b':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowDown')>-1)?true:false,
          'br':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false
        } 
      }
      setButtons(newButtons)
      
      // var input = document.querySelector('#directionHolder')
      // console.log(input.value)
      // var ev = new Event('change', { bubbles: true});
      // ev.simulated = true;
      // element.value = Object.keys(newButtons.directions).filter(key => newButtons.directions[key] === true)[0];
      // element.dispatchEvent(ev);
      // input.dispatchEvent(new Event('change', { bubbles: true }));
    }
    console.log('Key Down: ', e.code)
  }

  const keyUpFunction = e => {
    e.stopPropagation()
    if (e.repeat) { return } 

    var buttonsArray = buttons.keys.filter(k => k != e.code)

    if (buttons['keys'].indexOf(e.code) != -1){
      var newButtons = {...buttons,
        keys: buttonsArray, 
        directions: {
          'tl':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          't':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowUp')>-1)?true:false,
          'tr':(buttonsArray.indexOf('ArrowUp')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
          'ml':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          'm':(buttonsArray.length==0)?true:false,
          'mr':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false,
          'bl':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowLeft')>-1)?true:false,
          'b':(buttonsArray.length==1 && buttonsArray.indexOf('ArrowDown')>-1)?true:false,
          'br':(buttonsArray.indexOf('ArrowDown')>-1 && buttonsArray.indexOf('ArrowRight')>-1)?true:false
        } 
      }
      //trigger an event if any one of tl,t,tr,ml,mr,bl,b,br is true
      setButtons(newButtons) 
 
      console.log(newButtons)
    }
    console.log('Key Up: ', e.code)
  }




  const goBackHome = e => {
    setButtons({
      keys: [],
      directions: {
        'tl':false,
        't':false,
        'tr':false,
        'ml':false,
        'm':false,
        'mr':false,
        'bl':false,
        'b':false,
        'br':false
      }
    })
    setCurrentPath('home')
    // window.location.reload(false);
  }
  return (
    <div className="App">
     

      {(currentPath=='home')?
        <div autoFocus className="home" onKeyDown={keyDownFunction} onKeyUp={keyUpFunction}  tabIndex='0'>
          {/* <input id="directionHolder" type='hidden' value={Object.keys(buttons.directions).filter(key => buttons.directions[key] === true)[0]||'m'} onChange={listenForChange} /> */}
          <PortfolioGrid buttons={buttons} direction={Object.keys(buttons.directions).filter(key => buttons.directions[key] === true)[0]} setCurrentPath={setCurrentPath}></PortfolioGrid>  
          {/* {generateFocus()} */}
        </div>
      :(currentPath=='experience')?
        <div className='experience'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Experience/>
          <Footer/>
        </div>
      :(currentPath=='projects')?
        <div className='projects'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Projects/>
          <Footer/>
        </div>
      :(currentPath=='skills')?
        <div className='skills'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Skills/>
          <Footer/>
        </div>
      :(currentPath=='education')?
        <div className='education'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Education/>
          <Footer/>
        </div>
      :(currentPath=='externallinks')?
        <div className='externallinks'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <ExternalLinks/>
          <Footer/>
        </div>
      :(currentPath=='publications')?
        <div className='publications'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Publications/>
          <Footer/>
        </div>
      :(currentPath=='about')?
        <div className='about'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <About/>
          <Footer/>
        </div>
      :(currentPath=='hobbies')?
        <div className='hobbies'>
          <button className='backButton' onClick={goBackHome}>Go Back</button>
          <Hobbies/>
          <Footer/>
        </div>
      :''
      }
    </div>
  );
} 
export default App;
