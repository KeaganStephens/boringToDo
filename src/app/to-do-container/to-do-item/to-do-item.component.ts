import { Component, Input } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { IndexInfo } from 'src/app/To-do-class-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  constructor(private infoService : InfoService){}

  @Input() currentItemInfo !: IndexInfo

  handleEnterKey(){
    this.currentItemInfo.saved = true;
    console.log("umm")
  }

  ngOnInit(){
    console.log(this.currentItemInfo)
  }

}
