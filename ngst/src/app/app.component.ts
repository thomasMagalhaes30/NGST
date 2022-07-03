import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Apod', url: '/apod', icon: 'calendar' },
    { title: 'Random Apod', url: '/randomApod', icon: 'flask' },
    { title: 'Apod by date', url: '/apodDate', icon: 'time' },
    { title: 'Localisation', url: '/localisation', icon: 'compass' },
    // { title: 'ISS localisation', url: '/folder/Archived', icon: 'planet' },
    { title: 'Information', url: '/information', icon: 'information-circle' },
  ];

  constructor() { }

  ngOnInit() {
    // on lancement de l'application on set le thème a partir du preferscolorscheme,
    // en axe d'amélioration on pourrait ajouter un sauvegarde du theme
    this.setDataThemeByPrefersColorScheme();

    // on suit les changement de theme
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", () => {
      this.setDataThemeByPrefersColorScheme();
    });
  }

  setDataThemeByPrefersColorScheme(){
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-theme', userPrefersDark ? 'dark' : 'light');
  }


}
