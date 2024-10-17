import { Component, OnInit } from '@angular/core';
import { Service } from '../services';
import { FormContent } from '../models/model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  formContent: FormContent[] = []
  error: boolean[] = []
  selectedImg: any = "../../../assets/default.png"
  defaultImagIntoFile: any
  ImageFile: any

  constructor(
    private services: Service,
    private routes: Router
  ) {
  }

  ngOnInit() {
    this.services.getForm().then((res: any) => {
      this.formContent = JSON.parse(res.data[0].form_content)
      this.error = new Array(this.formContent.length).fill(false);
      console.log(this.formContent)
    }).catch((err: any) => {
      console.log(err)
    })
    this.convertImageToFile(this.selectedImg)
  }


  async convertImageToFile(imageUrl: string) {
    return fetch(imageUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const fileName = 'image.jpeg';
        const file = new File([blob], fileName, { type: 'image/jpeg' });
        this.ImageFile = file
        return file;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
      });
  }



  onInputChange(event: any) {
    console.log('Input value changed to:', event.target.value);
  }

  onCheckboxChange(event: any, item: FormContent) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (!item.options) {
      item.options = [];
    }
    if (isChecked) {
      item.options.push(value);
    } else {
      const index = item.options.indexOf(value);
      if (index !== -1) {
        item.options.splice(index, 1);
      }
    }
  }

  onRadioChange(event: any, item: FormContent) {
    const value = event;
    item.data = value;

  }


  async takePicture(item: FormContent) {
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
      item.data = this.ImageFile
      console.log(this.ImageFile);
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


  UploadForm() {
    let hasError = false;
    for (let i = 0; i < this.formContent.length; i++) {
      if (this.formContent[i].type === 'Input' && this.formContent[i].required === 'Required') {
        if (!this.formContent[i].data || this.formContent[i].data?.trim() === '') {
          this.error[i] = true;
          hasError = true;
        } else {
          this.error[i] = false;
        }
      }
    }
    if (!hasError) {
      let foundimage = false;
      for (let i = 0; i < this.formContent.length; i++) {
        if (this.formContent[i].type === 'Image') {
          foundimage = true;
        }
      }
      if (foundimage) {
        const formdata = new FormData()
        formdata.append('image', this.ImageFile)
        console.log(formdata)
        this.services.uploadImage(formdata).then((res: any) => {
          this.formContent.forEach(item => {
            if (item.type === 'Image') {
              item.data = res.data;
            }
          });
          console.log(res)
          this.submit()
        }).catch((err: any) => {
          console.log(err)
        })
      } else {
        this.submit()
      }
    }
  }

  submit() {
    const formdata = new FormData()
    const id = localStorage.getItem("FormID")
    formdata.append('id', id!)
    formdata.append('Form', JSON.stringify(this.formContent))
    this.services.uploadApplication(formdata).then((res: any) => {
      if (res.message) {
        Swal.fire({
          icon: "success",
          title: res.message,
        });
        this.routes.navigate(['/companies'])
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
}



