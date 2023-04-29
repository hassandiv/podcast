# Search podcasts

> Search podcasts web application, built with Next, TypeScript, TailWind CSS and Listen Notes API.
> Here is the online testing link for the application https://search-podcasts.herokuapp.com/

## Table of Contents

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [How to test](#how-to-test)
- [Acknowledgements](#acknowledgements)
- [MIT License](#mit-License)
- [Contact](#contact)

## General Information

Search podcasts is a web application provides users with the ability to search for podcasts or podcasters information through a search form. Users can input a search keyword such as podcast title, description or publisher name in the form and then click on the search button to see the relevant podcasts. The search results page displays a maximum of five podcasts and features a load more button for additional results. To clear the search results, users can click on the "clear search" button. This app is developed with the Next JavaScript library, the application seamlessly connects to the Listen Notes API through RESTful APIs, ensuring reliable and efficient access to podcast data.

## Technologies Used

- Next - version 13.3.1
- TypeScript - version 5.0.4
- TailWind CSS - version 3.3.2
- Axios - version ^1.3.6
- Heroku server

## Features

- Provide a search form to allow users to search for podcasts.
- Podcasters information are displayed in a responsive card design.
- Load more button at the bottom of the page that will load more podcasts when clicked.
- Include a "clear search" button to clear the search results.
- Display a message stating "no more podcasts" if the total results have been reached.
- Show a message stating "no podcasts found, please try a different search" if the search keywords do not match any results.
- If an error occurs on the server, display an error message.

## Usage

- The web application has been deployed to Heroku server and is available for online access via the following link:
- https://search-podcasts.herokuapp.com/

## Installation

To run this project locally, follow these steps:

1. Clone the git repository on your local machine:

```env
git clone git@github.com:hassandiv/podcast.git
```

2. Install the dependencies:

first

```env
cd podcast
```

then

```env
npm install
```

OR

```env
yarn
```

3. Set up your environment variables by creating a .env file in the project root directory with the following values:

```ev
NEXT_PUBLIC_LISTEN_NOTES_PROD_API_URL="https://listen-api.listennotes.com/api/v2";
NEXT_PUBLIC_LISTEN_NOTES_APIKEY="api key";
```

## How to test

- Open your project folder in a code editor or terminal.
- Run the following command in the terminal to start the application.

first

```env
cd podcast
```

then:

```env
npm run dev
```

- Once the application is installed and running, you can access it at http://localhost:3000 in your web browser.

## Acknowledgements

- I want to give a huge shoutout to the Listen Notes API developers for their exceptional podcast data source that powers the search functionality of this web application.

## MIT License

Copyright (c) [2023] [Elhassan Abdelhafez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

## Contact

- Created by https://github.com/hassandiv - feel free to contact me!
