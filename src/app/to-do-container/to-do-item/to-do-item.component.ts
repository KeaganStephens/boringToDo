import { Component } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  constructor(private infoService : InfoService){}

  info = this.infoService.list
  
  ngOnInit(){
    console.log(this.info[0])
  }

}
