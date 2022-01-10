import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url=environment.apiUrl;
  private header:any=new HttpHeaders().set('Content-type','application/json').set("Authorization", "Bearer `c5ad71aae5aa7a0278c7f9bae85bcfb2`");
  constructor(private http:HttpClient) { }
  
  getMeteoOggi(cerca:string):Observable<any>{
    return this.http.get(this.url+"&q="+cerca,this.header).pipe(
      map((resp:any)=>
       [resp]
      )
    )
  }
}
