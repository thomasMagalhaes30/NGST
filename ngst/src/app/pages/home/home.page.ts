import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titleApp = "🚀 NGST 🚀";
  public isLandscape : boolean;

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor(public platform: Platform) {
    this.isLandscape = platform.isLandscape();
  }

  ngAfterViewInit() {
    if (this.isLandscape)
    {
      let ionMenu = document.getElementsByTagName('ion-menu');
      
    }
  }
}
