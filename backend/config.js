// config.js
import dotenv from 'dotenv';
import path from 'path';

const envPath = process.env.NODE_ENV = "/mnt/infra/eleganweb/backend/.env"

const fullPath = path.resolve(envPath);
dotenv.config({ path: fullPath });

export default process.env;