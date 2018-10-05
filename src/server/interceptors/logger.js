//@flow
import fs from 'fs';
import type {$Response, $Request} from 'express';
import { fillTrailingSpaces } from '../utils/formatter';

const ACCESS_LOG_FILE_NAME : string = "access.log";

// Logger middleware used to print minimal access log information.
const logger = async (req: $Request, res: $Response, next: Function)  => {
    await next();

    // create message
    const logMessage = fillTrailingSpaces(req.method, 7) + " | " + res.statusCode + " | " + req.url + "\n";
    
    // log to the file async
    fs.appendFile(ACCESS_LOG_FILE_NAME, logMessage, (err) => { err && console.error(err.message)});
};

export default logger;