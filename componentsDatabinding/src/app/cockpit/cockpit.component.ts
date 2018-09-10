import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output() serverBlueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverNameInput') serverNameInput: ElementRef;
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    onAddServer() {
        this.serverCreated.emit({serverName: this.serverNameInput.nativeElement.value, serverContent: this.serverContentInput.nativeElement.value})
    }
    // onAddServer(nameElement: HTMLInputElement, contentElement: HTMLInputElement) {
    //     this.serverCreated.emit({serverName: nameElement.value, serverContent: contentElement.value})
    // }
    // onAddServer() {
    //     this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
    // }

    onAddServerBlueprint() {
        this.serverBlueprintCreated.emit({serverName: this.serverNameInput.nativeElement.value, serverContent: this.serverContentInput.nativeElement.value})
    }
    // onAddServerBlueprint(nameElement: HTMLInputElement, contentElement: HTMLInputElement) {
    //     this.serverBlueprintCreated.emit({serverName: nameElement.value, serverContent: contentElement.value})
    // }
    // onAddServerBlueprint() {
    //     this.serverBlueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
    // }

}
