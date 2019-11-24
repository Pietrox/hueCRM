import {Component} from '@angular/core';
import 'ckeditor';

import './ckeditor.loader';

@Component({
	selector: 'huecrm-ckeditor',
	template: `
        <nb-card>
            <nb-card-header>
                CKEditor
            </nb-card-header>
            <nb-card-body>
                <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
            </nb-card-body>
        </nb-card>
	`,
})
export class CKEditorComponent {
}
