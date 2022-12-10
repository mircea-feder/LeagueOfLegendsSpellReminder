import 'dotenv/config'
import express, {Application} from 'express';
import axios from "axios";

import liveMatchController from "./controller/LiveMatchController";

const cors = require('cors');

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/liveMatch', liveMatchController);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
