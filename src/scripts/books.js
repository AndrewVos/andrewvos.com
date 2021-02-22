import { h, render, Component } from "preact";
import books from "../data/books.json";

class App extends Component {
  state = {
    filters: { rating: null },
    visibleBooks: books.filter((book) => book.rating !== 0),
  };

  filterByRating = (rating) => {
    var visibleBooks =
      rating == null
        ? books.filter((book) => book.rating !== 0)
        : books.filter((book) => book.rating === rating);

    this.setState({
      visibleBooks: visibleBooks,
      filters: { rating: rating },
    });
  };

  render() {
    return (
      <div>
        <Buttons
          filters={this.state.filters}
          filterByRating={this.filterByRating}
        />
        <ResultCount visibleBooks={this.state.visibleBooks} />
        <Books
          visibleBooks={this.state.visibleBooks}
          filters={this.state.filters}
        />
      </div>
    );
  }
}

class Buttons extends Component {
  render({ filters, filterByRating }) {
    var ratings = [null, 5, 4, 3, 2, 1, 0];
    var buttons = ratings.map((rating) => (
      <RatingButton
        rating={rating}
        filters={filters}
        filterByRating={filterByRating}
      />
    ));

    return <div class="mb-5">{buttons}</div>;
  }
}

class RatingButton extends Component {
  render({ rating, filters, filterByRating }) {
    var defaultClass =
      "mb-1 bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold mr-1 py-1 px-3 border border-gray-400 rounded shadow";
    var activeClass = defaultClass + " bg-gray-300 hover:bg-gray-300";
    var currentClass = filters.rating == rating ? activeClass : defaultClass;

    var labels = {
      null: "all",
      1: "1 star",
      2: "2 stars",
      3: "3 stars",
      4: "4 stars",
      5: "5 stars",
      0: "unfinished",
    };

    return (
      <button onClick={() => filterByRating(rating)} class={currentClass}>
        {labels[rating]}
      </button>
    );
  }
}

class ResultCount extends Component {
  render({ visibleBooks }) {
    return (
      <div class="mb-5 text-xl text-gray-700">
        Found {visibleBooks.length} books
      </div>
    );
  }
}

class Books extends Component {
  render({ visibleBooks, filters }) {
    return visibleBooks.map((book) => <Book book={book} filters={filters} />);
  }
}

class Book extends Component {
  render({ book, filters }) {
    const stars = (book) => {
      let stars = book.rating;
      let empty = 5 - book.rating;

      return (
        <div>
          {[...Array(stars).keys()].map((i) => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill inline"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            );
          })}
          {[...Array(empty).keys()].map((i) => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star inline"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            );
          })}
        </div>
      );
    };

    return (
      <div class="items-center mb-5">
        <a href={book.url} class="text-3xl text-gray-700">
          {book.title}
        </a>
        &nbsp;
        <a href={book.author_url} class="flex-auto text-xl text-gray-500">
          by {book.author}
        </a>
        <div class="mr-3 ">{stars(book)}</div>
      </div>
    );
  }
}

render(<App />, document.querySelector(".books"));
