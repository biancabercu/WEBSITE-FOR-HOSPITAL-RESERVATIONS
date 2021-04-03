import React from 'react';
import '../../App.css';
import Header6 from '../app2/Header6';
import Footer from '../app2/Footer'; 
import RoomResponse6 from 'components/app2/RoomResponse6';

export default function sala6() {
   return (
      <>
      <div className='sala6'>
         <h1> SALA 6 - Radiologie</h1>
         <p> Descriere: 
         Radiologia este specialitatea medicala care folosește imagistica medicala pentru a diagnostica și trata bolile din corpul uman și al animalelor.
Sala se afla la etajul 1, in aripa de Nord a spitalului.

         </p>
      </div>
      <Header6 />
      <br/><br/><br/>
      <Footer />
      </>
      )
}
