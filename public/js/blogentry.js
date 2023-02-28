// grab this from hidden element, needed for fetch URL on both POST and DELETE
const entryId = document.querySelector('#hidden-id').textContent; 

const addCommentHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('#comment-body').value.trim();

  if (commentText) {
    const response = await fetch(`/api/entries/${entryId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

const delCommentHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/entries/${entryId}/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment; you can only delete your own comments!');
    }
  }
};


document
  .querySelector('#add-comment-form')
  .addEventListener('submit', addCommentHandler);

document
  .querySelector('.entry-comments')
  .addEventListener('click', delCommentHandler);