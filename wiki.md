This wiki is to document the history of this project in order to document issues and new findings along the way.

## Deliverables
// - Please build out a C.R.U.D full-stack application
// - The goal is to build a BookClub application: 
// users should be able to register and login to maintain a list of personal favorite books. 
// user should be able to upload, update and delete books, along with any book details (author, genre, etc..) and notes on the reading material. 
// please allow for the user to update the **book object with a personal list of notes that they might want to add along the way as they read it.
// - Feel free to choose a tech stack that you are comfortable or familiar with.
// - Code comments would be appreciated and encouraged. As always, code styling/architecture will be analyzed.

// Bonus: deployment; UI styling; intuitive navigation; searching for preexisting books; user to user interaction.

## How to mimic a join table in MongoDB
- The tables we will need are notes, users, books
- We need something like a userBooks table - something that keeps track of a users saved books.
- Will also need a way to keep track of userNotes pertaining to each book - something like a note table containing the id/foreign key of it's user and it's book - a note belongs to a book through user - like a one to many through relationship.
- Haven't worked with nonrelational databases before so I'm guessing there's a specific nonrelational way to do this

## Re: How to mimic a join table in MongoDB
- It seems that we can just reference id's here, i.e. a book can keep track of which user has favorited it by keeping an array of user id's (object id's in Mongo)
- I'm unsure of how this would scale if there were say a million users
- Perhaps a favorites table
- Will have to experiment with this functionality and dive deeper into Mongo

## API Testing
- Used Insomnia to test the API/Backend and found it much more pleasant than postman, will be using this tool from now on





