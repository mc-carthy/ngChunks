import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number, name: string, status: string };

    constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // const id = +this.route.snapshot.queryParams['id'];
        // this.server = this.serversService.getServer(id);
        // this.route.params.subscribe(
        //     (params: Params) => {
        //         this.server = this.serversService.getServer(+params['id']);
        //     }
        // );
        this.route.data.subscribe(
            (data: Data) => {
                this.server = data['server'];
            }
        );
    }

    onEdit() {
        // These two methods are equivalent

        // this.router.navigate(['/servers', this.server.id, 'edit']);
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    }

}
