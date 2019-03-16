import { Injectable } from '@angular/core';
import { Feedback} from './feedback/Feedback';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private employeeUrl = 'http://localhost:7070';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}
  create(feedback : Feedback){
    return this.http.get(this.employeeUrl+'/saveFeedback');
}
}
