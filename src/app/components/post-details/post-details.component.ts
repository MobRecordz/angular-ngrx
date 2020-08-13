import { Component, OnInit } from '@angular/core';
import { Post, UserPost, PostComment } from 'src/app/store/posts/posts.reducer';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectUserPostById, selectPostComments } from 'src/app/store/posts/posts.selectors';
import { fetchSelectedPostCommentsAction } from 'src/app/store/posts/posts.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  selectedPost: UserPost
  comments: PostComment[]

  constructor(
    private route: ActivatedRoute,
    private storeUsers$: Store,
    private storePosts$: Store
  ) {

    this.storePosts$.pipe(
      select(selectUserPostById, { id: Number(this.route.snapshot.paramMap.get('id')) })
    ).subscribe((post: UserPost) => this.selectedPost = post)

    this.storePosts$.pipe(
      select(selectPostComments)
    ).subscribe((comments: PostComment[]) => this.comments = comments)

    this.storePosts$.dispatch(new fetchSelectedPostCommentsAction({ id: Number(this.route.snapshot.paramMap.get('id')) }))
  }

  // ngOnDestroy(): void {
  //   this.storePosts$.dispatch(new setSelectedUserPostsListAction({ posts: [] }))
  // }

}
