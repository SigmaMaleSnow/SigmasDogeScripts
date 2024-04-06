import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import '../pages/styles/Radata.css';

const AdSenseBanner = () => {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('myCookieConsent='));
    const hasConsent = consentCookie && consentCookie.includes('true');

    setShowAds(hasConsent);
  }, []);

  return (
    <div className="ad-container">
      {showAds && (
        <div>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', margin: '20px auto' }}
            data-ad-client="YOUR_ADSENSE_CLIENT_ID"
            data-ad-slot="YOUR_ADSENSE_SLOT_ID"
            data-ad-format="auto"
          ></ins>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </div>
      )}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookieConsent"
        style={{
          background: '#333',
          color: '#fff',
          padding: '5px',
        }}
        buttonStyle={{
          color: 'black',
          background: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '15px',
          fontWeight: '700',
          transition: 'transform 0.2s ease-in-out',
        }}
        onAccept={() => setShowAds(true)}
      >
        <p>
        <strong>👋Hey there!</strong> We use cookies to make your experience awesome. Enjoy personalized content and ads just for you!<a style={{color:'white', textDecoration:'none'}} href='/privacy-policy'>Learn More</a>
        </p>
      </CookieConsent>
    </div>
  );
};

export default AdSenseBanner;
