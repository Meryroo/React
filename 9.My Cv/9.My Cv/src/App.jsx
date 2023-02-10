import { useState } from 'react'
import './App.css'
import { CV } from './components/CV/CV'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education & Experience/Education';
import Experience from './components/Education & Experience/Experience';
import Languages from './components/More/Languajes';
import Skills from './components/More/Skills';
import Volunteer from './components/More/Volunteer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  const { hero, education, experience, languages, habilities, volunteer } = CV;
  const [showEducation, setShowEdutacion] = useState(true);

  return (
    <div className="App">
      <Header>
      <button className='custom-btn btn-4' onClick={()=>setShowEdutacion(true)}>Education</button>
      <button className='custom-btn btn-4' onClick={() =>setShowEdutacion(false)}>Experience</button>
      </Header>
      <Main>
      <Hero hero={hero}/>
      {hero.aboutMe.map((info) =>(
        <About info={info.info} key={info.info}/>   
      ))}
    
      {showEducation ? (<Education education={education} key={JSON.stringify(education)}/>) :
      (<Experience experience={experience}/>)}
     <Languages languages={languages}/>
     <Skills skills={habilities}/>
     <Volunteer volunteer={volunteer}/>
     </Main>
     <Footer>
      <p>Powered by Neoland 2❤️</p>
     </Footer>
      
    </div>
  )
}

export default App
