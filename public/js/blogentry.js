const addCommentHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('#comment-body').value.trim();
  const entryId = document.querySelector('#hidden-id').textContent; // grab this from hidden element, needed for fetch URL

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


document
  .querySelector('#add-comment-form')
  .addEventListener('submit', addCommentHandler);