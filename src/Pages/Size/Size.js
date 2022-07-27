import React from 'react'
import './Styles/Size.scss'
import jQuery from 'jquery'
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

function Size() {

    jQuery(document).ready(function() {
        jQuery(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   
      });



    return (
        <div className='sizeui'>
        <Header/>
        <div className='mainrun'>Size For Shoes</div>
        <div className='sijaw'>Find your correct size in the chart below.</div>
 
        <div className='sijaw'>Scroll horizontally to see more sizes.</div>
        
        <div className='tablesize'>
            <div id="table-scroll" class="table-scroll">
                <div class="table-wrap">
                    <table class="main-table">
                        
                        <tbody>
                            
                            <tr>
                                <th class="fixed-side">US-Men's</th>
                                <td className='firstroes'>3.5</td>
                                <td className='secondroes'>4</td>
                                <td className='firstroes'>4.5</td>
                                <td className='secondroes'>5</td>
                                <td className='firstroes'>5.5</td>
                                <td className='secondroes'>6.5</td>
                                <td className='firstroes'>7.5</td>
                                <td className='secondroes'>8</td>
                                <td className='firstroes'>8.5</td>
                                <td className='secondroes'>9</td>
                                <td className='firstroes'>9.5</td>
                                <td className='secondroes'>10</td>
                                <td className='firstroes'>10.5</td>
                                
                            </tr>
                            <tr>
                                <th class="fixed-side">US-Women's</th>
                                <td className='firstroes'>5</td>
                                <td className='secondroes'>5.5</td>
                                <td className='firstroes'>6</td>
                                <td className='secondroes'>6.5</td>
                                <td className='firstroes'>7</td>
                                <td className='secondroes'>7.5</td>
                                <td className='firstroes'>8</td>
                                <td className='secondroes'>8.5</td>
                                <td className='firstroes'>9</td>
                                <td className='secondroes'>9.5</td>
                                <td className='firstroes'>10</td>
                                <td className='secondroes'>10.5</td>
                                <td className='firstroes'>11</td>
                            </tr>
                            <tr>
                                <th class="fixed-side">US-Kid's</th>
                                <td className='firstroes'>3.5Y</td>
                                <td className='secondroes'>4Y</td>
                                <td className='firstroes'>4.5Y</td>
                                <td className='secondroes'>5Y</td>
                                <td className='firstroes'>5.5Y</td>
                                <td className='secondroes'>6Y</td>
                                <td className='firstroes'>6.5Y</td>
                                <td className='secondroes'>7Y</td>
                                <td className='firstroes'>8Y</td>
                                <td className='secondroes'>9Y</td>
                                <td className='firstroes'>10Y</td>
                                <td className='secondroes'>11Y</td>
                                <td className='firstroes'>12Y</td>
                            </tr>
                            <tr>
                                <th class="fixed-side">UK</th>
                                <td className='firstroes'>3</td>
                                <td className='secondroes'>3.5</td>
                                <td className='firstroes'>4</td>
                                <td className='secondroes'>4.5</td>
                                <td className='firstroes'>5</td>
                                <td className='secondroes'>5.5</td>
                                <td className='firstroes'>6</td>
                                <td className='secondroes'>6.5</td>
                                <td className='firstroes'>7</td>
                                <td className='secondroes'>7.5</td>
                                <td className='firstroes'>8</td>
                                <td className='secondroes'>8.5</td>
                                <td className='firstroes'>9</td>
                            </tr>
                            <tr>
                                <th class="fixed-side">CM/JP</th>
                                <td className='firstroes'>22.5</td>
                                <td className='secondroes'>23</td>
                                <td className='firstroes'>23.5</td>
                                <td className='secondroes'>24.5</td>
                                <td className='firstroes'>25</td>
                                <td className='secondroes'>25.5</td>
                                <td className='firstroes'>26</td>
                                <td className='secondroes'>26.5</td>
                                <td className='firstroes'>27</td>
                                <td className='secondroes'>27.5</td>
                                <td className='firstroes'>28</td>
                                <td className='secondroes'>28.5</td>
                                <td className='firstroes'>29</td>
                            </tr>
                            <tr>
                                <th class="fixed-side">EU</th>
                                <td className='firstroes'>35.5</td>
                                <td className='secondroes'>36</td>
                                <td className='firstroes'>36.5</td>
                                <td className='secondroes'>37</td>
                                <td className='firstroes'>37.5</td>
                                <td className='secondroes'>38</td>
                                <td className='firstroes'>38.5</td>
                                <td className='secondroes'>36</td>
                                <td className='firstroes'>36.5</td>
                                <td className='secondroes'>37</td>
                                <td className='firstroes'>37.5</td>
                                <td className='secondroes'>38</td>
                                <td className='firstroes'>38.5</td>
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

export default Size