import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];

    constructor(private service: ExampleService) { }

    ngOnInit() {
    }

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }

    onSaveServers() {
        this.service.storeServers(this.servers).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onGetServers() {
        this.service.getServers().subscribe(
            (servers: any[]) => this.servers = servers,
            (error) => console.log(error)
        );
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }

}
