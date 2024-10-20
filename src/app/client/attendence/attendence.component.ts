import { Component, OnInit } from '@angular/core';
declare const faceapi: any;
import { Service } from 'src/app/services/client_services';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

  video: any
  numberofattendence: any = 0;
  contractcompanies: any
  faceidentifications: any
  displayattendence: any
  matchedIds: Number[] = [];
  constructor(private services: Service) { }

  ngOnInit(): void {
    this.getGuardsAttendence()
    this.getAtendence()
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/assets/models')
    ]).then(() => this.startVideo());
    this.startVideo()
    this.checkAndCallFunctionOnceADay();
  }

  getGuardsAttendence() {
    this.services.GuardsForAttendance().then((res: any) => {
      this.faceidentifications = res.data
      console.log(res.data)
    }).catch((err: any) => {
      console.log(err)
    })
  }

  checkAndCallFunctionOnceADay() {
    const lastCalledDate = localStorage.getItem('lastCalledDate');
    const today = new Date().toDateString();

    if (lastCalledDate !== today) {
      setTimeout(() => this.callRandomFunction(5), 10000);
      localStorage.setItem('lastCalledDate', today);
    }
  }

  getAtendence() {
    const id = localStorage.getItem('UserID')
    this.services.getAttendance(id).then((res: any) => {
      this.displayattendence = res.data
    }).catch((err: any) => {
      console.log(err)
    })
  }

  callRandomFunction(timesLeft: any) {
    if (timesLeft > 0) {
      console.log(`Function is called. Remaining times: ${timesLeft}`);
      const randomDelay = Math.floor(Math.random() * 30000);
      console.log(`Next call in ${randomDelay / 1000} seconds`);
      this.markAttendanceBtn();
      setTimeout(() => {
        this.callRandomFunction(timesLeft - 1);
      }, randomDelay);
    } else {
      console.log("Function has been called 5 times.");
    }
  }


  submitAttenderce() {
    this.numberofattendence = this.numberofattendence + 1
    const companyid = localStorage.getItem('UserID');
    const formdata = new FormData();
    if (companyid) {
      formdata.append('id', companyid);
    }
    this.matchedIds.forEach((data: any) => {
      formdata.append('users[]', data);
    })
    formdata.append('beep', this.numberofattendence)
    console.log("form data" + formdata)
    this.services.markAttendance(formdata).then((res: any) => {
      this.matchedIds = []
      this.getAtendence()
      console.log("Response:", res);
    }).catch((err: any) => {
      console.log(err)
    })

  }



  startVideo(): void {
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

  async markAttendanceBtn(): Promise<void> {
    const video = document.getElementById('video') as HTMLVideoElement;

    // Detect all faces instead of a single face
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    if (!detections.length) {
      Swal.fire({
        'icon': 'error',
        'text': 'No faces detected. Please make sure your faces are clearly visible.'
      })
      return;
    }

    const storedData = this.faceidentifications;
    const labeledDescriptors = storedData.map((guard: any) => {
      return new faceapi.LabeledFaceDescriptors(
        guard.name,
        [new Float32Array(guard.identity.split(',').map(Number))]
      );
    });

    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
    // Loop through all detected faces
    detections.forEach((detection: any) => {
      const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
      // Check for a recognized match
      if (bestMatch.label !== 'unknown') {
        const matchedUser = storedData.find((user: any) => user.name === bestMatch.label);
        if (matchedUser) {
          this.matchedIds.push(matchedUser.id);
        }
      }
    });

    if (this.matchedIds.length > 0) {
      this.submitAttenderce()
    } else {
      Swal.fire({
        'icon': 'error',
        'text': 'No recognized faces found.'
      })
    }
  }

}
