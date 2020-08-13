import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post, UserPost, PostComment } from 'src/app/store/posts/posts.reducer';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectSelectedPost, selectPostComments } from 'src/app/store/posts/posts.selectors';
import { fetchSelectedPostCommentsAction, fetchSelectedPostAction, setSelectedPostCommentsAction, setSelectedPostAction } from 'src/app/store/posts/posts.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnDestroy {

  selectedPost: Post
  comments: PostComment[]

  constructor(
    private route: ActivatedRoute,
    private storeUsers$: Store,
    private storePosts$: Store
  ) {
    
    this.storePosts$.dispatch(new fetchSelectedPostAction({ id: Number(this.route.snapshot.paramMap.get('id')) }))
    this.storePosts$.dispatch(new fetchSelectedPostCommentsAction({ id: Number(this.route.snapshot.paramMap.get('id')) }))

    this.storePosts$.pipe(
      select(selectSelectedPost)
    ).subscribe((post: Post) => this.selectedPost = post)

    this.storePosts$.pipe(
      select(selectPostComments)
    ).subscribe((comments: PostComment[]) => this.comments = comments)

  }

  ngOnDestroy(): void {
    this.storePosts$.dispatch(new setSelectedPostAction({ post: null }))
    this.storePosts$.dispatch(new setSelectedPostCommentsAction({ comments: [] }))
  }

}
