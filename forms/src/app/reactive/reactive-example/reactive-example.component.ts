import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-example',
    templateUrl: './reactive-example.component.html',
    styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {

    genders = ['Male', 'Female'];

    signupForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            'username': new FormControl('test username', Validators.required),
            'email': new FormControl('test email', [Validators.required, Validators.email]),
            'gender': new FormControl('Male', Validators.required)
        });
    }

    onSubmit() {
        console.log(this.signupForm);
    }

}
