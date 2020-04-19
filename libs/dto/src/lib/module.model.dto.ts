import {ApiModelProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsObject} from 'class-validator';

const columnsExample = require('../../../../config/modules/leads.columns.json');

export class ModuleModelDto {
	
	@ApiModelProperty({example: columnsExample})
	@IsNotEmpty()
	@IsObject()
	columns: {
		[key: string]: {
			title: string,
		}
	};
}
