import { Component, Input, Renderer2 } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { IndexInfo } from 'src/app/To-do-class-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  constructor(
    private infoService : InfoService,
    private renderer: Renderer2
  ){}

  @Input() currentItemInfo !: IndexInfo

  list = this.infoService.list
  handleEnterKey(){
    this.currentItemInfo.saved = true;
    console.log("umm")
  }

  ngOnInit(){
    console.log(this.currentItemInfo.index)
  }

  removeTodo_item() {
    const itemToRemove = this.currentItemInfo;

    if (itemToRemove) {
        const index = this.list.indexOf(itemToRemove);
        
        if (index !== -1) {
            this.list.splice(index, 1);
            console.log("Item removed successfully.");
        } else {
            console.error("Item not found in list.");
        }
    } else {
        console.error("No item specified for removal.");
    }
}

ngForFinished() {
  console.log("testing")
  let myInputRef = `#myInputRef${this.currentItemInfo.index}`
  this.renderer.selectRootElement(myInputRef).focus()
}

ngAfterViewInit() {
  this.ngForFinished(); 
}

}
