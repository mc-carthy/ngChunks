import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives';
  hideElement: boolean = true;

  ngOnInit() {
    setTimeout(() => {
        this.hideElement = false
    }, 2000);
}
}
