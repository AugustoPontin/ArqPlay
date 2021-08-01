import { Router } from 'express';

import { resourcesRoutes } from './resources.routes';

const router = Router();

router.use('/resources', resourcesRoutes);

export { router };
