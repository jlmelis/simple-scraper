import cheerio from 'cheerio';
import axios from 'axios';

const withHttps = url => !/^https?:\/\//i.test(url) ? `https://${url}` : url;

export async function handler(event, context) {
  const url = withHttps(decodeURI(event.queryStringParameters.url));

  return axios.get(url).then((response) => {
    const $ = cheerio.load(response.data);

    return $("title").text(); 
  })
  .then(data => ({
    statusCode: 200,
    headers: {'Content-Type': 'text/html;charset=utf-8'},
    body: data
  }))
  .catch(error => ({ statusCode: 422, body: String(error) }));
}