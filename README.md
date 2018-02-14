# GIPHY

Single page web application in which users can interact with the GIPHY [API](https://developers.giphy.com/docs/). Uses ReactJS and Redux.

## Features

There are two main features to this application.

On the first page (as denoted by the Search menu item), interact with the GIPHY API through classic search. Enjoy auto-search as you type, and infinite scroll.

On the second page (as denoted by the Random menu item), click the magic wand to get a random gif.

## Getting Started

Copy the link of repository upper right of this page (clone or download).

```
git clone git@github.com:rebeccanewborn/giphy.git
```

Change into the giphy directory

```
cd giphy
```

Run the following command to install package dependencies

```
npm install
```

## Getting an API key

Head over to the GIPHY API page [here](https://developers.giphy.com). Login to your account or signup for a new one. After logging in/signing up, click on Create An App. It will prompt you to give your app a name and a description. After you submit, your API key will appear on your dashboard in your GIPHY developers page.

Within the cloned version of this repo, you can either hardcode your API key into the /src/services/api.js file or create a new directory within src called config with a file called keys.js. Your keys.js file should look something like this:

```
module.exports = {
  giphyApi: "YOUR_KEY_HERE"
};
```

With your API key replacing "YOUR_KEY_HERE". This second option is recommended if you will be uploading a fork of this repo to github or any other public website.

## Booting up the app locally

Run the following command to boot up the app locally

```
npm start
```

## Built With

* ReactJS
* Redux
* Semantic UI (basic styling and animation)
* GIPHY API

## Author

* **Rebecca Newborn** - [Github](https://github.com/rebeccanewborn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
