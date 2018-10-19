import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    myNumbersSubscription: Subscription
    customSubscription: Subscription

    constructor() { }

    ngOnInit() {
        const myNumbers = Observable.interval(1000);
        this.myNumbersSubscription = myNumbers.subscribe(
            (number: number) => {
                console.log(number);
            }
        );

        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('First pacakge');
            }, 2000);
            setTimeout(() => {
                observer.next('Second pacakge');
            }, 4000)
            setTimeout(() => {
                observer.complete();
            }, 5000)
            // setTimeout(() => {
            //     observer.error('Error!');
            // }, 5000)
        });

        this.customSubscription = myObservable.subscribe(
            (data: string) => {
                console.log(data);
            },
            (error: string) => {
                console.log(error);
            },
            () => {
                console.log('Completed')
            }
        );
    }

    ngOnDestroy() {
        this.myNumbersSubscription.unsubscribe();
        this.customSubscription.unsubscribe();
    }

}