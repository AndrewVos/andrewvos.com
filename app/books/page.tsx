"use client"

import { useState } from "react"

type Book = {
  title: string;
  url: string;
  rating: number;
  author: string;
  author_url: string;
  image_url: string;
  read_year: number;
}

import jsonBooks from "../data/books.json";
const books: Book[] = jsonBooks

export default function Books() {
  const [ratingFilter, setRatingFilter] = useState<number | null>(null)
  var visibleBooks =
    ratingFilter == null
      ? books.filter((book) => book.rating !== 0)
      : books.filter((book) => book.rating === ratingFilter);

  const filterByRating = (rating: number | null) => {
    setRatingFilter(rating)
  };

  const ratingLabel = (rating: number | null) => {
    if (rating === null) {
      return "all"
    }

    return {
      1: "1 star",
      2: "2 stars",
      3: "3 stars",
      4: "4 stars",
      5: "5 stars",
      0: "unfinished",
    }[rating]
  }

  const RatingButton = ({ rating }: { rating: number | null }) => {
    var defaultClass =
      "mb-1 bg-white hover:bg-gray-100 focus:outline-none text-gray-800 font-semibold mr-1 py-1 px-3 border border-gray-400 rounded shadow";
    var activeClass = defaultClass + " bg-gray-300 hover:bg-gray-300";
    var currentClass = ratingFilter == rating ? activeClass : defaultClass;

    return (
      <button onClick={() => filterByRating(rating)} className={currentClass}>
        {ratingLabel(rating)}
      </button>
    );
  }

  const Buttons = () => {
    var ratings = [null, 5, 4, 3, 2, 1, 0];
    var buttons = ratings.map((rating) => (
      <RatingButton
        rating={rating}
      />
    ));

    return <div className="mb-5">{buttons}</div>;
  }

  const Book = ({ book }: { book: Book }) => {
    const stars = (rating: number) => {
      let empty = 5 - book.rating;

      const createArray = (n: number) => {
        return Array.from(Array(n))
      }

      return (
        <div>
          {createArray(rating).map(() => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill inline"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            );
          })}
          {createArray(empty).map(() => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star inline"
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
      <div className="items-center mb-5">
        <a href={book.url} className="text-3xl text-gray-700">
          {book.title}
        </a>
        &nbsp;
        <a href={book.author_url} className="flex-auto text-xl text-gray-500">
          by {book.author}
        </a>
        <div className="mr-3 ">{stars(book.rating)}</div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-3 mt-10 mb-5">
        <h1 className="text-4xl text-gray-800">
          Books I've read
        </h1>
      </div>
      <div className="container mx-auto p-3">
        <Buttons />
        <div className="mb-5 text-xl text-gray-700">
          Found {visibleBooks.length} books
        </div>
        {visibleBooks.map((book) => <Book book={book} />)}
      </div>
    </>
  )
}
