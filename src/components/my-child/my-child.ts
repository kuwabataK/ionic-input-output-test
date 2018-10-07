import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: 'my-child.html'
})
export class MyChildComponent {

  @Input() childText = "Hello Child!!"
  @Input() childObject = {
    text: "Hello Child Object!!"
  }

  constructor() {
  }

  changeText() {
    this.childText = "Changed Child string object!!"
  }

  changeObject() {
    this.childObject = {
      text: "Changed Child Object!!"
    }
  }

  // changeObject() {
  //   this.childObject.text = "Changed Child Object!!"
    
  // }

}
