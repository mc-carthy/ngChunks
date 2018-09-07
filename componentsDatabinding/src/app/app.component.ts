import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    serverElements = [{ type: 'server', name: 'TestServer', content: 'This is a test' }];

    onServerAdded(serverData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onServerBlueprintAdded(serverBlueprintData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'serverBlueprint',
            name: serverBlueprintData.serverName,
            content: serverBlueprintData.serverContent
        });
    }

}
