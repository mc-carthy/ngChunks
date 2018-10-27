import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        return this.http.post('https://nghttp-30b84.firebaseio.com/data.json', servers);
    }
}