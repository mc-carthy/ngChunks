import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reactive-assignment',
    templateUrl: './reactive-assignment.component.html',
    styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {

    projectStatusValues = ['Stable', 'Critical', 'Finished']

    constructor() { }

    ngOnInit() {
    }

}
