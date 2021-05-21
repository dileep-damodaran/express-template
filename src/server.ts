import { Config } from './config/config';
import { Database } from './data/db';
import { MiddleWareConfig } from './middleWares/middleWareConfig';
require("dotenv").config();
require("dotenv-safe").config();

Database.connect();

const secretKey = Config.access_token_secret_key;

const middleWareConfig = new MiddleWareConfig();
let app = middleWareConfig.configure(secretKey);

const PORT: number = Config.port;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});