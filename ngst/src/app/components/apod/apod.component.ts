import { Component, Input, OnInit } from '@angular/core';
import { NasaApodService } from '../../services/nasaApod/nasa-apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit {

  public apod: Object = {};

  constructor(private _nasa : NasaApodService) { }

  ngOnInit() {
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
