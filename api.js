const axios = require('axios');

// Function to fetch data from the API using Axios
async function fetchRoom() {
  // Request configuration
  const config = {
    method: 'post',
    url: 'https://online.maavaishnodevi.org/api/v1/eAccommodation/accomSummary',
    headers: {
      authority: 'online.maavaishnodevi.org',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      origin: 'https://online.maavaishnodevi.org',
      referer: 'https://online.maavaishnodevi.org/',
      'sec-ch-ua':
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'tof-auth-token': 'ed439bd6-3f63-45b7-9b08-3492f96e17df',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
    data: {
      locationId: '3',
      accomTypeId: '1',
    },
  };

  // Making the request using Axios
  return axios(config)
    .then(function (response) {
      //     console.log('Room Response:', response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

// Function to fetch data from the API using Axios
async function fetchDormatry() {
  // Request configuration
  const config = {
    method: 'post',
    url: 'https://online.maavaishnodevi.org/api/v1/eAccommodation/accomSummary',
    headers: {
      authority: 'online.maavaishnodevi.org',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      origin: 'https://online.maavaishnodevi.org',
      referer: 'https://online.maavaishnodevi.org/',
      'sec-ch-ua':
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'tof-auth-token': 'ed439bd6-3f63-45b7-9b08-3492f96e17df',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
    data: {
      locationId: '3',
      accomTypeId: '2',
    },
  };

  // Making the request using Axios
  return axios(config)
    .then(function (response) {
      //   console.log('Dormatry respose:', response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

// Function to fetch data from the API using Axios
async function fetchRopeway() {
  // Request configuration
  const config = {
    method: 'post',
    url: 'https://online.maavaishnodevi.org/api/v1/eRopeWay/ropeWaySummary',
    headers: {
      authority: 'online.maavaishnodevi.org',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      origin: 'https://online.maavaishnodevi.org',
      referer: 'https://online.maavaishnodevi.org/',
      'sec-ch-ua':
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'tof-auth-token': 'ed439bd6-3f63-45b7-9b08-3492f96e17df',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
    data: {
      routeId: '11',
      vendorId: '4',
    },
  };

  // Making the request using Axios
  return axios(config)
    .then(function (response) {
      //   console.log('Dormatry respose:', response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}



// Function to fetch data from the API using Axios
async function fetchBatteryCar() {
  // Request configuration
  const config = {
    method: 'post',
    url: 'https://online.maavaishnodevi.org/api/v1/eBatteryCar/BatteryCarSummary',
    headers: {
      authority: 'online.maavaishnodevi.org',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      origin: 'https://online.maavaishnodevi.org',
      referer: 'https://online.maavaishnodevi.org/',
      'sec-ch-ua':
        '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'tof-auth-token': 'ed439bd6-3f63-45b7-9b08-3492f96e17df',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
    data: {
      routeId: '5',
      vendorId: '3',
    },
  };

  // Making the request using Axios
  return axios(config)
    .then(function (response) {
      //   console.log('Dormatry respose:', response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

module.exports = {
  fetchDormatry,
  fetchRoom,
  fetchRopeway,
  fetchBatteryCar
};



