document.querySelectorAll('.comment-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (name && message) {
      const commentBox = this.previousElementSibling;
      const comment = document.createElement('p');
      comment.innerHTML = `<strong>${name}:</strong> ${message}`;
      commentBox.appendChild(comment);
      this.reset();
    }
  });
});
