import { Component, OnInit } from '@angular/core';
import { PostSaveDTO, FileSaveDTO } from 'src/app/shared/dto/post-save.dto';
import { ApiService } from 'src/app/shared/service/api.service';
import { Base64Component } from 'src/app/shared/components/base64/base64.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  get postEmpty(): PostSaveDTO {
    return {
      title: '',
      description: '',
      files: []
    };
  }

  get postFileEmpty(): FileSaveDTO {
    return {
      data: '',
      name: '',
      position: 1,
      principal: true
    }
  }


  // TODO: Remover apos arrumar galeria
  file: File = null;

  public loader: boolean = false;
  public snackbar: boolean = false;
  public post: PostSaveDTO = this.postEmpty;
  public fileGeneric: FileSaveDTO = this.postFileEmpty;

  constructor(private apiPost: ApiService, private base64Service: Base64Component, private router: Router) { }

  ngOnInit() {
  }

  changeFile($event) {

    this.post.files = [];

    this.base64Service.getData($event.target).subscribe({
      next: result => {
        this.fileGeneric = {
          data: result,
          name: this.base64Service.getName($event.target).toString(),
          position: 1,
          principal: true
        }
        this.post.files.push(this.fileGeneric);
      }
    });
  }

  savePost() {
    this.loader = true;
    this.apiPost.savePost(this.post).subscribe({
      next: result => {
        this.snackbar = true;
      }
    })
  }

  confirmSnack() {
    this.router.navigate(['post/add/'])
    .then(() => {
      window.location.reload();
    });
  }

}
