import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-register',
  templateUrl: './profile-register.component.html',
  styleUrls: ['./profile-register.component.scss']
})
export class ProfileRegisterComponent implements OnInit {

  form : string = "";

  constructor(
    private fb: FormBuilder
  ) { }

  registerForm = this.fb.group ({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.form = this.registerForm.value;

  }
}
