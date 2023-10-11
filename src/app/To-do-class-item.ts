export class IndexInfo {
    index: number;
    additionalInfo: string;
    saved: boolean;
  
    constructor(index: number, additionalInfo: string,saved : boolean = false) {
      this.index = index;
      this.additionalInfo = additionalInfo;
      this.saved = saved;
    }
}  