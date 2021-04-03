import React from 'react';
import '../../App.css';
import Header1 from '../app2/Header1';
import Header1ocupat from '../app2/Header1ocupat';
import Footer from '../app2/Footer';
import RoomResponse1 from '../app2/RoomResponse1';
export default function sala1() {
   return (
   <>
   <div className='sala1'>
      <h1>  SALA 1 - Cardiologie</h1>
     
      <p>Descriere:
         Cardiologia este o specialitate medicala care are ca subiect de studiu bolile inimii și ale vaselor de sange.
         Sala se afla la etajul 1, in aripa de Vest a spitalului.
      </p>
   </div>

    <Header1 /> 
  
                        
      <br/><br/><br/>
      <Footer />
   </>
   )
}
