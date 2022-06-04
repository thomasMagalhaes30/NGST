import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public apod: Object = {};

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor() {

  }

  ngAfterViewInit() {

    let today = new Date();
    let todayString = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();

    fetch("https://api.nasa.gov/planetary/apod?date="+ todayString+"&api_key=BlNiKpyUAovsd7JgTbofzaqUkFrYoFwpAI63SE8x")
    .then(response => response.json())
    .then(data => {
      if (data === undefined || data === null)
        return;
      this.apod["date"] = data.date;
      this.apod["url"] = data.url;
      this.apod["title"] = data.title;
      this.apod["hdurl"] = data.hdurl;
      this.apod["explanation"] = data.explanation;

      const apodImg = document.getElementById('apodImg');
      const btn = document.getElementById('seeApodInHD');

      btn.addEventListener('click', function(){
        apodImg.setAttribute('src', data.hdurl);
        btn.innerHTML = "HD activée";
      });
    })
    .catch(console.error);
  }

}
