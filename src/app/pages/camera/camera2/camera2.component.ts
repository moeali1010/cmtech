import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-camera2',
  templateUrl: './camera2.component.html',
  styleUrls: ['./camera2.component.scss']
})
export class Camera2Component implements OnInit {

  private trigger: Subject<void> = new Subject<void>();
  fullFace:any;
  face:any;
  eyeRight:any;
  eyeLeft:any;

  constructor() { }

  ngOnInit(): void {
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  viewChange(event :any) {
    //console.log('event ' , event);
    console.log('event.eyeRight ' , event.eyeRight);
    // this.fullFace = event.fullImage;
    // this.face = event.face;
    // this.eyeRight = event.eyeRight;
    // this.eyeLeft = event.eyeLeft;
  }

}
