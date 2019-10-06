import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
    
      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>
    
      <nb-layout-column>
    
    
      <div id="container">
        <h1>NgAtlanta 2018 - Universal Workshop</h1>
        <h3>(with Mark Pieszak)</h3>
    
        <div id="navigation">
          <a routerLink="/">Home</a>
          <a routerLink="/speakers">Speakers</a>
        </div>
        <div id="outlet-wrapper">
          <router-outlet></router-outlet>
        </div>
      </div>
      
      </nb-layout-column>
    
      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>
    
    </nb-layout>
  `,
  styles: [`
    #navigation { margin: 20px 0; font-weight:bold; font-size:18px; }
    #navigation a { color: #5279a4; margin-right:20px; }
    #outlet-wrapper { padding: 20px; border:1px #ccc solid; }
  `]
})
export class AppComponent {

}
