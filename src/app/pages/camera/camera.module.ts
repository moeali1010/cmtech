import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { Camera1Component } from './camera1/camera1.component';
import {WebcamModule} from 'ngx-webcam';
import { Camera2Component } from './camera2/camera2.component';


import {FaceDetectModule} from '@haseeamarathunga/face-detect';
import {NgOpenCVModule, OpenCVOptions} from 'ng-open-cv';
import { Camera3Component } from './camera3/camera3.component';


@NgModule({
  declarations: [
    Camera1Component,
    Camera2Component,
    Camera3Component
  ],
  imports: [
    CommonModule,
    CameraRoutingModule,
    WebcamModule,
    NgOpenCVModule,

    FaceDetectModule,
  ]
})
export class CameraModule { }
