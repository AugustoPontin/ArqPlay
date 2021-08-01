import { Resource } from '../../models/Resource';
import { IResourcesRepository } from '../../repositories/IResourcesRepository';

class ListResourcesUseCase {
  constructor(private resourcesRepository: IResourcesRepository) {
    console.log('constructor CreateResourceUseCase');
  }

  execute(): Resource[] {
    const resources = this.resourcesRepository.list();

    return resources;
  }
}

export { ListResourcesUseCase };
