import { Component } from '@angular/core';
import { Device } from '@capacitor/device';



@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage {
  public name: string = "Information";
  public isDarkTheme: boolean;

  public deviceName: string;
  public deviceModel: string;
  public devicePlatform: string;
  public deviceOperatingSystem: string;
  public deviceOsVersion: string;
  public deviceManufacturer: string;
  public deviceWebViewVersion: string;

  public mql;
  public handleChangePrefersColorScheme;

  constructor() { }

  ngOnInit() {
    Device.getInfo().then( result => {
        this.deviceName = result.name;
        this.deviceModel = result.model;
        this.devicePlatform = result.platform;
        this.deviceOperatingSystem = result.operatingSystem;
        this.deviceOsVersion = result.osVersion;
        this.deviceManufacturer = result.manufacturer;
        this.deviceWebViewVersion = result.webViewVersion;
    });

    // on set la valeur avec le theme déjà présent
    this.isDarkTheme = this.isDarkThemeFunc();

    this.handleChangePrefersColorScheme = () => {
      this.isDarkTheme = this.isDarkThemeFunc();
    }
    //this.handleChangePrefersColorScheme.bind(this);

    // on suit les changement de theme pour faire changer dynamiquement le switch
    this.mql = window.matchMedia("(prefers-color-scheme: dark)");
    this.mql.addEventListener("change", this.handleChangePrefersColorScheme);
  }

  ngOnDestroy(){
    // on arrete de suivre les changements de theme pour faire changer dynamiquement le switch
    this.mql.removeEventListener("change", this.handleChangePrefersColorScheme);
  }

  isDarkThemeFunc(){
    return document.body.getAttribute('data-theme')?.includes('dark');
  }

  onClick(event){
    document.body.setAttribute('data-theme', event.detail.checked ? 'dark' : 'light');
  }
}
