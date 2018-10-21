import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
            'username': new FormControl('test username'),
            'email': new FormControl('test email'),
            'gender': new FormControl('Male')
        });
    }

}
