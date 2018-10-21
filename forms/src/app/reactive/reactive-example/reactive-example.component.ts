import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
            'userData': new FormGroup({
                'username': new FormControl(null, Validators.required),
                'email': new FormControl(null, [Validators.required, Validators.email])
            }),
            'gender': new FormControl('Male', Validators.required),
            'hobbies': new FormArray([])
        });
    }

    onAddHobby() {
        const newControl = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(newControl);
    }

    onSubmit() {
        console.log(this.signupForm);
    }

}
