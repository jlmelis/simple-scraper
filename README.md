## simple-scraper

This is a Simple web scrapping app testing some ideas for use in another project. This app consits of a Svelte frontend hitting a lambda function hosted on Netlify to retrieve a page title from a provided URL.

### Running local

To run this example locally download/clone the repository and run:

```bash
npm install
```

To get the app working locally, in manner that matches how it behaves on Netlify, I am using a simple Express proxy that listens on port 3000. To launch the svelte app, the function, and the proxy at the same time simply run:

```bash
npm run dev
```

Once running you can access the app at: 

```
http://localhost:3000/
```

NOTE: since this is just an example application it is not fault tolerant so you have to make sure you are entering a valid URL.
