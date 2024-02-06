import React from 'react'
import './Account_small.css'
import { Link, NavLink } from 'react-router-dom';
const Account_small = () => {
    return (

        <div className="PIS">
            <div className="GW_contain2">
                <div className='fl'>
                    <div>
                        <h2 className="GW-h2">Accounts</h2>
                        <span>128 Total</span>
                    </div>
                    <svg className='SVG-Col' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0434 9.04341H10.9566V4.95659C10.9566 4.42904 10.5276 4 10 4C9.47244 4 9.04341 4.42904 9.04341 4.95659V9.04341H4.95659C4.42904 9.04341 4 9.47244 4 10C4 10.5276 4.42904 10.9566 4.95659 10.9566H9.04341V15.0434C9.04341 15.571 9.47244 16 10 16C10.5276 16 10.9566 15.571 10.9566 15.0434V10.9566H15.0434C15.571 10.9566 16 10.5276 16 10C16 9.47244 15.571 9.04341 15.0434 9.04341Z" fill="white" />
                    </svg>
                </div>
                <div className="solid fl">
                    <div className='serchicon'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.42982 5.42982C7.33626 3.52339 10.4272 3.52339 12.3336 5.42982C14.0639 7.16006 14.2238 9.86598 12.8134 11.7766L15.7855 14.75C16.0715 15.0359 16.0715 15.4996 15.7855 15.7855C15.4996 16.0715 15.0359 16.0715 14.75 15.7855L11.7774 12.8128C9.86673 14.2238 7.1603 14.0641 5.42982 12.3336C3.52339 10.4272 3.52339 7.33626 5.42982 5.42982ZM6.46539 6.46539C5.13089 7.7999 5.13089 9.96355 6.46539 11.2981C7.7999 12.6326 9.96355 12.6326 11.2981 11.2981C12.6326 9.96355 12.6326 7.7999 11.2981 6.46539C9.96355 5.13089 7.7999 5.13089 6.46539 6.46539Z" fill="#606B85" />
                    </svg>
                    </div>
                    <input type="text" placeholder='Search'></input>
                </div>
                <div className="fl list">
                    <li className='gw-l11' > <NavLink to='../' activeclassName='active'>All</NavLink></li>
                    <li className='gw-l11' > <NavLink to='.../' activeclassName='active'>Prospects</NavLink></li>
                    <li className='gw-l11' > <NavLink to='..../' activeclassName='active'>Leads</NavLink></li>
                    <li className='gw-l11' > <NavLink to='...../' activeclassName='active'>Clients</NavLink></li>
                </div>
                <div className="Acon-sm">
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Skylar Lipshutz</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Adison Rosser</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Rayna George</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Alfonso Calzoni</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Paityn Bator</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Wilson Lubin</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                    <div className="Acon fl">
                        <div className="sid1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#C8AFF0" />
                            </svg>
                        </div>
                        <div className="sid2">
                            <p>Corey Curtis</p>
                            <span>Contacted: 6/12/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account_small