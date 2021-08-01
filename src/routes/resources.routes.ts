import { Router } from 'express';

import { createResourceController } from '../modules/resources/useCases/createResource';
import { listResourceController } from '../modules/resources/useCases/listResources';

const resourcesRoutes = Router();

resourcesRoutes.post('/', (request, response) => {
  return createResourceController.handle(request, response);
});

resourcesRoutes.get('/', (request, response) => {
  return listResourceController.handle(request, response);
});

export { resourcesRoutes };
