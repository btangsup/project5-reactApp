import React from 'react';

const Preloader = () => {
    return (
        <div className="preloaderContainer">
            <h2>Fetching Events</h2>
            <span>
                <i className="preloader fas fa-music"></i>
            </span>
        </div>
    )
}

export default Preloader;