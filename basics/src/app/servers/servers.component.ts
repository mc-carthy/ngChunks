import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//   selector: '[app-servers]',
//   selector: '.app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .whiteText {
        color: white;
    }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false
  servers = ['Testserver', 'Testserver2']
  username = '';
  secretVisible = false;
  secretButtonLogs = [];
    
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUsernameInput(event: any) {
      this.username = event.target.value;
  }

  resetUsername() {
      this.username = '';
  }

  toggleSecretVisibility(event: any) {
      this.secretVisible = !this.secretVisible;
      this.secretButtonLogs.push(event)
  }

}
