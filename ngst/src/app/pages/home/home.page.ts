import { Component } from '@angular/core';
import { NasaApodService } from '../../services/nasaApod/nasa-apod.service';
import {IApod} from "../../@entities/apod";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public apod: Object = {};

  public titleApp = "🚀 NGST 🚀";

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor(private _nasa : NasaApodService) {

  }

  
  ngAfterViewInit() {
    this._nasa.getTodayApod().toPromise()
    .then(apod => {
      this.apod = apod;

      const apodImg = document.getElementById('apodImg');
      const btn = document.getElementById('seeApodInHD');

      btn.addEventListener('click', function(){
        apodImg.setAttribute('src', apod.hdurl);
        btn.innerHTML = "HD activée";
      });
    })
    .catch(console.error);
  }

}
