import axios from 'axios';
import qs from 'query-string';

class TwitterService {
  static obtainAccessToken() {
    const options = {
      url: 'https://api.twitter.com/oauth2/token',
      method: 'POST',
      headers: {
        Authorization: `Basic 1222989356992016390-A4oRtuva5nHsZPs0hFgyGz1F06Txh4`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        grant_type: 'client_credentials',
      }),
    };

    return axios(options).then(res => res.data.access_token);
  }

  static searchTweets(params) {
    const options = {
      url: `/tweets?${qs.stringify(params)}`,
      method: 'GET',
    };

    return axios(options).then(res => res.data.items);
  }
}

export default TwitterService;