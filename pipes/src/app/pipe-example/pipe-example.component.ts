import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-example',
    templateUrl: './pipe-example.component.html',
    styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

    filteredStatus = '';

    servers = [
        {
            instanceType: 'medium',
            name: 'Production Server',
            status: 'stable',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'large',
            name: 'User Database',
            status: 'stable',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'small',
            name: 'Development Server',
            status: 'offline',
            started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'small',
            name: 'Test Server',
            status: 'stable',
            started: new Date(15, 1, 2017)
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
        return {
            'list-group-item-success': server.status === 'stable',
            'list-group-item-warning': server.status === 'offline',
            'list-group-item-danger': server.status === 'critical'
        };
    }

}
