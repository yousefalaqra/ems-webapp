import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit,OnDestroy {

  form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private _HttpClient :HttpClient) { }

  ngOnInit() {
  }
  onSubmit():void{
    console.log(this.form.value);
    this._HttpClient.post('http://localhost:3000/api/v1/user', this.form.value)
    .subscribe((data) => {
        console.log(data);
      });
    this.form.reset();
  }

  ngOnDestroy(){

  }
}
