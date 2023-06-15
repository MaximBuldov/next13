import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { getAccessToken, removeTokensStorage } from './auth';
import axios from 'axios';
import qs from 'qs';

const $wcApi = new WooCommerceRestApi({
  url: process.env.WP_API || '',
  consumerKey: process.env.WC_CONSUMER_KEY || '',
  consumerSecret: process.env.WC_CONSUMER_SECRET || '',
  version: "wc/v3"
});

const $wpApi = axios.create({
  baseURL: process.env.WP_API,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    serialize: (params: any) => qs.stringify(params)
  }
});

const $api = axios.create({
  baseURL: process.env.LOCAL_API,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    serialize: (params: any) => qs.stringify(params)
  }
});

const $auth = axios.create({
  method: 'POST',
  baseURL: process.env.WP_API
});

$auth.interceptors.request.use(async config => {
  const token = getAccessToken();

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

$auth.interceptors.response.use(config => config, error => {
  if (error.response.data.status === 403) {
    removeTokensStorage();
  }
  throw error;
})

export {
  $wpApi,
  $auth,
  $api,
  $wcApi
};