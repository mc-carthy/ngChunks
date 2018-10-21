import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
                'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
            }),
            'gender': new FormControl('Male', Validators.required),
            'hobbies': new FormArray([new FormControl(null)])
        });
        // this.signupForm.valueChanges.subscribe(
        //     (value) => {
        //         console.log(value)
        //     }
        // );
        // this.signupForm.statusChanges.subscribe(
        //     (status) => {
        //         console.log(status)
        //     }
        // );

        this.signupForm.setValue({
            'userData': {
                'username': 'testUsername',
                'email': 'testEmail@email.com'
            },
            'gender': 'Male',
            'hobbies': ['Cooking']
        });
        this.signupForm.patchValue({
            'userData': {
                'email': 'patched@email.com'
            },
        });
    }

    onAddHobby() {
        const newControl = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(newControl);
    }

    onSubmit() {
        console.log(this.signupForm);
        this.signupForm.reset();
    }

    forbiddenNames(control: FormControl) : {[s: string]: boolean} {
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { 'nameIsForbidden': true };
        }
        return null;
    }

    forbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({ 'emailIsForbidden': true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }

}
