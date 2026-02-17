import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class UserInput {
   @Output() user = new EventEmitter<string>();

   inputValue: string = '';

   sendVal () {
     this.user.emit(this.inputValue);
   }
}
