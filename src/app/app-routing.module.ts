import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { UsersComponent } from './pages/users/users-page.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'
import { PostsComponent } from './pages/posts/posts-page.component'
import { PostDetailsComponent } from './components/post-details/post-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
