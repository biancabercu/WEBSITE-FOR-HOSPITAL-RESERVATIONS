import React from 'react';
import '../../App.css';
import Header5 from '../app2/Header5';
import Footer from '../app2/Footer';
import RoomResponse5 from 'components/app2/RoomResponse5';

export default function sala5() {
   return (
      <>
      <div className='sala5'>
         <h1> SALA 5 - Operatie</h1>
         <p> Descriere: 
         Este reprezentata de sala in cadrul careia sunt efectuate operatiile/interventiile chirurgicale.
Sala se afla la etajul 2, in aripa de Vest a spitalului.

         </p>
      </div>
    
      <Header5 />
      <br/><br/><br/>
      <Footer />
      </>
      )
   }
