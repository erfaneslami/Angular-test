import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string = '';
  showPass = false;
  logs = [];

  onEmptyUsername() {
    this.userName = '';
  }

  displayPass() {
    this.showPass = !this.showPass;
    this.logs.push(new Date());
  }
}
