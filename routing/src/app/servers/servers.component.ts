import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    private servers: { id: number, name: string, status: string }[] = [];

    constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.servers = this.serversService.getServers();
    }

    onReload() {
        // By default, the Router.navigate function works relative to the root
        // If you want a relative path, add the use the commented line below
        // this.router.navigate(['servers'], { relativeTo: this.route });
        
        this.router.navigate(['servers']);
    }

}
