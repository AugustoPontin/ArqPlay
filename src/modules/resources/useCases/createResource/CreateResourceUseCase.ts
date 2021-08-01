import { IResourcesRepository } from '../../repositories/IResourcesRepository';

interface IRequest {
  resource_name: string;
  type: string;
  disabled_begin: Date;
  disabled_end: Date;
}

class CreateResourceUseCase {
  constructor(private resourcesRepository: IResourcesRepository) {
    console.log('constructor CreateResourceUseCase');
  }

  execute({
    resource_name,
    type,
    disabled_begin,
    disabled_end,
  }: IRequest): void {
    const resourceAlreadyExists =
      this.resourcesRepository.findByName(resource_name);

    if (resourceAlreadyExists) {
      throw new Error('Resource already exists!');
    }

    this.resourcesRepository.create({
      resource_name,
      type,
      disabled_begin,
      disabled_end,
    });
  }
}

export { CreateResourceUseCase };
