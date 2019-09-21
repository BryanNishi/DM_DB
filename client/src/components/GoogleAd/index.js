import React from 'react';
import AdSense from 'react-adsense-ad';
import "./googlead.css";


const GoogleAd = (props) => {
    return (
        <div >
            <div className="ad">
                <AdSense.Google
                    client='ca-pub-1224668268886368'
                    slot='6219997689'
                    style={{ width: 728, height: 90}}
                    format=''
                />
            </div>
        </div>
    )
}

export default GoogleAd;