# Full Stack Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app is a full stack tech blog, using the MVC paradigm and complete with users, auth and sessions. Users can view blog entries by others, and if they so choose, create an account and make blog entries of their own. The users and their entries are all stored in a SQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Comments/Flaws](#commentsflaws)
- [License](#license)

## Installation


## Usage

Upon arrival, the basic 'home' page will present the user with the option to go to the note-taking app (this page is also the wildcard route, so any incorrect path on this domain will go here). On the notes page, the user will see the option to enter a note (title and text/body) on the right hand side. Once filled out, a save icon appears on the navbar (right hand side) which can save that note to a list on the left side of the page. If the user clicks on one of their notes, it will appear in the large field on the right. To add a note, the '+' (navbar) can be clicked to remove the saved note content from the big field on the right, allowing them to enter a new note once again. To delete notes from the list, simply click on the red trashcan coinciding with the desired note to be deleted. The user can also navigate to '/api/notes' to see a JSON file of all their saved notes --  each entry will have the two known fields (title/text) as well as a third (ID) unique to each saved note.

Link to live site: 

Screenshot(s):


## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file, et al. (inc.)

## Tests

N/A

## Comments/Flaws



## License

Covered under the MIT license.
