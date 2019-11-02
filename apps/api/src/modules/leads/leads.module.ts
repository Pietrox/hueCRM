import {LeadsSchema} from '@hue-crm/schemas';
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {SharedModule} from '../../shared/shared.module';
import {LeadsController} from './leads.controller';
import {LeadsService} from './leads.service';

@Module({
	imports: [
		MongooseModule.forFeature([{name: 'Lead', schema: LeadsSchema}]),
		SharedModule],
	providers: [LeadsService],
	controllers: [LeadsController]
})
export class LeadsModule {
}
