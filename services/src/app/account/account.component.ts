import { Component, Input } from '@angular/core';
import { AccountsService } from './../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    // providers: [LoggingService]
})
export class AccountComponent {
    @Input() account: { name: string, status: string };
    @Input() id: number;


    constructor(private accountsService: AccountsService, private loggingService: LoggingService) {};

    onSetTo(status: string) {
        this.accountsService.updateStatus(this.id, status);
        // this.loggingService.logStatusChange(status);
    }
}
