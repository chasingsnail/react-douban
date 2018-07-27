import axios from 'axios';

import { baseURL } from '../config/constants';

export default async (url, data, method = 'get', showMessage = true) => {
  method = method.toLowerCase();

  const ajaxConfig = {
    url,
    method,
    baseURL
  };

  if (['post', 'put', 'patch'].includes(ajaxConfig.method)) {
    ajaxConfig.data = data;
  } else {
    ajaxConfig.params = data;
  }

  try {
    const { error_code, error_message, result } = (await axios(ajaxConfig)).data;
    // if (error_code) { // eslint-disable-line camelcase
    //   const err = {
    //     code: error_code,
    //     message: error_message
    //   };
    //   throw err;
    // }
    return result;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    }
    throw error;
  }
};
