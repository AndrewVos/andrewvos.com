"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"

type Book = {
  title: string;
  url: string;
  rating: number;
  recommended?: boolean;
  author: string;
  author_url: string;
  image_url: string;
  image_path: string;
  read_year: number;
}

import jsonBooks from "../data/books.json";
const books: Book[] = jsonBooks

type StarsProps = {
  rating: number
}

const Stars = ({ rating }: StarsProps): JSX.Element => {
  return <div className="text-gray-600 space-x-1">
    {
      [1, 2, 3, 4, 5].map((n, i) => {
        if (rating >= n) {
          return (
            <svg
              key={i}
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          );
        } else {
          return (
            <svg
              key={i}
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          )
        }
      })
    }
  </div>
}

type BookProps = {
  title: string,
  url: string,
  rating: number,
  recommended?: boolean,
  image_path: string
}

function Book({ title, url, rating, recommended, image_path }: BookProps) {
  return (
    <Link
      href={url}
      className={classNames(
        "relative flex justify-center flex-grow sm:flex-initial rounded border p-3 shadow-md shadow-gray-300",
        {
          "border-green-500 bg-green-100": recommended,
          "border-red-500 bg-red-100": !rating
        }
      )}>
      {recommended && (
        <div className="absolute border border-green-500 bg-green-500 rounded px-1  top-[-13px] right-1 text-sm text-white font-bold">recommended</div>
      )}
      {!rating && (
        <div className="absolute border border-red-500 bg-red-500 rounded px-1  top-[-13px] right-1 text-sm text-white font-bold">did not finish</div>
      )}
      <div className="space-y-3">
        <div className="h-[150px] w-[100px]">
          <Image alt={title} src={image_path} width="200" height="250" className="max-h-[150px]" />
        </div>
        <div className="">
          <Stars rating={rating} />
        </div>
      </div>
    </Link>
  )
}

export default function Books() {
  const [showOnlyRecommended, setShowOnlyRecommended] = useState(false)

  return (
    <>
      <div className="container mx-auto p-3 mt-10 mb-5">
        <h1 className="text-4xl text-gray-800">
          Books I&apos;ve read
        </h1>
      </div>
      <div className="container mx-auto p-3">
        <div className="flex items-center">
          <input id="default-checkbox" type="checkbox" tabIndex={-1} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={showOnlyRecommended} onChange={() => setShowOnlyRecommended(!showOnlyRecommended)} />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 select-none">
            Show only recommended books
          </label>
        </div>
      </div>
      <div className="container mx-auto p-3">
        <div className={classNames("flex flex-wrap gap-5 group", { "is-only-recommended": showOnlyRecommended })}>
          {books.map((book, index) => (
            <div key={index} className={book.recommended ? "" : "group-[.is-only-recommended]:hidden"}>
              <Book title={book.title} url={book.url} rating={book.rating} recommended={book.recommended} image_path={book.image_path} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
