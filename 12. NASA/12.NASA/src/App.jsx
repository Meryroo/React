
import { useEffect, useState } from 'react';
import axios from 'axios';
import Figure from './Figure';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
const today = new Date(Date.now()).toISOString().slice(0, 10);
const [apod, setApod] = useState({});
const [date, setDate] = useState(today);
const NASA_URL = "https://api.nasa.gov/";
const NASA_API_KEY = "JUvM9lftAdnpDZmtIjzhXKeZ4ouPaehXf5H7bJ2K"
const logo = "https://1000marcas.net/wp-content/uploads/2019/12/Nasa-Logo.png"

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);


  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <Header>
      <h2 className='title'>
        NASA API <img src={logo} className="logo" alt="NASA LOCO"/>
      </h2>
      </Header>
      <Main>
     <h1>Astronomy Picture of the Day</h1>
     <input type="date" id="photo-date" onChange={handleInput}/>
     {date > today? (
      <h2>Please choose a previous date</h2>
     ) : (<Figure data={apod}/>)}
     </Main>
     <Footer className="footer">
     <div className='standard-dialog center'>
      <p className='dialog-text'>@meryroo - 2023 - <a haref="https://api.nasa.gov/">https://api.nasa.gov/</a></p>
     </div>
     </Footer>
    </div>
  )
}




export default App
