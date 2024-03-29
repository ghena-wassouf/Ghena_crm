import React from 'react'
import './Pop_up.css'

const Pop_up2 = () => {
    return (
        <div className='Alert'>
            <div className='head'>
                <h3>Abandon Drafted Account?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1597 13.5145L11.6453 10L15.1597 6.48551C15.6134 6.03184 15.6134 5.29393 15.1597 4.84026C14.7061 4.38658 13.9682 4.38658 13.5145 4.84026L10 8.35474L6.48551 4.84026C6.03184 4.38658 5.29393 4.38658 4.84026 4.84026C4.38658 5.29393 4.38658 6.03184 4.84026 6.48551L8.35474 10L4.84026 13.5145C4.38658 13.9682 4.38658 14.7061 4.84026 15.1597C5.29393 15.6134 6.03184 15.6134 6.48551 15.1597L10 11.6453L13.5145 15.1597C13.9682 15.6134 14.7061 15.6134 15.1597 15.1597C15.6134 14.7061 15.6134 13.9682 15.1597 13.5145Z" fill="#606B85" /></svg>
            </div>
            <div className='paragraph'>
            <p>Are you sure you would like to delete this account?<br/><br/>
                This action cannot be undone.
            </p>
            </div>
            <div className='GH_btn2'>
                <div className='card_btn'>
                    <button>Cancel</button>
                    <button  style={{background: '#D61F1F', color: 'white' ,border: '1px #D61F1F solid'}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Pop_up2