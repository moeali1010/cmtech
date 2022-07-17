import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Camera1Component } from './camera1/camera1.component';
import { Camera2Component } from './camera2/camera2.component';
const routes: Routes = [
  {
    path: 'cam1',
    component: Camera1Component
  },
   {
    path: 'cam2',
    component: Camera2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule { }
