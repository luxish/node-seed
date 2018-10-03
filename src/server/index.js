// @flow
// node-seed
import express from 'express';
import type {$Response, $Request} from 'express';
import logger from './middleware/logger'

const app = express();
const PORT = 3000;

// Add logger 
app.use(logger);

// Test api 
app.get('/', (req: $Request , resp: $Response) => {
    resp.send("Node-seed")
})

app.listen(PORT, ()=> console.log("Server started on port ",PORT));
