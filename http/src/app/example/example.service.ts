import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ExampleService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        // return this.http.post(
        //     'https://nghttp-30b84.firebaseio.com/data.json', 
        //     servers, 
        //     { headers: headers}
        // );
        return this.http.put(
            'https://nghttp-30b84.firebaseio.com/data.json', 
            servers, 
            { headers: headers}
        );
    }

    getServers() {
        return this.http.get('https://nghttp-30b84.firebaseio.com/data.json').pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        ))
        .pipe(catchError(
            (error: Response) => {
                return throwError('Something went wrong, could not get servers');
            }
        ));
    }
}