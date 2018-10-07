import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text = "Hello Parent!!"
  object = {
    text: "Hello Parent!!"
  }

  constructor(public navCtrl: NavController) {

  }

  changeText() {
    this.text = "Changed Parent string object !!"
  }


  changeObject() {
    this.object = {
      text: "Changed Parent Object !!"
    }
  }

  // changeObject() {
  //   this.object.text = "Changed Parent Object !!"
  // }
}
