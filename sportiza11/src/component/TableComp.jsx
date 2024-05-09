import React from 'react'
import Logo1 from '../assets/Png2.png';
import Logo2 from '../assets/Png3.png';
import Logo3 from '../assets/Png4.png';
import Logo4 from '../assets/Png5.png';
import Logo5 from '../assets/Png6.png';
import Logo6 from '../assets/Png7.png';
import Logo7 from '../assets/Png8.png';

const TableComp = () => {
  return (
    <div className='select-table-conatiner-inf'>
        <table className='select-table-inf'>
            <tbody>
                <tr className='select-table-row'>
                  <td className='select-table-img'>
                  <img src={Logo1} alt="" />
                  </td>
                  <td className='select-table-text'>
                    <h2>1.</h2>
                    <h4>Log in or Sign Up Your Sportiza 11 Acoount </h4>
                    <p>Log In Or Sign Up Your Account By Your Verified Mail Id or Phone number</p>
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-text-left'>
                    <h2>2.</h2>
                    <h4>Select Your Team</h4>
                    <p>Choose the match you want to play and show-off your skills.</p>
                  </td>
                  <td className='select-table-img'>
                    <img src={Logo2} alt="" />
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-img'>
                  <img src={Logo3} alt="" />
                  </td>
                  <td className='select-table-text'>
                    <h2>3.</h2>
                    <h4>Select Your Contest</h4>
                    <p>Select Your Bet According To The Contest</p>
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-text-left'>
                    <h2>4.</h2>
                    <h4>Select Your Playing 11</h4>
                    <p>Create your own team by selecting different players within a <br />
                    defined virtual credit points.</p>
                  </td>
                  <td className='select-table-img'>
                    <img src={Logo4} alt="" />
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-img'>
                  <img src={Logo5} alt="" />
                  </td>
                  <td className='select-table-text'>
                    <h2>5.</h2>
                    <h4>Choose Your Captain & Vice Captain <br />
                    Batsman, Bowler Wicket Keeper For <br />
                    Your Playing 11</h4>
                    <p>Once you choose your playing 11 it’s time to <br />
                    choose your captain & vice-captain that will help <br />
                    you earn extra points. 2x points for the Captain & 1.5x <br />
                    points for the Vice-Captain based on their on-field performance.</p>
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-text-left'>
                    <h2>6.</h2>
                    <h4>Select Your Batsman, Bowler, Wicket <br />
                    Keeper Individually</h4>
                    <p>Create your own team by selecting different players <br />
                    within a defined virtual credit points.</p>
                  </td>
                  <td className='select-table-img'>
                    <img src={Logo6} alt="" />
                  </td>
                </tr>
                <tr className='select-table-row'>
                  <td className='select-table-img'>
                  <img src={Logo7} alt="" />
                  </td>
                  <td className='select-table-text'>
                    <h2>7.</h2>
                    <h4>Select Your Playing 11 With Carefully</h4>
                    <p>Once you choose your playing 11 it’s time to choose <br />
                    your captain & vice-captain that will help you earn <br /> 
                    extra points. 2x points for the Captain & 1.5x points for the <br />
                    Vice-Captain based on their on-field performance.</p>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableComp