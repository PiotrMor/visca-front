import { Component } from '@angular/core';
import { HttpService } from './http.service';
import 'hammerjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  constructor(private httpService: HttpService) {

  }
  title = 'visca-front';
  address: number = 1
  panSpeed = 10
  tiltSpeed = 10



  sendCommand(command: string) {
    console.log(command)
    if (command == "ADDRESS") {
      this.httpService.sendCommand(command + " " + this.address).subscribe()
    } else if (command == "TELEZOOM" || command == "WIDEZOOM" || command == "HOME") {
      this.httpService.sendCommand(command + " " + this.address).subscribe()
    } else {
      this.httpService.sendCommand(command + " " + this.address + " " + this.panSpeed + " " + this.tiltSpeed).subscribe()
    }
  }

  
}
