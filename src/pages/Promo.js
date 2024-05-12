import React, { useState } from 'react';
import './styles/Radata.css'
import './styles/HomeCSS.css';

const Promo = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/SigmaMaleSnow/UpdateLogKrunker/main/DogeScriptsStats.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
      <div>
        <div style={{ height: '100px'}}></div>
        <div style={{ textAlign:'center'}}>
       <h1><b className='Bold'>Promo</b> Page</h1>
       <p className='captext'>This Page Is Used to promote my <b className='Bold'>scripts</b> On the first time you open/close the mod menu in the scripts. Would like if you <b className='Bold'>check</b> these scripts before you use your current script.</p>
       <br/>
       </div>
       <div className="container">
      <div className="large-cards-container">
        <a href='https://greasyfork.org/en/scripts/491809-deadshot-io-esp' rel="noreferrer" target="_blank" className="large-card">
        <div className='skeleton-loading' style={{ width: '100%', borderRadius: '10px', height: '250px', margin: '0'}}></div>
          <h2>Deadshot.io ESP</h2>
          <p>Adding a red fill to show all players through walls makes the game clearer and helps players strategize better.</p>
          <p><b className='Bold'>*Patched</b></p>
        </a>
        <a href='https://greasyfork.org/en/scripts/491124-krunker-io-aimbot-xray-spinbot-wireframe-fov-box-and-3rd-person-by-dogeware' rel="noreferrer" target="_blank" className="large-card">
        <div className='skeleton-loading' style={{ width: '100%', borderRadius: '10px', height: '250px', margin: '0'}}></div>
          <h2>Krunker.io Hacks And Cheats</h2>
          <p>Adding features like displaying the nearest visible player along with options such as ESP, Xray, and Wireframe for players and walls.</p>
          <p><b className='Bold'>*Working</b></p>
          <p><b className='Bold'>*ADS</b></p>
        </a>
        <a href='https://greasyfork.org/en/scripts/494445-smashkarts-esp-charms' rel="noreferrer" target="_blank" className="large-card">
      <div className='skeleton-loading' style={{ width: '100%', borderRadius: '10px', height: '250px', margin: '0'}}></div>
        <h2>⭐SmashKarts ESP/Charms</h2>
        <p>SmashKarts ESP lets you see players even when they're behind walls or objects. Though, it might not work on every single map. Changes the color of the players.</p>
        <p><b className='Bold'>*No ADS</b></p>
        <p><b className='Bold'>*Working</b></p>
      </a>
      <a href='https://greasyfork.org/en/scripts/473537-dogeminer2-cheats-infinite-no-adds-diamonds-dogecoins-custombackground-skiplevels' rel="noreferrer" target="_blank" className="large-card">
      <div className='skeleton-loading' style={{ width: '100%', borderRadius: '10px', height: '250px', margin: '0'}}></div>
        <h2>DogeMiner2 Infante Coins & Daimon's Mod Menu</h2>
        <p>Integrating DogeMiner2 Infante Coins and Daimon's Mod Menu adds exciting new elements and customization options.</p>
        <p><b className='Bold'>*Working</b></p>
        <p><b className='Bold'>*No ADS</b></p>
      </a>
      {data ? (
        <a href='https://greasyfork.org/' className="large-card">
          <div className='statsMenu'>
            <h1><b className='Bold'>🎉{data.author}, Statistics</b></h1>
            <h2>Installs <b className='Bold'>Daily:</b> {data.daily}</h2>
            <h2>Installs <b className='Bold'>Total:</b> {data.total}</h2>
          </div>
        </a>
      ) : (
        <p></p>
      )}
     
      </div>
    </div>
    <div style={{ height: '150px'}}></div>
      </div>
      
    );
  };
  export default Promo