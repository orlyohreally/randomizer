# Randomizer

Web application to get random phrases from the database developed with MEAN stack
Functionality of the web application:

- display random phrase from database
- user registration
- user authentication

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Requirements

Node.js v10.15.3  
npm 6.4.1

### Installation

Clone the repository

```
git clone https://github.com/orlyohreally/randomizer.git
```

Install the dependencies

```
npm install
```

Run mongodb (path may vary) on port 217017

```
cd C:\Program Files\MongoDB\Server\4.0\bin
mongod.exe
```

Build Angular project

```
ng build
```

Run Node.js server

```
node server.js
```

The project will be available at http://localhost:3000. To get random phrases authentication is required

## Built with MEAN stack

- [MongoDB](https://www.mongodb.com) - document database with the scalability and flexibility
- [Express](https://expressjs.com/) - back-end web application framework running on top of Node.js
- [Angular 6](https://angular.io/) - front-end web app framework
- [NodeJS](https://nodejs.org/) - JavaScript runtime environment

## Authors

- **Orly Knop** - [orlyohreally](https://github.com/orlyohreally)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
