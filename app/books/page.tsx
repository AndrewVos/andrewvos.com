import { Metadata } from 'next';
import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"

export const metadata: Metadata = {
  title: 'books - andrewvos.com',
};

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
const years: number[] = books.reduce((a: number[], v: Book): number[] => {
  return a.includes(v.read_year) ? a : a.concat(v.read_year)
}, []).sort().reverse()

const Stars = ({ rating }: { rating: number }): JSX.Element => {
  return <div className="space-x-1">
    {
      [1, 2, 3, 4, 5].map((n, i) => {
        return (
          <svg
            key={i}
            width="20"
            height="20"
            fill="currentColor"
            className={classNames("inline", {
              "stroke-gray-600 text-yellow-300": rating >= n,
              "stroke-gray-600 text-white": rating < n,
            })}
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        );
      })
    }
  </div>
}

function Book({ book }: { book: Book }) {
  return (
    <div
      className={classNames(
        "rounded border p-3 shadow-md shadow-gray-300",
        {
          "border-green-500": book.recommended,
        }
      )}>
      <div className="relative">
        {book.recommended && (
          <div className="absolute -top-5 -right-5 border border-green-500 bg-green-500 rounded px-1 text-sm text-white font-bold">recommended</div>
        )}
      </div>
      <div className="flex gap-3">
        <div className="w-[100px] h-[150px]">
          <Image alt={book.title} src={book.image_path} width="100" height="150" className="min-w-[100px] max-h-[150px]" />
        </div>
        <div className="flex-grow">
          <div>
            <Link className="text-xl text-gray-900 font-bold hover:underline" href={book.url} target="_blank">{book.title}</Link>
          </div>
          <div>
            <Link className="text-lg text-gray-500 hover:underline" href={book.author_url} target="_blank">{book.author}</Link>
          </div>
          <Stars rating={book.rating} />
        </div>
      </div>
    </div>
  )
}


function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

export default function Page({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let filteredBooks = books
  if (searchParams.year) {
    const yearFilter = searchParams.year ? (Array.isArray(searchParams.year) ? searchParams.year[0] : searchParams.year) : null
    if (yearFilter) {
      filteredBooks = filteredBooks.filter(b => b.read_year.toString() == yearFilter)
    }
  }
  if (searchParams.filter == "recommended") {
    filteredBooks = filteredBooks.filter(b => b.recommended)
  }
  if (searchParams.rating) {
    const ratingFilter = searchParams.rating ? (Array.isArray(searchParams.rating) ? searchParams.rating[0] : searchParams.rating) : null
    if (ratingFilter) {
      filteredBooks = filteredBooks.filter(b => b.rating.toString() == ratingFilter)
    }
  }

  const booksByYear = groupBy(filteredBooks, (b) => b.read_year)

  const Tab = ({ filter, filterName, title }: { filterName: string, filter?: string, title: string }) => {
    const selected = searchParams[filterName] == filter
    return (
      <Link
        href={{ pathname: "/books", query: { ...searchParams, [filterName]: filter } }}
        className={classNames("px-3 py-1 text-md rounded-lg hover:text-gray-900 hover:bg-gray-100", {
          "bg-gray-100 text-gray-900": selected,
          "text-gray-500": !selected
        })}>
        {title}
      </Link >
    )
  }

  return (
    <>
      <div className="container mx-auto p-3 mt-10 mb-5">
        <h1 className="text-4xl text-gray-800">
          Bookshelf
        </h1>
      </div>
      <div className="container mx-auto p-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Tab filterName="filter" title="All books" />
            <Tab filterName="filter" filter="recommended" title="Recommended books" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Tab filterName="year" title="All years" />
            {years.map(year => (
              <Tab key={year} filterName="year" filter={year.toString()} title={year.toString()} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Tab filterName="rating" title="All ratings" />
            {[1, 2, 3, 4, 5].map(rating => (
              <Tab key={rating} filterName="rating" filter={rating.toString()} title={`${rating.toString()} ${rating == 1 ? "star" : "stars"}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-3">
        <div className="text-lg text-gray-900">
          Found {filteredBooks.length} books
        </div>
      </div>
      <div className="space-y-5">
        {
          years.filter(y => !!booksByYear[y]).map(year => (
            <div key={year}>
              <div className="sticky top-0 z-10 border-y bg-gray-50 text-4xl text-gray-900 font-bold mb-5">
                <div className="container mx-auto p-3">
                  {year}
                </div>
              </div>
              <div className="container mx-auto p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {booksByYear[year].map((book: Book, index: number) => (
                    <div key={index} className="flex-grow md:flex-grow-0 md:w-auto">
                      <Book book={book} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
          )
        }
      </div>
    </>
  )
}
