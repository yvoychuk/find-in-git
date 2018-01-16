var axios = require('axios');
var config = require('./config.js');

var {org, repo, access_token, term} = config;

var q_file = 'in:file';

var q_org = 'org:' + org;

var q_repo = 'repo:' + org + '/' + repo;

var q_is = 'is:private';

var query = [term, q_file, q_org, q_repo, q_is].join('+');

var url = 'https://api.github.com/search/code?q=' + query;

var auth_header = 'token ' + access_token;

axios
  .get(
    url,
    {
      headers: {
        Accept: 'application/vnd.github.v3.text-match+json',
        Authorization: auth_header
      }
    }
  )
  .then((res) => {
    if (typeof res.data != 'undefined') {
      console.log('term:', term)
      console.log('total_count:', res.data.total_count)
    } else {
      console.log('empty search')
    }
  })
  .catch((err) => {
    console.log(err)
  })
