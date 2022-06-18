import { Component, OnInit, Output } from '@angular/core';
import { NasaApodService } from 'src/app/services/nasaApod/nasa-apod.service';

@Component({
  selector: 'app-apod-by-date',
  templateUrl: './apod-by-date.page.html',
  styleUrls: ['./apod-by-date.page.scss'],
})
export class ApodByDatePage implements OnInit {
  public name: string = "Apod by date";

  dataInputDate = {};

  @Output()
  public apod = {};

  constructor(private nasa : NasaApodService) { }

  ngOnInit() {
    const idt = new Date(); // internal date today
    const idPast = new Date(idt.getFullYear()-26,idt.getMonth(),idt.getDate()); // substract 26 years
    this.dataInputDate["today"] = idt.toISOString().slice(0, 10);
    this.dataInputDate["minimum"] = idPast.toISOString().slice(0, 10);
  }

  onBlur(event) {
    const inputValue = event.target.value;
    const dateInput = new Date(inputValue);
    this.nasa.getApodByDate(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDate()).subscribe(apod => {
      this.apod = apod;

      const apodImg = document.getElementById('apodImg');
      const btn = document.getElementById('seeApodInHD');

      btn.addEventListener('click', function(){
        apodImg.setAttribute('src', apod.hdurl);
        btn.innerHTML = "HD activée";
      });
    });
  }

}
