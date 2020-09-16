import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Promisify transform old callback pattern to async/await pattern
  // Without Promisify
  /*
      jwt.verify(token, authConfig, (err, result) => {
        if(err) {
          return res.status(401).json({ error: 'Token Invalid' });
        }
        req.userId = decoded.id;
        return next();
      })
    */
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
