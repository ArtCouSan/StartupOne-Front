import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts/post-list/post-list.component';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "post/add", component: PostEditorComponent },
  { path: "post/details", component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
