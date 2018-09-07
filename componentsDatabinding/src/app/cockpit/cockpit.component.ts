import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output() serverBlueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    newServerName = '';
    newServerContent = '';

    constructor() { }

    ngOnInit() {
    }

    onAddServer() {
        this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
    }

    onAddServerBlueprint() {
        this.serverBlueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
    }

}
