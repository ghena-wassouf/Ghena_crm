import React from 'react'
import './Pop_up.css'

const Pop_up = () => {
    return (
        <div className='Alert'>
            <div className='head'>
                <h3>Save as Lead</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1597 13.5145L11.6453 10L15.1597 6.48551C15.6134 6.03184 15.6134 5.29393 15.1597 4.84026C14.7061 4.38658 13.9682 4.38658 13.5145 4.84026L10 8.35474L6.48551 4.84026C6.03184 4.38658 5.29393 4.38658 4.84026 4.84026C4.38658 5.29393 4.38658 6.03184 4.84026 6.48551L8.35474 10L4.84026 13.5145C4.38658 13.9682 4.38658 14.7061 4.84026 15.1597C5.29393 15.6134 6.03184 15.6134 6.48551 15.1597L10 11.6453L13.5145 15.1597C13.9682 15.6134 14.7061 15.6134 15.1597 15.1597C15.6134 14.7061 15.6134 13.9682 15.1597 13.5145Z" fill="#606B85" /></svg>
            </div>
            <div className='paragraph'>
                <p>Saving a lead allows you to save lead information to edit later but it will not count as a new client.<br /><br />Please select “Save Client” to confirm you have signed a new client.</p>
            </div>
            <div className='GH_btn'>
                <div className='Rad-btn' >
                    <input type="radio" id="r1" name="r1" />
                    <label for="r1">Mute for 24 hrs.</label>
                </div>
                <div className='card_btn'>
                    <button>Cancel</button>
                    <button style={{ background: '#0263E0', color: 'white', border: '1px #0263E0 solid' }}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Pop_up