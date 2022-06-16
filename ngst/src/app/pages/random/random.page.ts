import { Component, OnInit } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  public titleApp = "🚀 NGST 🚀";
  public isLandscape : boolean;

  constructor(public platform: Platform, private menu: MenuController) { }

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


}
