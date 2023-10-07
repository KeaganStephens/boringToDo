import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent {

  constructor( private infoService : InfoService){}

  list = this.infoService.list
}
