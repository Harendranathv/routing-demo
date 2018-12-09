import { Component } from '@angular/core';

@Component({
  selector: 'second',
  template: `
  <div style="text-align:center"><h1>I am the SECOND Component</h1></div>
  <p>Go back to the first component?</p>
  <button class = 'btn btn-danger'routerLink= '/first'>Go to First</button>

  <router-outlet></router-outlet>`
})
export class SecondComponent {

}
