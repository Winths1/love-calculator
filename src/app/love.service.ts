import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface LoveResult {
  id: string;
  fname: string;
  sname: string;
  percentage: string;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoveService {

  constructor(private http: HttpClient) { }

  calculate(name1: string, name2: string) {
    const request = this.http.get<LoveResult>(
      'https://love-calculator.p.rapidapi.com/getPercentage',
      {
        params: {
          fname: name1,
          sname: name2,
        },
        headers: {
          'X-RapidAPI-Key':
            'aKhRBkgi2xmshSdmi9NEjXJZAcu1p1xWdt7jsn813kxMJ5uxAh',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        },
      }
    ).pipe(
      // permet d'ajouter un id sur le résultat qui sera
      // nécessaire plus tard
      map(res => ({ ...res, id: Date.now().toString() }))
    );
    return request;
  }
}
