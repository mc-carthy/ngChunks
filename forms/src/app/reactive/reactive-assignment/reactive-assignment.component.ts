import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-assignment',
    templateUrl: './reactive-assignment.component.html',
    styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {

    forbiddenProjectNames = ['Test'];
    projectStatusValues = ['Stable', 'Critical', 'Finished'];
    defaultProjectStatusValue = this.projectStatusValues[0];

    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            // 'projectName': new FormControl(null, this.projectNamesValidator.bind(this)),
            'projectName': new FormControl(null, Validators.required, this.projectNamesValidatorAsync.bind(this)),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'projectStatus': new FormControl(this.defaultProjectStatusValue)
        });
    }

    onSubmit() {
        console.log(this.form);
    }

    projectNamesValidator(control: FormControl) : {[s: string]: boolean} {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
            return { 'forbiddenProjectName': true };
        }
        return null;
    }

    projectNamesValidatorAsync(control: FormControl) : Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
                    resolve({ 'forbiddenProjectName': true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    }
}
