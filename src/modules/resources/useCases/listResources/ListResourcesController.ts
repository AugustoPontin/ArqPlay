import { Request, Response } from 'express';

import { ListResourcesUseCase } from './ListResourcesUseCase';

class ListResourcesController {
  constructor(private listResourceUseCase: ListResourcesUseCase) {
    console.log('constructor createResourceController');
  }
  handle(request: Request, response: Response): Response {
    const all = this.listResourceUseCase.execute();

    return response.json(all);
  }
}

export { ListResourcesController };
