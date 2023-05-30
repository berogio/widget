import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bunus } from '../interfaces/bunus.interface';

@Injectable({
  providedIn: 'root',
})
export class BonusDataService {
  // ეს API ურლ არაა ეს endpoint ია api URL არის აპის მიმსართი
  private ApiUrl = 'http://localhost:3000/api/bonusdata';

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBonus(): Observable<Bunus[]> {
    return this.http.get<Bunus[]>(`${this.API_URL}/api/bonusdata`);
  }
}
