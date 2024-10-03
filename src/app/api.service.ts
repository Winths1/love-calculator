import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoveResult } from './love.service';

@Injectable()
export class ApiService {
//   private readonly localApiAndroid = 'http://10.0.2.2:3000'
//   private readonly localApiWeb = 'http://localhost:3000'
//   private readonly localApiServeo = 'https://757e92fda46e5957037a38ddc942aa7d.serveo.net'

  private readonly url = `https://757e92fda46e5957037a38ddc942aa7d.serveo.net/results`;

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
