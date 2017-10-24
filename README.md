# ThreeJS-Workshop-Template
This is a template to use to start working on the ThreeJS Workshop

## How To Run

Due to [Cross-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) you will want to run your Three.JS application as a web server so you can load textures and other files in.

### Running a basic webserver

Running a webserver really just means you have some code running that waits for a HTTP request and then return it the website. This section just describes deploying a basic webserver, more information about writing server side code and creating a backend can be [found here](https://github.com/uwmadisonieee/Server-And-Database-Workshop).

> Both Python and Node are super easy to download and install if your computer does not have it already

#### Python

- Open terminal/command prompt and get to directory of website
- Make sure you have python by running `python --version`
- Run `python -m SimpleHTTPServer`
  - it will defaut at port 8000 to see page
  - go to [http://localhost:8000](http://localhost:8000)
- To change to a different port, for instance, port 9001
  - run `python -m SimpleHTTPServer 9001`
	
### NodeJS

- Open terminal/command prompt and get to directory of website
- Make sure you have node by running `node -v`
- Run `sudo npm install -g http-server`
  - the `-g` means global so you only need to run this once on the server
- Get to directory of website
- Run `http-server`
  - it will defaut at port 8080
  - go to [http://localhost:8080](http://localhost:8080) to see page
- To change to a different port, for instance, port 9001
  - run `http-server -p 9001`
