document.addEventListener('DOMContentLoaded', function () {
    const showHideButton = document.querySelector('.show-hide');
    const commentWrapper = document.getElementById('comment-wrapper');
    
    showHideButton.addEventListener('click', function () {
      const isHidden = commentWrapper.hasAttribute('hidden');
      
      if (isHidden) {
        commentWrapper.removeAttribute('hidden');
        showHideButton.setAttribute('aria-expanded', 'true');
        showHideButton.textContent = 'Hide comments';
      } else {
        commentWrapper.setAttribute('hidden', '');
        showHideButton.setAttribute('aria-expanded', 'false');
        showHideButton.textContent = 'Show comments';
      }
    });
  });
  