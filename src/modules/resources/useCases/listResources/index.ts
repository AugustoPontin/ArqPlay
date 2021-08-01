import { ResourcesRepository } from '../../repositories/ResourcesRepository';
import { ListResourcesController } from './ListResourcesController';
import { ListResourcesUseCase } from './ListResourcesUseCase';

const resourcesRepository = ResourcesRepository.getInstance();
const listResourceUseCase = new ListResourcesUseCase(resourcesRepository);
const listResourceController = new ListResourcesController(listResourceUseCase);

export { listResourceController };
