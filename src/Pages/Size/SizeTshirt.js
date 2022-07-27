import React from 'react'
import './Styles/Size.scss'
import jQuery from 'jquery'
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

function SizeTshirt() {

    jQuery(document).ready(function() {
        jQuery(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   
      });



    return (
        <div className='sizeui'>
        <Header/>
        <div className='mainrun'>Size For Mens And Womens Tops</div>
        <div className='sijaw'>Find your correct size in the chart below.</div>
 
        <div className='sijaw'>Scroll horizontally to see more sizes.</div>
        
        <div className='tablesize'>
            <div id="table-scroll" class="table-scroll">
                <div class="table-wrap">
                    <table class="main-table">
                        
                        <tbody>
                            
                            <tr>
                                <th class="fixed-side">Size</th>
                                <td className='firstroes'>XXS</td>
                                <td className='secondroes'>XS</td>
                                <td className='firstroes'>S</td>
                                <td className='secondroes'>M</td>
                                <td className='firstroes'>L</td>
                                <td className='secondroes'>XL</td>
                                <td className='firstroes'>2XL</td>
                                <td className='secondroes'>3XL</td>
                                <td className='firstroes'>4XL</td>
                                
                               
                                
                            </tr>
                            <tr>
                                <th class="fixed-side">Chest (in.)</th>
                                <td className='firstroes'>28.1 - 31.5</td>
                                <td className='secondroes'>31.5 - 35</td>
                                <td className='firstroes'>35 - 37.5</td>
                                <td className='secondroes'>37.5 - 41</td>
                                <td className='firstroes'>41 - 44</td>
                                <td className='secondroes'>44 - 48.5</td>
                                <td className='firstroes'>48.5 - 53.5</td>
                                <td className='secondroes'>53.5 - 58</td>
                                <td className='firstroes'>58 - 63</td>
                                
                            </tr>
                            <tr>
                                <th class="fixed-side">Waist (in.)</th>
                                <td className='firstroes'>22.5 - 25.5</td>
                                <td className='secondroes'>25.5 - 29.5</td>
                                <td className='firstroes'>28.5 - 31.5</td>
                                <td className='secondroes'>32.5 - 36.5</td>
                                <td className='firstroes'>35.5 - 38</td>
                                <td className='secondroes'>39.5 - 43.5</td>
                                <td className='firstroes'>40.5 - 44.5</td>
                                <td className='secondroes'>45.5 - 48.5</td>
                                <td className='firstroes'>50.5 - 55.5</td>
                                
                            </tr>
                            <tr>
                                <th class="fixed-side">Hip (in.)</th>
                                <td className='firstroes'>28.5 - 31.5</td>
                                <td className='secondroes'>32.5 - 36.5</td>
                                <td className='firstroes'>35.5 - 38</td>
                                <td className='secondroes'>39.5 - 43.5</td>
                                <td className='firstroes'>40.5 - 44.5</td>
                                <td className='secondroes'>45.5 - 48.5</td>
                                <td className='firstroes'>50.5 - 55.5</td>
                                <td className='secondroes'>55 - 58</td>
                                <td className='firstroes'>58 - 58.5</td>
                                
                            </tr>
                            <tr>
                                <th class="fixed-side">Height (in.)</th>
                                <td className='firstroes'>5'7" - 6'0"</td>
                                <td className='secondroes'>5'7" - 6'0"</td>
                                <td className='firstroes'>5'7" - 6'0"</td>
                                <td className='secondroes'>5'7" - 6'0"</td>
                                <td className='firstroes'>5'7" - 6'0"</td>
                                <td className='secondroes'>5'7" - 6'0"</td>
                                <td className='firstroes'>5'7" - 6'0"</td>
                                <td className='secondroes'>5'7" - 6'0"</td>
                                <td className='firstroes'>5'7" - 6'0"</td>
                                
                            </tr>
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>

        
        </div>
        <Footer/>
        </div>
    )
}

export default SizeTshirt