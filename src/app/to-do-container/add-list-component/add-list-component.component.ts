import { Component } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { IndexInfo } from 'src/app/To-do-class-item';

@Component({
  selector: 'app-add-list-component',
  templateUrl: './add-list-component.component.html',
  styleUrls: ['./add-list-component.component.css']
})
export class AddListComponentComponent {
  constructor(private infoService : InfoService){}

  index = 0

  addToList(){
    this.infoService.list.push(new IndexInfo(this.index,``))
    this.index++
  }
}
