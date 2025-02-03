document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
  
    noButton.addEventListener('mouseover', () => {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = 'absolute';
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    });
  
    noButton.addEventListener('click', () => {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = 'absolute';
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    });
  
    yesButton.addEventListener('click', () => {
      const title = document.querySelector('.title h1');
      title.textContent = 'Yay! I knew you would say yes! 💖';
      title.style.color = 'red';
  
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
  
      const gif = document.querySelector('.gif img');
      gif.src = 'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif';
    });
  });