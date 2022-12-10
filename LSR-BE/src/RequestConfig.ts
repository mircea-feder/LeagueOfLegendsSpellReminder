import https from 'https';

/**
 * Request configurations applicable to any http request to the riot lol api
 */
const requestConfig = {
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'application/json',
    'X-Riot-Token': process.env.RIOTDEVTOKEN
  }
}

export default requestConfig;
