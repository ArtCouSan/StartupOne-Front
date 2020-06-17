import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostEditorComponent } from './posts/post-editor/post-editor.component';
import { PostsListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { SidebarComponent } from './posts/post-list/sidebar/sidebar.component';
import { SidebarRightComponent } from './posts/post-list/sidebar-right/sidebar-right.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { TooltipMenuUserComponent } from './shared/components/tooltip-menu-user/tooltip-menu-user.component';
import { FormsModule }   from '@angular/forms';
import { Base64Component } from './shared/components/base64/base64.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostEditorComponent,
    PostDetailsComponent,
    SidebarComponent,
    SidebarRightComponent,
    TooltipComponent,
    TooltipMenuUserComponent,
    Base64Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Base64Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
