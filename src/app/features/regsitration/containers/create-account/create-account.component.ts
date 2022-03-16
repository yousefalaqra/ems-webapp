import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit,OnDestroy {

  form!:FormGroup;
  error=null
  success:any=null

  constructor(private _HttpClient :HttpClient,private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit():void{
    console.log(this.form.value);
    this._HttpClient.post('http://localhost:3000/api/v1/user', this.form.value)
    .subscribe((data:any) => {
        this.success = data.message;
        console.log(data.message);
      },(err)=>{
        this.error=err.error.message;
        console.log(err.error.message);
      });

      setTimeout(()=>{
        this.success=null;
        this.error=null;
      },3500)
  }

  ngOnDestroy(){
    this.form.reset();
  }
}
