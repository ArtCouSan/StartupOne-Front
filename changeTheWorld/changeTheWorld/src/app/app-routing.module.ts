import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/post-list/post-list.component';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsListsYoursComponent } from './posts/posts-lists-yours/posts-lists-yours.component';

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "post/add", component: PostEditorComponent },
  { path: "post/details", component: PostDetailsComponent },
  { path: "post/list/yours", component: PostsListsYoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
