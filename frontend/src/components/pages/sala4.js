import React from 'react';
import '../../App.css';
import Header4 from '../app2/Header4';
import Footer from '../app2/Footer';
import RoomResponse4 from 'components/app2/RoomResponse4';

export default function sala4() {
   return (
      <>
      <div className='sala4'>
         <h1> SALA 4 - Pediatrie</h1>
         <p> Descriere: 
         Pediatria este o specialitate medicala care se ocupa cu studiul si tratarea bolilor intalnite la copii. Tratamentul acestor boli este diferit fata de cel al adultilor. Specialisti sunt medicii pediatri.
Sala se afla la etajul 3, in aripa de Nord a spitalului.
         </p>
      </div>
    
      <Header4 />
      <br/><br/><br/>
      <Footer />
      </>
      )
}
