import React from 'react'
import Sportiza from '../assets/sportiza11.png';
import SIcons from '../assets/SIcons.png';
import GaminPrism from '../assets/gamingpirsm.png';
import FP from '../assets/FP.png';

const Footer = () => {
  return (
        <div className='footer-container'>
        <table>
            <tbody className='footer-container-table'>
                <tr>
                    <td>
                        <img src={Sportiza} alt="" />
                        <p>Contact : +91 82768 74632 (24*7)</p>
                        <p>Email : support@gamingprismprivatelimited.com</p>
                        <p>Follow Us On</p>
                        <img src={SIcons} alt=""  className='footer-container-icons'/>
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>About Us</td>
                                    <td>Disclaimer</td>
                                </tr>
                                <tr>
                                    <td>privacy policy</td>
                                    <td>Shipping Delivery Policy</td>
                                </tr>
                                <tr>
                                    <td>Legality</td>
                                    <td>Service / Contest</td>
                                </tr>
                                <tr>
                                    <td>Responsible Play</td>
                                    <td>Fantasy Points System</td>
                                </tr>
                                <tr>
                                    <td>Terms & Conditions</td>
                                    <td>Contact Us</td>
                                </tr>
                                <tr>
                                    <td>Refund Policy</td>
                                    <td>Community Guidelines</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Help and support</p>
                    </td>
                    <td>
                        <p>Founding Member</p>
                        <img src={GaminPrism} alt="" />
                        {/* <h1></h1>
                        <p>Powred By</p>
                        <img src={FP} alt="" /> */}
                    </td>
                </tr>
            </tbody>
        </table>
        <p>---------------------------------------------------------------------------------------------------</p>
        <h3>CORPORATE OFFICE</h3>
        <p>334 Location: 334 oustad amir khan road, sporting club, tollygunge Kolkata-700082</p>
        <div className='footer-solid-container'>
            <h5>Privacy Policy                  |               Terms & Conditions</h5>
        </div>
        <div className='footer-last-container'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>This game may be habit-forming or financially risky. Play responsibly.</p>
                        </td>
                        <td>
                        <p>Copyright ©2024 GamingPrism Private Limited. All rights reserved.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Footer