import { h, render, Component } from 'preact';
import books from '../data/books.json';

class App extends Component {
  state = {
    filters: { rating: 'all' },
    visibleBooks: books
  };

  filterByRating = (rating) => {
    var visibleBooks = rating == 'all' ? books : books.filter((book) => book.rating === rating);

    this.setState({
      visibleBooks: visibleBooks,
      filters: { rating: rating }
    });
  };

  render() {
    return (
      <div>
      <Buttons filters={this.state.filters} filterByRating={this.filterByRating} />
      <ResultCount visibleBooks={this.state.visibleBooks} />
      <Books visibleBooks={this.state.visibleBooks} filters={this.state.filters} />
      </div>
    );
  }
}

class Buttons extends Component {
  render({ filters, filterByRating }) {
    var ratings = ['all', 5, 4, 3, 2, 1];
    var buttons = ratings.map((rating) => (
      <RatingButton rating={rating} filters={filters} filterByRating={filterByRating} />
    ));

    return (
      <div class="mb-5">
      {buttons}
      </div>
    );
  }
};

class RatingButton extends Component {
  render({ rating, filters, filterByRating }) {
    var defaultClass = "bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold mr-1 py-1 px-3 border border-gray-400 rounded shadow";
    var activeClass = defaultClass + ' bg-gray-300 hover:bg-gray-300';
    var currentClass = filters.rating == rating ? activeClass : defaultClass;

    return (
      <button onClick={() => filterByRating(rating)} class={currentClass}>
      {rating == 'all' ? 'All' : rating + ' stars'}
      </button>
    );
  }
}

class ResultCount extends Component {
  render({ visibleBooks }) {
    return (
    <div class="mb-5 text-xl text-gray-700">
      Found { visibleBooks.length } books
    </div>
    )
  }
}

class Books extends Component {
  render({ visibleBooks, filters }) {
    return visibleBooks
      .map(book => (
        <Book book={book} filters={filters} />
      ))
  }
}

class Book extends Component {
  render({ book, filters }) {
    return (
      <div>
        <a href={book.url} class="text-3xl text-gray-700">{book.title}</a>
        &nbsp;
        <a href={book.author_url} class="text-xl text-gray-500">by {book.author}</a>
      </div>
    )
  }
}

render(<App />, document.querySelector('.books'));
