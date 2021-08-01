import { ResourcesRepository } from '../../repositories/ResourcesRepository';
import { CreateResourceController } from './CreateResourceController';
import { CreateResourceUseCase } from './CreateResourceUseCase';

const resourcesRepository = ResourcesRepository.getInstance();

const createResourceUseCase = new CreateResourceUseCase(resourcesRepository);

const createResourceController = new CreateResourceController(
  createResourceUseCase
);

export { createResourceController, createResourceUseCase };
