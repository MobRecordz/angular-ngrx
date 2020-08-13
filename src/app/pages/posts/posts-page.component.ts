import { Component, OnInit } from '@angular/core';
import { Post, PostsState } from 'src/app/store/posts/posts.reducer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectPostsList, selectPostsListWithUsers } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsComponent implements OnInit {

  public postsList$: Observable<Post[]> = this.storeUsers$.pipe(
    select(selectPostsListWithUsers),
    // tap(v => console.log('USER-PAGE', v))
  )

  constructor(private storeUsers$: Store<PostsState>) {}

  ngOnInit(): void {
  }

}
