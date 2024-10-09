import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';
declare const faceapi: any;

@Component({
  selector: 'app-register-guards',
  templateUrl: './register-guards.component.html',
  styleUrls: ['./register-guards.component.scss']
})
export class RegisterGuardsComponent implements OnInit {

  video: any
  descriptorArray:any
  data = {
    fname: '',
    lname: '',
    fathername: '',
    dob: '',
    gender: '',
    email: '',
    number: '',
    enumber: '',
    address: '',
    city: '',
    qualify: '',
    hobbies: '',
    pcode: '',
    religion: '',
    category: '',
  }
  constructor(
    private services: Service
  ) { }

  ngOnInit() {
    this.startVideo();
  }

  startVideo() {
    this.video = document.getElementById('video') as HTMLVideoElement;

    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => {
        this.video.srcObject = stream;
        this.addVideoPlayListener(this.video);
      })
      .catch(err => {
        console.error('Error accessing the camera: ', err);
      });
  }

  addVideoPlayListener(video: HTMLVideoElement): void {
    video.addEventListener('play', () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      this.video.parentNode.insertBefore(canvas, video.nextSibling);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 50);
    });
  }

  async saveCredentialsBtn(): Promise<void> {

    const detections = await faceapi.detectSingleFace(this.video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor();
    if (!detections) {
      Swal.fire({
        icon: 'error',
        title: 'No face detected. Please make sure your face is clearly visible.'
      });
    }else{
      this.descriptorArray = Array.from(detections.descriptor);
      console.log(this.descriptorArray);
    }
  }

  async submit() {
    await this.saveCredentialsBtn();
    const postalPattern = /^[0-9]+$/;
    const numberPattern = /^[0-9]{11}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.data.fname.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter First Name'
      });
    } else if (this.data.lname.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Last Name'
      });
    } else if (this.data.fathername.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Father Name'
      });
    } else if (this.data.dob.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Date Of Birth'
      });
    } else if (this.data.gender.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Gender'
      });
    } else if (this.data.email.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Email'
      });
    } else if (!this.data.email.match(emailPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Enter Valid Email'
      });
    } else if (this.data.number.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Contact Number'
      });
    } else if (!this.data.number.match(numberPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Contact number must be exactly 11 digits'
      });
    } else if (this.data.enumber.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Emergency Number'
      });
    } else if (!this.data.enumber.match(numberPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Emergency number must be exactly 11 digits'
      });
    } else if (this.data.address.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Addres'
      });
    } else if (this.data.city.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter City'
      });
    } else if (this.data.qualify.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Qualification'
      });
    } else if (this.data.hobbies.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Hobbies'
      });
    } else if (this.data.pcode.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Postal Code'
      });
    } else if (!this.data.pcode.match(postalPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Postal code must contain only numbers'
      });
    } else if (this.data.religion.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Religion'
      });
    } else if (this.data.category.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Enter Category'
      });
    }else if(this.descriptorArray.trim === ''){
      Swal.fire({
        icon: 'error',
        title: 'Verify Identity'
      });
    } else {
      const formdata = new FormData()
      formdata.append('First_Name', this.data.fname)
      formdata.append('Last_Name', this.data.lname)
      formdata.append('Father_Name', this.data.fathername)
      formdata.append('DOB', this.data.dob)
      formdata.append('Gender', this.data.gender)
      formdata.append('Email', this.data.email)
      formdata.append('Mobile_Number', this.data.number)
      formdata.append('Emergency_Contact', this.data.enumber)
      formdata.append('Address', this.data.address)
      formdata.append('City', this.data.city)
      formdata.append('Qualification', this.data.qualify)
      formdata.append('Hobbies', this.data.hobbies)
      formdata.append('Postal_Code', this.data.pcode)
      formdata.append('Religion', this.data.religion)
      formdata.append('Category', this.data.category)
      formdata.append('identity', this.descriptorArray)
      console.log(formdata)
      this.services.registerGuard(formdata).then((res: any) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: res.message
        });
      }).catch((err: any) => {
        Swal.fire({
          icon: 'error',
          title: err.error.error
        });
      })
    }
  }
}
