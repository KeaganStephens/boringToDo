import { Injectable } from '@angular/core';
import { IndexInfo } from './To-do-class-item';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  list : IndexInfo[] = []
  constructor() { }
}
