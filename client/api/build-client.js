import axios from 'axios';

export default ({ req }) => {
  console.log(req);

  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL: 'http://192.168.49.2:30100/',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: 'http://192.168.49.2:30100/',
    });
  }
};
