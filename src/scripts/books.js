import { h, render, Component } from 'preact';
import books from '../data/books.json';

class App extends Component {
  state = { filters: { rating: 'all' } };

  filterByRating = (rating) => {
    this.setState({ filters: { rating: rating } });
  };

  render() {
    return (
      <div>
      <Buttons filters={this.state.filters} filterByRating={this.filterByRating} />
      <Books filters={this.state.filters} />
      </div>
    );
  }
}

class Buttons extends Component {
  render({ filters, filterByRating }) {
    return (
      <div class="buttons mb-5">
        <RatingButton rating="all" filters={filters} filterByRating={filterByRating} />
        <RatingButton rating="5" filters={filters} filterByRating={filterByRating} />
        <RatingButton rating="4" filters={filters} filterByRating={filterByRating} />
        <RatingButton rating="3" filters={filters} filterByRating={filterByRating} />
        <RatingButton rating="2" filters={filters} filterByRating={filterByRating} />
        <RatingButton rating="1" filters={filters} filterByRating={filterByRating} />
      </div>
    );
  };
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

class Books extends Component {
  render({ filters }) {
    return books
      .map(book => (
        <Book book={book} filters={filters} />
      ))
  }
}

class Book extends Component {
  render({ book, filters }) {
    var visible = filters.rating == 'all' || filters.rating == book.rating;

    return (
      <div class={visible ? 'book' : 'book hidden'}>
        <a href={book.url} class="text-3xl text-gray-700">{book.title}</a>
        &nbsp;
        <a href={book.author_url} class="text-xl text-gray-500">by {book.author}</a>
      </div>
    )
  }
}

render(<App />, document.querySelector('.books'));
