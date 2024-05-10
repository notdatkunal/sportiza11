import React from 'react'
import Sportiza from '../assets/sportiza11.png';
import SIcons from '../assets/SIcons.png';
import GaminPrism from '../assets/gamingpirsm.png';
import FP from '../assets/FP.png';
import { Link } from 'react-router-dom';
import fb from '../assets/social/fb.png';
import insta from '../assets/social/instagram.png';
import threads from '../assets/social/threads.png';
import twitter from '../assets/social/twitter.png';
import yt from '../assets/social/youutube.png';

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
                        <div className='footer-container-icons'>

                            <a href="https://www.facebook.com/people/Sportiza-11/61555794179074/">
                            <i class="fa-brands fa-facebook fa-3x"></i>
                            </a>

                            <a href="https://www.instagram.com/sportiza111/">
                            <i class="fa-brands fa-instagram fa-3x"></i>
                            </a>

                            <a href="https://www.threads.net/@sportiza111">
                            <i class="fa-brands fa-threads fa-3x"></i>
                            </a>
                            
                            <a href="https://twitter.com/Sportiza11">
                            <i class="fa-brands fa-twitter fa-3x"></i>
                            </a>

                            <a href="https://youtu.be/JPKgkyLUYNc?si=wF2qO0RJ5P2rMWYG">
                            <i class="fa-brands fa-youtube fa-3x"></i>
                            </a>
                        </div>
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        About Us
                                    </td>
                                    <td>
                                        <Link to={"/disclaimer"}>Disclaimer</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>privacy policy</td>
                                    <td>
                                    <Link to={"/shippling-delivery"}>Shipping Delivery Policy</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={"/leagality"}>Legality</Link>
                                    </td>
                                    <td>
                                        <Link to={"/service-contest"}>Service / Contest</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Link to={"/responsible-play"}>Responsible Play</Link>
                                    </td>
                                    <td>
                                    <Link to={"/fantasy-points"}>Fantasy Points System</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Terms & Conditions</td>
                                    <td>
                                    <Link to={"/contact-us"}>Contact Us</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Link to={"/refund-policy"}>Refund Policy</Link>
                                    </td>
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