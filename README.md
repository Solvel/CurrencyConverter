# CurrencyConverter
An offline currency converter with imported rates from the Exchange Rates API written in JavaScript, with HTML and CSS for the frontend. Conversions are interchangeable between eachother.

Most of the CSS file for the frontend is taken from: https://codepen.io/Coding_Journey/pen/exjrdg by Coding Journey, since this was not the focus of this project. However this was the extent of the help from his project. 

The exchange rates was imported through web.postman.co which is a platform for API development. 

The rates were recieved via a GET request: http://api.exchangeratesapi.io/v1/latest?access_key=xxxxxxxxxxxxxxxxxxxxxxxxxx
and stored in a JSON file located in the data folder.

The project also uses JQuery.

The rates were recieved the 18.07.2021 and is stored locally which gives the option of using the application offline. This can be usefull in countries where internet service is not always provided. 

The JavaScript file has explanation of the backend.