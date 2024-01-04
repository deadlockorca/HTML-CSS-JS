import axios from 'axios';
import React, { Component } from 'react'

class ApiServices {
  browserInfo = navigator.userAgent;

  constructor() {
    axios.interceptors.request.use((request) => {
        if(this.browserInfo) {
          request.headers['Browser-Info'] = this.browserInfo;
        }
        return request;
    });
    axios.interceptors.response.use((response) => response, (error) => {
        const {config, response} = error;
        if(response.status === 500){
            alert('Server error');
        }
    })
  }
  getRequest(url: string) {
    return axios.get(url);
  }

  postRequest(url: string, args: any) {
    return axios.post(url, args);
  }

  putRequest(link: string, args: any) {
    return axios.put(link, args);
  }

  deleteRequest(link: string) {
    return axios.delete(link);
  }
}

const ApiService = new ApiServices();
export default ApiService;
