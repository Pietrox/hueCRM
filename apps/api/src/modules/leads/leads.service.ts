import {LeadsDto, LeadsUpdateDto} from '@hue-crm/dto';
import {LeadsModel} from '@hue-crm/mongoose-models';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()
export class LeadsService {
	constructor(@InjectModel('Leads') private leadsModel: Model<LeadsModel>) {
	}
	
	async findAll(): Promise<LeadsDto[]> {
		return this.leadsModel.find().populate('owner');
	}
	
	async findOne(id: string): Promise<LeadsDto> {
		return this.leadsModel.findById(id).populate('owner');
	}
	
	async create(leadsDto: LeadsDto): Promise<LeadsDto> {
		const lead = await this.leadsModel.create(leadsDto);
		await lead.save();
		return lead;
	}
	
	async update(id: string, leadsDto: LeadsUpdateDto): Promise<LeadsDto> {
		const lead = await this.leadsModel.findById(id);
		await lead.update(leadsDto);
		return lead;
	}
	
	async delete(id: string): Promise<LeadsDto> {
		const lead = await this.leadsModel.findById(id);
		await lead.remove();
		return lead;
	}
}
