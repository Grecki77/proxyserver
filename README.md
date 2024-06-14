# proxyserver

618 / 5 000
The application was written for testing Node.js applications that need to access open data sets (there is no authentication mechanism) that do not support CORS headers. Yahoo used to have this functionality (you could get such data using their server via: `http://query.yahooapis.com/v1/public/yql?q=select * from json where url="'+ url +'" &format=json&callback=?`. I used this back in 2019.

Perhaps this functionality has actually been overused in the era of mobile applications based on Node.js, but sometimes it is useful locally. That's why this server was created.

Please note that this is a temporary solution for development and is not suitable for production. Some services provide CORS only after paying a subscription or purchasing an additional option, but do not provide a sandbox.

# Installation guide

1. Install `node.js` from official project site;
2. Install `Yarn` from official site (or modify scripts in `package.json`);
3. Install `git` from official site or download ZIP archive from GitHub and uncompress it;
4. Type in Command line:

    4.1 `$ yarn install`

    4.2 `$ yarn start`

If you want the application to run in the background and would like to have access to some of the scripts that have been added to make working with `pm2` easier, replace the contents of `package.json` with `package-extended` in the `package.json` file and execute `yarn install` again. Then you get access to:

5. Use `$ yarn bgStart` - this command run the application in background.  Several helper scripts have been created, such as `bgLog`, `bgStop` etc. For more information about `pm2` check it on official page.

# Exapmple of use

1. run application;
2. Call the address via ajax, axios, any URL changing the exaple.com domain to the URL you want:
http://localhost:7300?url=https://example.com/api/data
