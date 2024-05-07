import React from 'react';
import './styles/keyunlock.css'
function generateRandomString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 56; i++) {
      randomString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  randomString += 'DONT_SHARE_WITH_ANYONE';
  
  return randomString;
}

const Key = () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  let script4key = urlParams.get('script4key');
  let reviewscript = urlParams.get('reviewscript');
  console.log(reviewscript)
  let progress = 10
  const CheckLeads = (location, duration, classIndex, doCheck, islast) => {
    if(document.getElementsByClassName('text')[0].innerHTML === "Complete" & document.getElementsByClassName('text')[1].innerHTML === "Complete"  & document.getElementsByClassName('text')[2].innerHTML === "Complete" ){
      window.open(`https://${script4key}/?paid_key=${generateRandomString()}`)
      return
    }
    if(islast)return
    if(document.getElementsByClassName('text')[classIndex].innerHTML === "Complete" || document.getElementsByClassName('text')[classIndex].innerHTML === "Checking...") return
    if(doCheck){
     if(document.getElementsByClassName('text')[classIndex - 1].innerHTML !== "Complete") return
    }
    if(location === 'https://greasyfork.org/'){
      window.open(`${location}en/scripts/${reviewscript}/feedback#discussion_rating_4`)
    }else window.open(location)
    document.getElementsByClassName('text')[classIndex].innerHTML = "Checking..."
    setTimeout(()=>{
      document.getElementsByClassName('text')[classIndex].innerHTML = "Complete"
      progress += 30
      if(progress <= 100)document.getElementById('progressbar').style.width = `${progress}%`
    }, duration * 1000)
    console.log("Checked " + duration + " " + location + " " + progress);
  }
  return (
    <div className="Unlock">
            <div style={{height: '40px'}}></div>
        <div className='unlock-key'>
            <h1 className='headertext'>Unlock AD Key:<b className='Bold'> {script4key.toLocaleUpperCase()}</b></h1>
            <p> Want a break from the ads? Obtaining this key will grant you ad-free browsing for 24 hours on our script for <b className='Bold'>({script4key.toLocaleUpperCase()})</b>. The key will remain valid for 24 hours in the same browser. This process will be completed in no less than 60 seconds.</p>
            <button onClick={()=>CheckLeads("https://discord.com/invite/BZ3gEGKzD8", 8,0, false,false)} className="button">
              <div class="icon icons8-discord"></div>
              <span class="text">Join The Discord</span>
            </button>
            <button onClick={()=>CheckLeads("https://github.com/CowNowK/AimStar", 9,1, true,false)} class="button">
              <div class="icon icons8-github"></div>
              <span class="text">Github</span>
            </button>
            <button onClick={()=>CheckLeads("https://greasyfork.org/", 13,2, true,false)} class="button">
              <div class="icon icons8-review"></div>
              <span class="text">Script ({script4key})</span>
            </button>
            <div id='progressbar' style={{ width: progress+'%'}} class='unlock-bar'></div>
            <button onClick={()=>CheckLeads("https://github.com/", 9,1, false,true)} class="button">
              <div class="icon icons8-lock"></div>
              <span class="text">Finish🎉</span>
              <div class="icon icons8-link"></div>
            </button>

        </div>
        <div style={{height: '100px'}}></div>
    </div>
)}
export default Key