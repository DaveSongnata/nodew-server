import * as dotenv from 'dotenv'; // Import dotenv using ES modules syntax
dotenv.config();

import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);
