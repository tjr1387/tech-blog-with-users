# Full Stack Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app is a full stack tech blog, using the MVC paradigm and complete with users, auth and sessions. Users can view blog entries by others, and if they so choose, create an account and make blog entries of their own. Account owners can also comment on these blog posts. The users and their entries are all stored in a SQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Comments/Flaws](#commentsflaws)
- [License](#license)

## Installation

Packages needed:  
  
bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2 (DB), sequelize

## Usage  
  
Upon visiting the site, you will land at the homepage which displays all blog entries with the 'tech' theme (in theory). You can click on one of the titles to go to the page for that one entry, where there may be comments on it. There is a dashboard nav option which will go to all of your entries, and if you aren't logged in or signed up, clicking this will prompt you to do so. Once signed up, you can participate in both making entries of your own and leaving comments on other users' entries (including yours). You may delete your entries from your dashboard, and you may delete any of the comments you have made on any of the entries. There is a logout option on the nav that does what you think it does; if you want to make more entries or comments, you will have to log in again.

Link to live site: https://calm-tundra-85233.herokuapp.com/

Screenshot(s):


## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file, and the MVC practice exercises

## Comments/Flaws

This was a pretty big project, and given time constraints, I skimped on a few pieces. Firstly, I opted against implementing 'update' functionality, however it's only a piece of a couple of the criteria so I'm not too upset about it. Secondly, there isn't much smooth (or thorough) error handling on either end -- errors are mainly handled via an alert or simply a lack of any action. Lastly, the styling (which wasn't the emphasis of this back-end-focused project) is very bare bones and not pretty, though it's at least somewhat clear. However, the stuff that _was_ done works quite well, the code is relatively dry for an amateur, and the file structure is fairly well organized for our broadest-scope individual project to date. The reps and the coder-mentality is kicking in a little more, as I was able to plan and implement each bit in an organized way, running into very few confounding snags.


## License

Covered under the MIT license.
