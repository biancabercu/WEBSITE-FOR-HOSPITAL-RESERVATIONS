import React from 'react';
import '../../App.css';
import Header3 from '../app2/Header3';
import Footer from '../app2/Footer';
import RoomResponse3 from 'components/app2/RoomResponse3';

export default function sala3() {
   return (
      <>
      <div className='sala3'>
         <h1> SALA 3 - Ortopedie</h1>
         <p> Descriere: 
         Ortopedia și traumatologia este specialitatea chirurgicala care se ocupa cu depistarea, diagnosticarea, tratarea și recuperarea afectiunilor congenitale si dobandite, traumatice și netraumatice, ale aparatului locomotor
Sala se afla la etajul 1, in aripa de Est a spitalului.

         </p>
      </div>
    <Header3/>
      <br/><br/><br/>
      <Footer />
      </>
      )
}
