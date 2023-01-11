const User = require('./User');
const Entry = require('./Entry');
const Comment = require('./Comment');


// users can have many entries (1-to-M), and entries belong to one user

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
  foreignKey: 'user_id'
});


// users can have many comments (1-to-M), and comments belong to one user

User.hasMany(Comment, {
  foreignKey: 'user_id',  // no cascade delete here because I want the comments to remain, even if the user is deleted (we aren't giving a 'delete account' option anyway)
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


// entries can have many comments (1-to-M), and comments belong to one entry

Entry.hasMany(Comment, {
  foreignKey: 'entry_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Entry, {
  foreignKey: 'entry_id'
});


module.exports = { User, Entry, Comment };
