import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input()
  postsList$

  constructor() { }

  ngOnInit(): void {
  }

}
