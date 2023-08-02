import './App.css';
import Card from './components/card.js';
import HeroCard from './components/HeroCard.js'

function App() {
  return (
    <div className="App">
       <div class="wrapper">
        <HeroCard/>  
        <h2 class="subtitle">Experience</h2>
        <div id='experience' class="cards">
          <Card
          image = "Itaih"
          title = "ITAIH"
          description="Database administrator and Delphi programmer of an in-house correspondence system."
          period= "October 2021 - February 2022"
          />
          <Card
          image = "MuralTactil"
          title = "Mural Táctil"
          description="UI/UX Designer of a medical appointment and calendar website."
          period= "October 2022 - December 2022"
          />
        </div>
        <h2 class="subtitle">Projects</h2>
        <div id='projects' class="cards"> 
          <Card
            image = "gallery"
            title = "Photo Gallery"
            description="Gallery of images of natural wonders across Latin America with responsive interface."
            />
            <Card
            image = "calculator2"
            title = "Calculator"
            description="Basic calcultar developed with JS (Currently in progress)."
            />
        </div>
        </div>
        
    </div>
  );
}

export default App;
