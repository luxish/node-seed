//@flow
import type {$Response, $Request} from 'express';

// Logger middleware used to print minimal access log information.
const logger = async (req: $Request, res: $Response, next: Function)  => {
    await next();
    console.log(req.method + " " + req.url + " " + res.statusCode);
};

export default logger;