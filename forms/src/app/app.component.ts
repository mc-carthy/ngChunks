import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;

    defaultSecret: string = 'pet';
    answer: string = "";
    genders = ['male', 'female']
    user = {
        username: '',
        email: '',
        secretQuestion: '',
        secretAnswer: '',
        gender: ''
    };
    submitted = false;

    // onSubmit(form: NgForm) {
    onSubmit() {
        console.log(this.signupForm);
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secretData.secret;
        this.user.secretAnswer = this.signupForm.value.secretData.secretAnswer;
        this.user.gender = this.signupForm.value.gender;
        this.submitted = true;
        this.signupForm.reset();
    }

    onSuggestUsername() {
        const suggestedName = "Superuser";

        // The below method will set all of the form's values
        // Patch value below, will only update the specified elements
        // this.signupForm.setValue({
        //     "user-data": {
        //         username: suggestedName,
        //         email: ''
        //     },
        //     "secret-data": {
        //         secret: 'pet',
        //         secretAnswer: ''
        //     },
        //     gender: 'male'
        // });

        this.signupForm.form.patchValue({
            'user-data': {
                username: suggestedName
            }
        });
    }
}
