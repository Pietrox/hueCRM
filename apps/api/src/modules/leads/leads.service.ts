import { LeadsDto, LeadsUpdateDto } from '@huecrm/dto';
import { LeadsModel } from '@huecrm/mongoose-models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LeadsService {
  constructor(@InjectModel('Lead') private leadsModel: Model<LeadsModel>) {
  }
  
  async findAll(): Promise<LeadsModel[]> {
	return this.leadsModel.find();
  }
  
  async findLead() {
	try {
	  const leads = await this.leadsModel.find().exec();
	  return leads.map(lead => ({
		leadid: lead.leadid,
		id: lead.id,
		name: lead.name,
		email: lead.email,
		address: lead.address,
		phone: lead.phone,
		owner: lead.owner
	  }));
	} catch (error) {
	  return error;
	}
  }
  
  async create(leadsDto: LeadsDto): Promise<LeadsModel> {
	try {
	  const lead = await this.leadsModel.create(leadsDto);
	  await lead.populate('owner').save();
	  return lead;
	} catch (error) {
	  return error;
	}
  }
  
  async createMany(leadsDto: LeadsDto[]): Promise<LeadsModel[]> {
	try {
	  return await this.leadsModel.create(leadsDto);
	} catch (error) {
	  return error;
	}
  }
  
  
  async update(_id: string, leadsDto: LeadsUpdateDto): Promise<LeadsModel> {
	try {
	  const lead = await this.leadsModel.findById(_id);
	  await lead.update(leadsDto);
	  return lead;
	} catch (error) {
	  return error;
	}
  }
  
  async delete(leadId): Promise<LeadsModel> {
	try {
	  const lead = await this.leadsModel.findOneAndDelete(leadId);
	  await lead.remove();
	  return lead;
	} catch (error) {
	  return error;
	}
  }
}
