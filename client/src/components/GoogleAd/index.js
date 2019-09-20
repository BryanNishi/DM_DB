import React from 'react';
import AdSense from 'react-adsense-ad';


const GoogleAd = (props) => {
    return (
        <div>
            <AdSense.Google
                client='ca-pub-1224668268886368'
                slot='6219997689'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
        </div>
    )
}

export default GoogleAd;