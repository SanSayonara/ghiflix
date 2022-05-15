import { Request, Response } from 'express';

const indexController = (req: Request, res: Response): void => {
  res.status(418).jsend.fail('https://www.youtube.com/watch?v=ngZ0K3lWKRc');
};

export default indexController;
