const addEntryHandler = async (event) => {
  event.preventDefault();

  const entryTitle = document.querySelector('#entry-title').value.trim();
  const entryText = document.querySelector('#entry-body').value.trim();

  if (entryTitle && entryText) {
    const response = await fetch(`/api/entries`, {
      method: 'POST',
      body: JSON.stringify({ title: entryTitle, content: entryText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add entry');
    }
  }
};

const delEntryHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/entries/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete entry');
    }
  }
};


document
  .querySelector('#add-entry-form')
  .addEventListener('submit', addEntryHandler);

  document
  .querySelector('.blog-entries')
  .addEventListener('click', delEntryHandler);