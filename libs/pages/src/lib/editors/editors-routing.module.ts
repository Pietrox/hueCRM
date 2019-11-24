import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CKEditorComponent} from './ckeditor/ckeditor.component';

import {EditorsComponent} from './editors.component';
import {TinyMCEComponent} from './tiny-mce/tiny-mce.component';

const routes: Routes = [{
	path: '',
	component: EditorsComponent,
	children: [{
		path: 'tinymce',
		component: TinyMCEComponent,
	}, {
		path: 'ckeditor',
		component: CKEditorComponent,
	}],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EditorsRoutingModule {
}

export const routedComponents = [
	EditorsComponent,
	TinyMCEComponent,
	CKEditorComponent,
];
