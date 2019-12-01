import { Component } from '@angular/core';
import { HttpService } from './http.service';

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

  sendCommand(command: string) {
    console.log(command)
    this.httpService.sendCommand(command).subscribe()
  }

  
}
