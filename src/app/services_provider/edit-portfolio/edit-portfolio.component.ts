import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Service } from 'src/app/services/provider_services';
import { portfolio } from 'src/app/models/model';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})
export class EditPortfolioComponent {

  credentials: any
  htmlcontent: any;
  selectedImg: any = '../../../assets/default.png';
  selectedImg1: any = '../../../assets/default banner.png';
  ImageFile: File | null = null;
  ImageFile1: File | null = null;
  constructor(
    private services: Service,
    private fb: FormBuilder,
  ) {
    this._formGroup();
    this.services.getAndUpdatePortfolio().then((res: any) => {
      if (res && res.data && res.data.length > 0) {
        const data = res.data[0]; 
        this.selectedImg = data.logo ? data.logo : '../../../assets/default.png';
        this.selectedImg1 = data.Banner_image ? data.Banner_image : '../../../assets/default banner.png';
        this.htmlcontent = data.portfolio ? data.portfolio : '<h1>No content available</h1>';
        this.logoimage.setValue(this.selectedImg)
        this.Banner.setValue(this.selectedImg1)
        this.htmlcon.setValue(this.htmlcontent)
      }
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
    })
  }

  public async _formGroup() {
    this.credentials = this.fb.group({
      logo: ['', [Validators.required]],
      Banner_image: ['', [Validators.required]],
      portfolio: ['', [Validators.required]]
    });
  }

  get logoimage() {
    return this.credentials.get('logo')
  }
  get Banner() {
    return this.credentials.get('Banner_image')
  }
  get htmlcon() {
    return this.credentials.get('portfolio')
  }






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
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
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
      this.logoimage.setValue(this.ImageFile)
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
      this.Banner.setValue(this.ImageFile1)
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


  addOrUpdatePortfolio() {
    this.htmlcon.setValue(this.htmlcontent)
    const formdata = new FormData();
    formdata.append('logo', this.logoimage.value);
    formdata.append('Banner_image', this.Banner.value);
    formdata.append('portfolio', this.htmlcon.value);
    console.log(formdata)

    this.services.addAndUpdatePortfolio(formdata).then((res: any) => {
      if (res && res.message) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
      }
      console.log(res);
    }).catch((err: any) => {
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        })
      }
      console.log(err);
    })
  }
}
