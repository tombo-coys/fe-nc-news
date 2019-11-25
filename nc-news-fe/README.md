# Toms-NC-News-App

This repo is the front-end for a news application concept, utilising the back-end API I built, which you can see [here](https://github.com/tombo-coys/be-nc-news). This front-end allows users to view articles, rate them positively or negatively, make comments as a logged in user, delete their comments, and rate individual comments. The front-end provides the user with an interactive interface - allowing them to make HTTP methods to the back-end API. 

The aim of this project was to bring together the front-end skills and technologies learnt during our front-end block at Northcoders, i.e. building an interactive user interface using ReactJs, and making asynchronous API calls to the server we had previously built in our back-end block review. The project consolidates my overall understanding of CRUD applications.

## Hosting the front-end

The front-end was built using React, utilising Reach-Router to manage the route transitions and Axios to make HTTP requests. The site is hosted on Netlify [here](https://toms-nc-news-concept.netlify.com/)

## Getting Started

To run the project locally, follow the instructions below.

Clone this repository by running the code below in your terminal:

    git clone https://github.com/tombo-coys/fe-nc-news.git

`cd` into the directory and install the required dependencies (react(^16.12.0), axios(^0.19.0) and @reach/router(^1.2.1)) by running the code below in the directory:

    npm install

In the project directory you can run the app using

    npm start

This will run the ap in its developemtn mode, and your browser should open up with the site. If not, open [http://localhost:3000](http://localhost:3000) to view the site. 


## User stories

As a user you can:

- view a list of all articles
- view a page for each topic with a list of related articles.
- view an individual article.
- view an individual article's comments.
- sort articles by:
  - date created
  - comment_count
  - votes
- post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- delete my own comments (as a default logged in user. e.g. 'jessjelly').
- vote on an article and immediately see the change.
- vote on a comment and immediately see the change.

The site is mobile-responsive, without sacrificing the style or fucntionality. 

## Built With 

- [React](https://reactjs.org/) - Javascript library for building interfaces.
- [Reach Router](https://reach.tech/router) - A route manager for the react-app.
- [Axios](https://github.com/axios/axios) - A promise based HTTP client for the browser and node.js.


## Acknowledgements

- [Northcoders](https://northcoders.com/) for the support and wonderful curriculum.


### Logos 

- The favicon used was made by [srip](https://www.flaticon.com/authors/srip) from [www.flaticon.com](www.flaticon.com)

- The coding topic logo was made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)

- The football topic logo was made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)

- The cooking topic logo was made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)

- The voting arrows were made by [Lyolya](https://www.flaticon.com/authors/lyolya) from [www.flaticon.com](www.flaticon.com)
