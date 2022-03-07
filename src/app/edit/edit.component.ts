import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../core/model/account.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  myForm!: FormGroup;
  @Output() clickSubmit = new EventEmitter();
  @Output() clickCloseForm = new EventEmitter();
  @Input() isOpenAddAccount: boolean | undefined;
  @Input() isOpenEditAccount: boolean | undefined;
  @Input() selectedAccount!: Account;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      _id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      gender: '',
      address: ['', Validators.required],
      employer: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$'
          ),
        ],
      ],
      city: [''],
      state: [''],
    });

    if (this.isOpenEditAccount === true) {
      this.myForm.patchValue({
        _id: this.selectedAccount._id,
        firstname: this.selectedAccount.firstname,
        lastname: this.selectedAccount.lastname,
        age: this.selectedAccount.age,
        gender: this.selectedAccount.gender,
        address: this.selectedAccount.address,
        employer: this.selectedAccount.employer,
        email: this.selectedAccount.email,
        city: this.selectedAccount.email,
        state: this.selectedAccount.state,
      });
    }
  }
  // tslint:disable-next-line:typedef
  closeForm() {
    this.myForm.reset();
    this.clickCloseForm.emit(false);
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.myForm.valid) {
      this.clickSubmit.emit(this.myForm.value);
    } else {
      // tslint:disable-next-line:forin
      for (const i in this.myForm.controls) {
        this.myForm.controls[i].markAsTouched();
      }
    }

    // this.clickSubmit.emit(this.myForm.value);
  }
}

