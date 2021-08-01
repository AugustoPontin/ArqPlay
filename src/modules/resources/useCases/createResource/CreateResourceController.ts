import { Request, Response } from 'express';

import { CreateResourceUseCase } from './CreateResourceUseCase';

class CreateResourceController {
  constructor(private createResourceUseCase: CreateResourceUseCase) {
    console.log('constructor createResourceController');
  }
  handle(request: Request, response: Response): Response {
    const { resource_name, type, disabled_begin, disabled_end } = request.body;

    this.createResourceUseCase.execute({
      resource_name,
      type,
      disabled_begin,
      disabled_end,
    });

    return response.status(201).json({ message: 'ok' });
  }
}

export { CreateResourceController };
