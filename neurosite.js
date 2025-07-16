window.onload = function () {
  // Scroll to bottom smoothly
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });

  // Wait 3 seconds, then scroll back up
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 3000); // 3000 milliseconds = 3 seconds
};
