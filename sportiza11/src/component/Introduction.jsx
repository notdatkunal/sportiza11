import React from 'react'
import Poster from '../assets/poster.png';

const Introduction = () => {
  return (
    <div className='introduction-page'>
        <h1 className='introduction-text'><u>How to Play In Sportiza 11?</u></h1>
        <table className='introduction-page-table'>
            <tbody>
                <tr>
                    <td>
                       <div className='introduction-container-text'>
                        <h3>Introduction</h3>
                        <p>Sportiza11 is India’s biggest Sports Game with an exponentially growing <br />
                        user base of over 2 crore sports fans. Sportiza11 is played by using your <br />
                        sport knowledge and skill. You can pick your own team made up of real <br /> 
                        players for Cricket, Football, Basketball, Hockey, Baseball, Kabaddi, <br />
                        Handball, NBA. Create your team within a maximum budget of 100 <br/>
                        credits. Your team earns points based on your chosen players' performance <br /> 
                        in the real-life matches. It's time to showcase your skill and go for glory!</p>
                        </div> 
                    </td>

                    <td>
                    <div className='introduction-container-image'>
                       <img src={Poster} alt="Arrow" />
                    </div> 
                    </td>
                </tr>
            </tbody>
        </table>

        <div className='select-section'>
            <h3>Select Your Sport</h3>
            <table class="select-table">
            <tr>
                <th><u>Cricket</u></th>
                <th>Foorball</th>
                <th>BasketBall</th>
                <th>Hockey</th>
                <th>Baseball</th>
                <th>Kabaddi</th>
                <th>NBA</th>
            </tr>
        </table>
        </div>

    </div>
  )
}

export default Introduction