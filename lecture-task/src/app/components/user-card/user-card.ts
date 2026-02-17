import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInput} from '../user-input/input';

@Component({
  selector: 'app-user-card',
  imports: [
    UserInput
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  protected cnt : number = 0;
  inputVal : string = "";

  ngOnInit() {
    alert("Welcome to This page. Please enter your name in user-input field")
  }

  handleVal(str : string) {
    this.inputVal = str;
  }

  addCnt () {
    this.cnt++;
  }
}
