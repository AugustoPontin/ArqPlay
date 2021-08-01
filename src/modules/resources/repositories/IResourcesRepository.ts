import { Resource } from '../models/Resource';

interface ICreateResourceDTO {
  resource_name: string;
  type: string;
  disabled_begin: Date;
  disabled_end: Date;
}

interface IResourcesRepository {
  findByName(resource_name: string): Resource;
  list(): Resource[];
  create({
    resource_name,
    type,
    disabled_begin,
    disabled_end,
  }: ICreateResourceDTO): void;
}

export { IResourcesRepository, ICreateResourceDTO };
