export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Deactivated ' + this.activeToInactiveCounter + ' user(s)');
    }
    
    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Activated ' + this.inactiveToActiveCounter + ' user(s)');
    }
}