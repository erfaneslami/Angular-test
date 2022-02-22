import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string;

  checkUsername() {
    return this.userName !== '' ? true : false;
  }

  onEmptyUsername() {
    this.userName = '';
  }
}
