import axios from 'axios';
import { constants } from './service-constants';
import StorageService from './token-service';
class ApiService {
  baseUrl = constants.BASE_URL
  getRequestHandlerWithOutHeader = (requestMethod, params) => {
  
    return new Promise(async (resolve, reject) => {
      try {
        console.log(`${this.baseUrl}${requestMethod}`);

        const response = await axios.get(`${this.baseUrl}${requestMethod}`, {
          params,
        });
        resolve(response.data);
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 401) {
          console.log('logout');
          StorageService.setToken(null)
        }

        reject(error);
      }
    });
  };
  getRequestHandlerRefershToken = (requestMethod, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          headers: {
            ApiKey: 'MySecretAPI123Key',
          },
        };
        const response = await axios.post(
          `${this.baseUrl}${requestMethod}`,
          params,
          options,
        );
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  getRequestHandler = (requestMethod, params, token) => {
    // console.log(token);

    return new Promise(async (resolve, reject) => {
      token = await  StorageService.getToken(constants.API_TOKEN);
      try {
        console.log(
          `${this.baseUrl}${requestMethod}`,
          {params},
          (axios.defaults.headers.Authorization = `Bearer ${token}`),
        );
        const response = await axios.get(
          `${this.baseUrl}${requestMethod}`,
          {params},
          (axios.defaults.headers.Authorization = `Bearer ${token}`),
        );

        resolve(response.data);
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 401) {
          console.log('logout');
          console.log(
            `${this.baseUrl}${requestMethod}`,
            {params},
            (axios.defaults.headers.Authorization = `Bearer ${token}`),
          );
          console.log('errrrrror');
          StorageService.setToken(null)
          return;
        }

        reject(error);
      }
    });
  };

  postRequestHandler = (requestMethod, request, params, token) => {
    console.log('test');
    debugger;
    return new Promise(async (resolve, reject) => {
        token = await  StorageService.getToken(constants.API_TOKEN);
      try {
        console.log(
          `${this.baseUrl}${requestMethod}`,
          params,
          request,
          (axios.defaults.headers.Authorization = `Bearer ${token}`),
        );
        const response = await axios.post(
          `${this.baseUrl}${requestMethod}`,
          request,
          {params},
          (axios.defaults.headers.Authorization = `Bearer ${token}`),
        );
        resolve(response.data);
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 401) {
          console.log('logout');
          StorageService.setToken(null)
        }

        reject(error);
      }
    });
  };

  postRequestWithOutHeaderHandler = (requestMethod, params) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('Production Base url with login');
        console.log(`${this.baseUrl}${requestMethod}`);
        const response = await axios.post(
          `${this.baseUrl}${requestMethod}`,
          params,
        );
        resolve(response.data);
      } catch (error) {
        console.log(error);
       /*  if (error?.response?.status === 401) {
          console.log('logout');
          setLoggedInUser(null, null, null);
        } */

        reject(error);
      }
    });
  };

  putRequestHandler = (requestMethod, params, callback) => {
    axios
      .put(`${this.baseUrl}${requestMethod}`, params)
      .then(({data}) => {
        callback(null, data);
      })
      .catch(error => {
        callback(error, null);
      });
  };

  deleteRequestHandler = (requestMethod, params, callback) => {
    axios
      .delete(`${this.baseUrl}${requestMethod}`, params)
      .then(({data}) => {
        callback(null, data);
      })
      .catch(error => {
        callback(error, null);
      });
  };
  getRefershToken = (tokens, refreshTokens) => {
    // use dispatch hooks
    try {
      const params = {
        token: tokens,
        refreshToken: refreshTokens,
      };
      console.log('Parameter in Network Details');
      console.log(JSON.stringify(params));
      console.log(
        `${this.baseUrl}${constants.webService.methods.auth.getRefershToken}`,
      );
      const options = {
        headers: {
          ApiKey: 'MySecretAPI123Key',
        },
      };
      console.log(options);
      axios
        .post(
          `${this.baseUrl}${constants.webService.methods.auth.getRefershToken}`,
          params,
          options,
        )
        .then(res => {
          console.log('Network Details 401 response');
          const response = res['data'];
          console.log(res);
          const jsonResponse = response['data'];
          const {token, refreshToken} = jsonResponse;
          console.log(token, refreshToken);
          if (res.data.statusCode == '200' && res.data != null) {
            console.log('Get refersh token success');
          } else {
          }
        })
        .catch(error => console.log('Get refersh token error', error.response));
      // alertWithMessage(error);
    } catch (error) {}
  };
}

const apiService = new ApiService();
export default apiService;

 
