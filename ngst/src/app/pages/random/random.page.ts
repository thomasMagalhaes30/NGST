import { Component, OnInit, Output } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { NasaApodService } from 'src/app/services/nasaApod/nasa-apod.service';
import {IApod} from "@entities/apod";

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  public name: string = "Random Apod";

  @Output()
  public apod : IApod = {} as IApod;

  constructor(public apodService : NasaApodService) { }

  ngOnInit() {

  }


  injectRandomClick() {
    this.apodService.getRandomApod().subscribe((apod) => {
        this.apod = apod;
    });
  }

}
