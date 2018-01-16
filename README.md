# find-in-git
1. git clone  
2. npm install     
3. create config.js (copy from config-example.js)  
4. get github access token  
5. fill config with: org, repo, access_token, term  
6. node index.js  
7. edit index.js for more informative console output

Also, use CURL:  
`curl -H 'Accept: application/vnd.github.v3.text-match+json' \
      -H 'Authorization: token OAUTH-TOKEN' \
  https://api.github.com/search/code?q=console+in:file+org:ORGNAME+repo:ORGNAME/REPONAME+is:private`
