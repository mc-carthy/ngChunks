import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives';
  hideElement: boolean = true;
  value: number = 5

  ngOnInit() {
    setTimeout(() => {
        this.hideElement = false
    }, 2000);
}
}
