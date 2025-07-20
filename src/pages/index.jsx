import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';


console.log ( "Ahoj 110")

document.querySelector('#root').innerHTML = render(
  <div class="page">
  
    <Header />

    <main>
      
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    

    </main>
 
 <Footer />
    
  </div>
);


const navBtn = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');

if (navBtn && rolloutNav) {

  navBtn.addEventListener('click', () => {
    rolloutNav.classList.toggle('nav-closed');
  });

  rolloutNav.addEventListener('click', () => {
  rolloutNav.classList.add('nav-closed');
  });

} else {
  console.warn("Chybí elementy .nav-btn nebo .rollout-nav. Zkontrolujte, zda jsou v HTML.");
}

/*
const response = await fetch ( 'http://localhost:4000/api/drinks');
const receivedData = await response.json();
console.log("Přijatá data:", receivedData);
*/

// formát vrácených dat JE TO POLE!!!  array


//const adrobr  = receivedData.data[1].image;
//const jmenokavy = receivedData.data[1].name;



//document.body.innerHTML += `<p>Jméno kávy = ${jmenokavy}</p>`;
//document.body.innerHTML += `<p>Cesta obrazku = ${adrobr}</p>`;

