import { envs } from '@/config/envs';
import axios from 'axios';


const wcApi = axios.create({
  baseURL: `${envs.NEXT_PUBLIC_WC_STORE_URL}/wp-json/wc/v3/`,
  auth: {
    username: envs.WC_CONSUMER_KEY,
    password: envs.WC_CONSUMER_SECRET,
  },
});

export default wcApi;