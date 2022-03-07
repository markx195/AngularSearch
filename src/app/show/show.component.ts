import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from '../core/model/account.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  @Input() account: any[] = [];
  @Output() clickEdit = new EventEmitter();
  @Output() clickDelete = new EventEmitter();
  @Output() clickAdd = new EventEmitter();
  @Input() searchName = '';
  @Input() searchAdd = '';
  @Input() searchGen = '';
  @Input() searchEmail = '';
  @Output() mySearch = new EventEmitter();
  @Input() itemsPerPage = 10;
  @Input() totalItems: number | undefined;
  @Input() page = 1;
  @Input() columns: any[] = [];
  @Output() clsortByAge = new EventEmitter();

  @Input() loading!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openEdit(acc: Account) {
    this.clickEdit.emit(acc);
  }

  // tslint:disable-next-line:typedef
  delete(acc: Account) {
    this.clickDelete.emit(acc);
  }

  // tslint:disable-next-line:typedef
  openAddAccount() {
    this.clickAdd.emit();
  }

  // tslint:disable-next-line:typedef
  search() {
    this.mySearch.emit([this.searchName, this.searchAdd, this.searchEmail, this.searchGen]);
  }

  // tslint:disable-next-line:typedef
  sortByAge() {
    this.clsortByAge.emit();
  }
}

