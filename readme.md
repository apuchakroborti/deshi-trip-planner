url: https://www.youtube.com/watch?v=l8WPWK9mS5M&ab_channel=JavaScriptMastery

$ npm init -y
create the index.js file

$ npm install --save express
$ npm install --save-dev nodemon
$ npm install uuid
$ npm install --save mysql [does not work]
$ npm install mysql2 [this is working]
create database tripplanner;

GRANT ALL PRIVILEGES ON tripplanner.* TO 'apu'@'localhost';

For ORM in javascript need to use sequalize:
$ npm install sequelize --save
$ npm install cors --save [need to understand the usage deeply]

Test Urls:
1. POST http://localhost:5000/api/places/addPlace
{
    "name": "Qutub Minar",
    "country": "India",
    "district": "Delhi",
    "details": "Historical place",
    "views": 1
}

2. GET http://localhost:5000/api/places/getAllPlaces
3. POST http://localhost:5000/api/places/getAllPlacesByCountryName
{
    "country": "India"
} 
4. PUT http://localhost:5000/api/places/:id
{
    "name": "Qutub Minar",
    "country": "India",
    "district": "Delhi",
    "details": "Historical place",
    "views": 1
}
5. DELETE http://localhost:5000/api/places/:id
6.  GET http://localhost:5000/api/places/getAllPlaces/:id


Errors:
1. SyntaxError: Cannot use import statement outside a module for type module
2. SyntaxError: Unexpected token 'export'

Solution: Node js version should be greater than or equal to 14