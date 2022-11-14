import React from 'react'
import WidgetOption from './WidgetOption'
import '../css/Widget.css'

function Widget() {
    return (
        <div className='Widget'>
            <div className="widget__header">
            <h5>Spaces to follow</h5>
            </div>
            <div className='widget__contents'>
                <WidgetOption />
            </div>
        </div>
        
    );
}

export default Widget;

