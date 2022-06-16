import { Component, OnInit, Input } from '@angular/core';
import { NasaApodService } from '../../services/nasaApod/nasa-apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit {

  @Input()
  public strategieToGetApod;
  public apod: Object = {};

  constructor(private _nasa : NasaApodService) { }

  ngOnInit() {
    let promiseToHandle;

    if (this.strategieToGetApod === "random") {
      promiseToHandle = this._nasa.getRandomApod();
    } else {
      promiseToHandle = this._nasa.getTodayApod();
    }

    promiseToHandle.toPromise()
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
