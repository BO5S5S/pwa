import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies:any[];
  constructor(private service : MoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res=>{
      let q = res['q'];
      
this.service.serchmovies(q).subscribe((res)=>{
  this.movies=(res['Search'])
  });
    });
  }

}
