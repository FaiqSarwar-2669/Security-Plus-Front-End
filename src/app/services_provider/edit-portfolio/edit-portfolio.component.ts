import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})
export class EditPortfolioComponent {

  htmlcontent:any;
  selectedImg: any = '../../../assets/default.png';
  selectedImg1: any = '../../../assets/default banner.png';
  ImageFile:any;
  ImageFile1:any;

  config: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: 'times-new-roman',
      defaultFontSize: '3',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      [
        'insertImage',
        'insertVideo',
      ]
    ]
   
  };


  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.selectedImg = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.ImageFile = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.ImageFile) {
      console.log(this.ImageFile);
    }
  }
  async takePicture1() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
      allowEditing: true,
      quality: 90
    });

    this.selectedImg1 = `data:image/jpeg;base64,${image.base64String}`;
    const blobData = this.base64ToBlob(image.base64String, 'image/jpeg');
    this.ImageFile1 = new File([blobData], 'image.jpeg', { type: 'image/jpeg' });
    if (this.ImageFile1) {
      console.log(this.ImageFile1);
    }
  }
  base64ToBlob(base64: any, type: string) {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blobData = new Blob(byteArrays, { type });
    return blobData;
  }
}
