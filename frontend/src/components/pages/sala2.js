import React from 'react';
import '../../App.css';
import Header2 from '../app2/Header2';
import Footer from '../app2/Footer';
import RoomResponse2 from 'components/app2/RoomResponse2';


export default function sala2() {
   return (
      <>
      <div className='sala2'>
         <h1> SALA 2 - Reumatologie</h1>
         <p> Descriere: 
Reumatologia este o ramura a medicinii interne, care se ocupă cu depistarea, diagnosticarea, tratarea si recuperarea bolnavilor cu afectiuni nechirurgicale ale aparatului locomotor.
Sala se afla la etajul 2, in aripa de Sud a spitalului.

         </p>
      </div>
      
      <Header2 />
      <br/><br/><br/>
      <Footer />
      </>
      )

}
