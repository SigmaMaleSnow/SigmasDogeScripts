import React from 'react';
import './styles/Radata.css'

const Promo = () => {
    return (
      <div>
        <div style={{ height: '100px'}}></div>
        <div style={{ textAlign:'center'}}>
       <h1>Promo Page</h1>
       </div>
       <div className="container">
      <div className="large-cards-container">
        <a href='https://greasyfork.org/en/scripts/491809-deadshot-io-esp' rel="noreferrer" target="_blank" className="large-card">
        <img alt='icon' style={{ width: '100%', borderRadius: '10px'}} src='https://images.crazygames.com/deadshot-io/20221006150442/deadshot-io-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop'></img>
          <h2>Deadshot.io ESP</h2>
          <p>Adding a red fill to show all players through walls makes the game clearer and helps players strategize better.</p>
          <p><b className='Bold'>Unlisted Script</b></p>
        </a>
        <a href='https://greasyfork.org/en/scripts/491124-krunker-io-aimbot-xray-spinbot-wireframe-fov-box-and-3rd-person-by-dogeware' rel="noreferrer" target="_blank" className="large-card">
        <img alt='icon' style={{ width: '100%', borderRadius: '10px'}} src='https://th.bing.com/th/id/OIP.cjnb65hjSSb_mBVa3OgGVAHaEK?rs=1&pid=ImgDetMain'></img>
          <h2>Krunker.io Hacks And Cheats</h2>
          <p>Adding features like displaying the nearest visible player along with options such as ESP, Xray, and Wireframe for players and walls.</p>
        </a>
      </div>
      <a href='https://greasyfork.org/en/scripts/473537-dogeminer2-cheats-infinite-no-adds-diamonds-dogecoins-custombackground-skiplevels' rel="noreferrer" target="_blank" className="centered-card">

      <img alt='icon' style={{ width: '100%', borderRadius: '10px'}} src='https://th.bing.com/th/id/OIP.gvsW7rcLNM-AGIQRDHnfbwHaFU?rs=1&pid=ImgDetMain'></img>
        <h2>DogeMiner2 Infante Coins & Daimon's Mod Menu</h2>
        <p>Integrating DogeMiner2 Infante Coins and Daimon's Mod Menu adds exciting new elements and customization options.</p>
      </a>
    </div>
    <div style={{ height: '100px'}}></div>
      </div>
      
    );
  };
  export default Promo