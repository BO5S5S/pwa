import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie:any;
  constructor(private service:MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
    
      let id = params['imdbID'];
      this.service.getMovieDetail(id).subscribe(res=>{
        console.log(res);
        this.movie= res;
      })
    })
  }

}
