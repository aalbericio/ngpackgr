import { Component } from '@angular/core';
import { SharedComponent } from '@test/shared';

@Component({
    imports: [SharedComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
