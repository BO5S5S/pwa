import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl:string= 'http://www.omdbapi.com/?apikey=1f063d46';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  serchmovies(searchTerm:string): Observable<any>{

 return this.http.get(baseUrl,{params:{s:searchTerm}})
  }
  getMovieDetail(imdbID: string): Observable<any>{
    return this.http.get(baseUrl,{params:{i:imdbID}})
  }
}
