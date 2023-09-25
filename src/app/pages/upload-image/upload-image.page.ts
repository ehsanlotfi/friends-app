import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.page.html',
  styleUrls: ['./upload-image.page.scss'],
})
export class UploadImagePage implements OnInit {
  fileName: string;
  fileSize: string;
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }
  uploadImageToFirebase(ev: any) {
    const file = ev.target.file;
    let fileName = file[0];
    if (fileName.type.split('/')[0] !== "image") {
      console.error("File is Not an Image");
      return;
    }
    const path = `loginUploads/${new Date().getTime()}_${fileName.name}`;

  }
}
