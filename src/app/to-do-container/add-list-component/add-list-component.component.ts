import { Component } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-add-list-component',
  templateUrl: './add-list-component.component.html',
  styleUrls: ['./add-list-component.component.css']
})
export class AddListComponentComponent {
  constructor(private infoService : InfoService){}

  addToList(){
    this.infoService.list.push("3")
  }
}
