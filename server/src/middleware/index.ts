import {Request, Response, NextFunction} from 'express';

import { APIError, InternalServerError } from 'rest-api-errors';
import { STATUS_CODES } from 'http';

interface APIErrorType {
  status: number;
  code: string;
  name: string;
  message: string;
};


const errorHandler = (err: APIErrorType, req: Request, res: Response, next: NextFunction) => {
  const error = (err.status === 401 ||
    err instanceof APIError) ? err : new InternalServerError();

  if (process.env.NODE_ENV !== 'production') {
    // do something here
  }
  
  if (['ValidationError', 'UserExistsError'].includes(err.name)) {
    return res.status(405).json(err);
  }

  console.log('API error', { error: err });

  return res
    .status(error.status || 500)
    .json({
      code: error.code || 500,
      message: error.message || STATUS_CODES[error.status],
    });
};

export default errorHandler;