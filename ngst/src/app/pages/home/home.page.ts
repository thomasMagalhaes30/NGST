import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = "edde";

  apod = {
    "date" : "",
    "explanation" : "",
    "hdurl" : "",
    "title" : "",
    "url" : ""
  };

  // todo ajouter le service par injection de dépendances dans le constructeur
  constructor() {
    let today = new Date();
    let todayString = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDay();

    console.log(todayString);

    fetch("https://api.nasa.gov/planetary/apod?date="+ todayString + "&api_key=BlNiKpyUAovsd7JgTbofzaqUkFrYoFwpAI63SE8x")
    .then(response => response.json())
    .then(data => {
      if (data === undefined || data === null)
        return;
      this.apod.date = data.date;
      this.apod.url = data.url;
      this.apod.title = data.title;
      this.apod.hdurl = data.hdurl;
      this.apod.explanation = data.explanation;
    })
    .catch(console.error);
  }

}