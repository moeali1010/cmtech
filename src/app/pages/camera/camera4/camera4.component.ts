import { Component, OnInit } from '@angular/core';
declare var myExtObject: any;
@Component({
  selector: 'app-camera4',
  templateUrl: './camera4.component.html',
  styleUrls: ['./camera4.component.scss']
})
export class Camera4Component implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  callFunction1() {
    myExtObject.enrollNewUser();
  }

}
