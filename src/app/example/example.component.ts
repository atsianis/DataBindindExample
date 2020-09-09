import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  username: string = "Hello";

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameEmpty(): boolean{
    return this.username.length==0;
  }

  reset(): void{
    this.username = "";
  }

}
