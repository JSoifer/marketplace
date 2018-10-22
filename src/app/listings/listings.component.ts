import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  currentTime = new Date();


  constructor(private router: Router){}

  posts: Post[] = [
    new Post('Thing for Sale', 'Portland, OR', 1),
    new Post('Something for Sale', 'Portland, OR', 2),
    new Post('Nothing for Sale', 'Portland, OR', 3)
  ];

public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
