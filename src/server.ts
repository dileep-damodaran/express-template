import * as express from 'express';
import { Config } from './config/config';
import { MiddleWareConfig } from './middleWares/middleWareConfig';
require("dotenv").config();
require("dotenv-safe").config();

const pub = '456';

const middleWareConfig = new MiddleWareConfig();
let app = middleWareConfig.configure(pub);

const PORT: number = Config.port;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})