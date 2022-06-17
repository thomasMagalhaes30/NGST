import { Component, OnInit, Output } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { NasaApodService } from 'src/app/services/nasaApod/nasa-apod.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  public titleApp = "🚀 NGST 🚀";
  public isLandscape : boolean;

  @Output()
  public apod = {};

  constructor(public platform: Platform, private menu: MenuController, public apodService : NasaApodService) { }

  ngOnInit() {
    this.isLandscape = this.platform.isLandscape();
  }

  ngAfterViewInit() {
    if (this.isLandscape)
    {
      this.menu.enable(true, 'first');
      this.menu.open("menu-ngst");
    }
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
