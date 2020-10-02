import books from '../../data/books.json';

var booksContainer = document.querySelector('.js-books-container');
books.forEach(function(year) {
  year.books.forEach(function(book) {
    var bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'js-book');
    bookContainer.setAttribute('data-rating', book.rating);

    var title = document.createElement('a');
    title.setAttribute('href', book.url);
    title.classList.add('text-3xl');
    title.classList.add('text-gray-700');
    title.textContent = book.title;
    bookContainer.appendChild(title);

    var author = document.createElement('a');
    author.setAttribute('href', book.author_url);
    author.classList.add('text-xl');
    author.classList.add('text-gray-500');
    author.textContent = ' by ' + book.author;
    bookContainer.appendChild(author);

    booksContainer.appendChild(bookContainer);
  });
});

var ratingFilters = document.querySelectorAll('.js-rating-filters .js-rating-filter');

var filterBooks = function(rating) {
  booksContainer.querySelectorAll('.js-book').forEach(function(book) {
    var visible = rating == null || rating === book.dataset.rating
    if (visible) {
      book.classList.remove('hidden');
    } else {
      book.classList.add('hidden');
    }
  });
}

var handleRatingFilterClick = function(event) {
  ratingFilters.forEach(function(ratingFilter) {
    if (ratingFilter === event.target) {
      ratingFilter.classList.add('bg-gray-300');
      ratingFilter.classList.add('hover:bg-gray-300');
    } else {
      ratingFilter.classList.remove('bg-gray-300');
      ratingFilter.classList.remove('hover:bg-gray-300');
    }
  });

  filterBooks(event.target.dataset.rating);
}

ratingFilters.forEach(function(ratingFilter) {
  ratingFilter.addEventListener('click', handleRatingFilterClick);
});
