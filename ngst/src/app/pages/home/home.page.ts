import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titleApp = "🚀 NGST 🚀";

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor() {

  }
}
