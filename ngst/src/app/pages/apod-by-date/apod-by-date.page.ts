import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-apod-by-date',
  templateUrl: './apod-by-date.page.html',
  styleUrls: ['./apod-by-date.page.scss'],
})
export class ApodByDatePage implements OnInit {

  public titleApp = "🚀 NGST 🚀";
  public isLandscape : boolean;

  dataInputDate = {};

  @Output() 
  emitterDate = new EventEmitter<Date>();

  constructor(public platform: Platform, private menu: MenuController) { }

  ngOnInit() {
    this.isLandscape = this.platform.isLandscape();
    const idt = new Date(); // internal date today
    const idPast = new Date(idt.getFullYear()-26,idt.getMonth(),idt.getDate()); // substract 26 years
    this.dataInputDate["today"] = idt.toISOString().slice(0, 10);
    this.dataInputDate["minimum"] = idPast.toISOString().slice(0, 10);
  }

  ngAfterViewInit() {
    if (this.isLandscape)
    {
      this.menu.enable(true, 'first');
      this.menu.open("menu-ngst");
    }
  }

  onBlur(event) {
    const inputValue = event.target.value;
    this.emitterDate.emit(new Date(inputValue));
  }

}
