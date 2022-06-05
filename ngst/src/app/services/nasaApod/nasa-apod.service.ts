import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApod} from "../../@entities/apod";

@Injectable({
  providedIn: 'root'
})
export class NasaApodService {

  constructor(private _httpClient : HttpClient) { }

  /**
   * Retourne une date aléatoire entre une date de début et une date de fin
   * @param start la date de début, min date par défaut
   * @param end la date de fin, aujourd'hui par défaut
   */
  private static randomDate(start = new Date(0) , end = new Date()) : Date{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  public getApodByDate(year ?: Number, month ?: Number, day ?: Number) : Observable<IApod> {
    let params = new HttpParams();

    if (year && month && day ){
      params = params.set('date', `${year}-${month}-${day}`);
    }
    params = params.set('api_key', "BlNiKpyUAovsd7JgTbofzaqUkFrYoFwpAI63SE8x");

    return this._httpClient.get<IApod>(`https://api.nasa.gov/planetary/apod`, {params});
  }

  public getRandomApod() : Observable<IApod>{
    let d = NasaApodService.randomDate();
    return this.getApodByDate(d.getFullYear(), d.getMonth(), d.getDate());
  }

  public getTodayApod() : Observable<IApod>{
    return this.getApodByDate();
  }
}
