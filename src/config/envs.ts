import 'dotenv/config';
import env from 'env-var';

export const envs = {
  
  NEXT_PUBLIC_WC_STORE_URL: env.get('NEXT_PUBLIC_WC_STORE_URL').required().asString(),
  
  WC_CONSUMER_KEY: env.get('WC_CONSUMER_KEY').required().asString(),
  WC_CONSUMER_SECRET: env.get('WC_CONSUMER_SECRET').required().asString(),
  
  PORT: env.get('PORT').default(3000).asPortNumber(),
  NODE_ENV: env.get('NODE_ENV').default('development').asString(),
};