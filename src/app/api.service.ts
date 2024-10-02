import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoveResult } from './love.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = 'http://localhost:3000/results';

  constructor(
    private http: HttpClient,
  ) { }

  addResult(result: LoveResult) {
    return this.http.post<LoveResult>(this.url, result);
  }

  getOne(id: string) {
    return this.http.get<LoveResult>(`${this.url}/${id}`);
  }

  getAllResults() {
    return this.http.get<LoveResult[]>(this.url);
  }

  deleteResult(result: LoveResult) {
    return this.http.delete<LoveResult>(`${this.url}/${result.id}`);
  }
}
