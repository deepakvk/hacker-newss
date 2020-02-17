import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private httpClient: HttpClient) { }
	API_BASE = 'https://hacker-news.firebaseio.com/v0';
	
	
  private getNewsId():Observable < any >{
	   return this.httpClient.get(`${this.API_BASE}/newstories.json`);
  }
  
  public getNews(){		
		let array = [];
		
		this.getNewsId().subscribe((data)=>{
		for (let n = 0; n < data.length; ++n) {
			this.httpClient.get(`${this.API_BASE}/item/${data[n]}.json`).subscribe((res)=>{
				if(res!=null){
					array.push(res);
				}
			});
		}
		
    });
		return array;  
  }
  
}
