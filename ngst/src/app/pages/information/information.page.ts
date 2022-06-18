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

    this.isDarkTheme = document.body.getAttribute('data-theme')?.includes('dark');
  }

  onClick(event){
    document.body.setAttribute('data-theme', event.detail.checked ? 'dark' : 'light');
  }


}
