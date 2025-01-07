import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'shared-component',
    templateUrl: 'shared.component.html',
    styleUrls: ['shared.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class SharedComponent {

}
