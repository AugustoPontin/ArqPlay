import { Resource } from '../models/Resource';
import {
  IResourcesRepository,
  ICreateResourceDTO,
} from './IResourcesRepository';

class ResourcesRepository implements IResourcesRepository {
  private resources: Resource[];

  private static INSTANCE: ResourcesRepository;

  private constructor() {
    this.resources = [];
  }

  public static getInstance(): ResourcesRepository {
    if (!ResourcesRepository.INSTANCE) {
      ResourcesRepository.INSTANCE = new ResourcesRepository();
    }
    return ResourcesRepository.INSTANCE;
  }

  create({
    resource_name,
    type,
    disabled_begin,
    disabled_end,
  }: ICreateResourceDTO): void {
    const resource: Resource = {
      resource_name,
      type,
      disabled_begin,
      disabled_end,
    };

    this.resources.push(resource);
  }

  list(): Resource[] {
    return this.resources;
  }

  findByName(resource_name: string): Resource {
    const resource = this.resources.find(
      (resource) => resource.resource_name === resource_name
    );

    return resource;
  }
}

export { ResourcesRepository };
