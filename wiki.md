This wiki is to document the history of this project in order to document issues and new findings along the way.

## How to mimic a join table in MongoDB
- The tables we will need are notes, users, books
- We need something like a userBooks table - something that keeps track of a users saved books.
- Will also need a way to keep track of userNotes pertaining to each book - something like a note table containing the id/foreign key of it's user and it's book - a note belongs to a book through user - like a one to many through relationship.
- Haven't worked with nonrelational databases before so I'm guessing there's a specific nonrelational way to do this

## API Testing
- Used Insomnia to test the API/Backend and found it much more pleasant than postman, will be using this tool from now on

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!** -->



