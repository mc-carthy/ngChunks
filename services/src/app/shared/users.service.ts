import { CounterService } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    activeUsers = ['User1', 'User2'];
    inactiveUsers = ['User3', 'User4'];

    constructor(private counterService: CounterService) {};

    activeateUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInactiveToActive();
    }

    deactiveateUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive()
    }
}