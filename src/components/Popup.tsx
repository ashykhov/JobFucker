import React, { useState } from 'react';
import { openNewTab } from '@utils/UrlOpener';

const Popup = () => {
    const [url, setUrl] = useState('');

    return (
        <div className='popupContainer'>
            <input
                className='inputUrl'
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button className='startButton' onClick={() => openNewTab(url)}>Старт</button>
        </div>
    );
};

export { Popup }
