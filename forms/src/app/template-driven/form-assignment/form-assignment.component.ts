import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-assignment',
    templateUrl: './form-assignment.component.html',
    styleUrls: ['./form-assignment.component.css']
})
export class TdFormAssignmentComponent implements OnInit {
    @ViewChild('f') form: NgForm;

    subscriptionTypes = ['Basic', 'Advanced', 'Pro']
    defaultSubscription = 'Advanced';
    formData = {
        email: '',
        subscriptionType: '',
        password: ''
    }
    submitted = false;

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.form.value);
        this.submitted = true;
        this.formData.email = this.form.value.email;
        this.formData.subscriptionType = this.form.value.subscription;
        this.formData.password = this.form.value.password;
        this.form.reset();
    }

}
