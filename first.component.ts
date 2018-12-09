import { Component } from '@angular/core';

@Component({
  selector: 'first',
  template: `<div style="text-align:center"><h1>Hello I am the FIRST Component</h1></div>
  <h3>Want to route to the Second Component now? </h3>
  <button class = 'btn btn-success' routerLink= '/second'>GO!</button>
  <router-outlet></router-outlet>
  `

})
export class FirstComponent {

}
