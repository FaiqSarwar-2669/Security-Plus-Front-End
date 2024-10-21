import { Injectable } from '@angular/core';
declare const faceapi: any;

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {
  private modelsLoaded: boolean = false;
  constructor() { }

  async loadModels(): Promise<void> {
    if (!this.modelsLoaded) {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/assets/models'),
      ]);
      this.modelsLoaded = true;
    }
  }

  areModelsLoaded(): boolean {
    return this.modelsLoaded;
  }
}
