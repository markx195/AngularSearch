import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Account} from '../core/model/account.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Input() columns: any[] = [];
  @Output() clsortByAge = new EventEmitter();
  @Input() account: any[] = [];
  @Input() itemsPerPage = 10;
  @Input() page = 1;
  @Output() clickEdit = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  @Output() mySearch = new EventEmitter();
  @Output() clickAdd = new EventEmitter();
  @Input() totalItems: number | undefined;
  @Input() loading!: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  sortByAge() {
    this.clsortByAge.emit();
  }
  // tslint:disable-next-line:typedef
  openEdit(acc: Account) {
    this.clickEdit.emit(acc);
  }

  // tslint:disable-next-line:typedef
  delete(acc: Account) {
    this.clickDelete.emit(acc);
  }
}
