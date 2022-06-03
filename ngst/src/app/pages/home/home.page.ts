import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = "edde";

  apod = {
    "date" : "2001-12-29",
    "explanation" : "The sky toward the center of our Galaxy is filled with a wide variety of celestial wonders. Many are easily visible with binoculars.   Constellations near the galactic center include Sagittarius, Libra, Scorpius, Scutum, and Ophiuchus.  Nebulae include Messier Objects M8, M16, M17, M20 and the Pipe Nebula.  Open star clusters include M6, M7, M18, M21, M23, M24, M25.   Globular star clusters include M9, M22, M28, M54, M69, M70.  And don't forget Baade's Window.  Click on the photo to get the un-annotated version.",
    "hdurl" : "https://apod.nasa.gov/apod/image/0112/galcen_wk_big.gif",
    "title" : "The Annotated Galactic Center",
    "url" : "https://apod.nasa.gov/apod/image/0112/galcen_wk.gif"
  };

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor() {
    console.log(this.apod);
  }

}