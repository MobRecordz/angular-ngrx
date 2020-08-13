import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AppEffects } from './store/posts/posts.effects';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { appReducers, metaReducers } from './store'

import { PostsService } from './services/posts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './pages/users/users-page.component'

import { PostsComponent } from './pages/posts/posts-page.component';
import { UsersListComponent } from './components/users-list/users-list.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'

// Material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UsersListComponent,
    UserDetailsComponent,
    PostsListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ AppEffects ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    BrowserAnimationsModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
