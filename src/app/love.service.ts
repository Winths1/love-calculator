import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, retry, tap, timeout } from 'rxjs';
import { ApiService } from './api.service';

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

  history: LoveResult[] = [];

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

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
      timeout(1000),
      retry(3),
      map(res => ({ ...res, id: Date.now().toString() })),
      // tap(res => this.history.push(res))
      mergeMap(res => this.api.addResult(res))
    );

    return request;
  }

  get(id: string) {
    return this.api.getOne(id);
  }

  getAll() {
    return this.api.getAllResults();
  }

  remove(result: LoveResult) {
    return this.api.deleteResult(result);
  }


  clear() {
    return this.api.getAllResults().pipe(
      mergeMap(res => forkJoin(res.map(r => this.api.deleteResult(r)))
    ));
  }
}
