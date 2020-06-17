import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getData(inputFile: any): Observable<string> {
    var file: File = inputFile.files[0];
    var reader: FileReader = new FileReader();
    return new Observable<string>(observer => {
      reader.onloadend = e => {
        observer.next(reader.result.toString());
        observer.complete();
      };
      reader.readAsDataURL(file);
    })
  };

  getName(inputFile: any) {
    var file: File = inputFile.files[0];
    return file.name;
  }

}
