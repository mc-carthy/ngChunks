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
    forbiddenUsernames = ['BadUserName1', 'BadUserName2'];

    constructor() { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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

    forbiddenNames(control: FormControl) : {[s: string]: boolean} {
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { 'nameIsForbidden': true };
        }
        return null;
    }

}
