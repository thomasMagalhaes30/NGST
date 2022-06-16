import { Component} from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titleApp = "🚀 NGST 🚀";
  public isLandscape : boolean;

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor(public platform: Platform, private menu: MenuController) {
    this.isLandscape = platform.isLandscape();
  }

  ngAfterViewInit() {
    if (this.isLandscape)
    {
      this.menu.enable(true, 'first');
      this.menu.open("menu-ngst");
    }
  }
}
