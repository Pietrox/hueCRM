import {Module} from '@nestjs/common';
import {ModuleModelsController} from './module-models.controller';
import {ModuleModelsService} from './module-models.service';

@Module({
	providers: [ModuleModelsService],
	controllers: [ModuleModelsController]
})

export class ModuleModelsModule {

}
