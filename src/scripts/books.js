import { h, render, Component } from 'preact';
import books from '../data/books.json';

class App extends Component {
  state = { filterByRating: 'all' };

  applyFilter = (e) => {
    this.setState({ filterByRating: e.target.dataset.rating });
  };

  render() {
    return ([
      <Buttons filterByRating={this.state.filterByRating} applyFilter={this.applyFilter} />,
      <Books filterByRating={this.state.filterByRating} />
    ]);
  }
}

class Buttons extends Component {
  render({ filterByRating, applyFilter }) {
    var ratings = ['all', 5, 4, 3, 2, 1];

    var defaultClass = "bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold mr-1 py-1 px-3 border border-gray-400 rounded shadow";
    var activeClass = defaultClass + ' bg-gray-300 hover:bg-gray-300';

    return (
      <div class="buttons mb-5">
      {
      ratings.map((rating) => {
        return <button onClick={applyFilter} class={filterByRating == rating ? activeClass : defaultClass} data-rating={rating}>
          {rating == 'all' ? 'All' : rating + ' stars'}
        </button>
      })
      }
      </div>
    );
  };
};

class Books extends Component {
  render({ filterByRating }) {
    var visibleBooks = books
      .filter((book) => filterByRating == 'all' || book.rating == filterByRating)

    return visibleBooks
      .map(book => (
        <div class="book" data-rating={book.rating}>
        <a href={book.url} class="text-3xl text-gray-700">
        {book.title}
        </a>
        &nbsp;
        <a href={book.author_url} class="text-xl text-gray-500">
        by {book.author}
        </a>
        </div>
      ))
  }
}

render(<App />, document.querySelector('.books'));
