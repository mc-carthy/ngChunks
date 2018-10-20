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

    onSubmit(form: NgForm) {
        console.log(form);
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
