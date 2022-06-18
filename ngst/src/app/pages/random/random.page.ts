import { Component, OnInit, Output } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { NasaApodService } from 'src/app/services/nasaApod/nasa-apod.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  public name: string = "Random Apod";

  @Output()
  public apod = {};

  constructor(public apodService : NasaApodService) { }

  ngOnInit() {

  }


  injectRandomClick() {
    this.apodService.getRandomApod().subscribe((apod) => {
        this.apod = apod;

        const apodImg = document.getElementById('apodImg');
        const btn = document.getElementById('seeApodInHD');

        btn.addEventListener('click', function(){
          apodImg.setAttribute('src', apod.hdurl);
          btn.innerHTML = "HD activée";
        });
    })
  }

}
