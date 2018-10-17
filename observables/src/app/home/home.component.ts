import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // const myNumbers = Observable.interval(1000);
        // myNumbers.subscribe(
        //     (number: number) => {
        //         console.log(number);
        //     }
        // );

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

        myObservable.subscribe(
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
}
