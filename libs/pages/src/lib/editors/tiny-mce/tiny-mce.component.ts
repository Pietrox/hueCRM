import {Component} from '@angular/core';

@Component({
	selector: 'huecrm-tiny-mce-page',
	template: `
        <nb-card>
            <nb-card-header>
                Tiny MCE
            </nb-card-header>
            <nb-card-body>
                <huecrm-tiny-mce></huecrm-tiny-mce>
            </nb-card-body>
        </nb-card>
	`,
})
export class TinyMCEComponent {
}
