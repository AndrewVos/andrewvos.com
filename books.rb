require 'goodreads'
require 'json'
require 'date'

client = Goodreads::Client.new(
  api_key: ENV.fetch('GOODREADS_API_KEY'),
  api_secret: ENV.fetch('GOODREADS_SECRET')
)

USER_ID='25834255'

books = []

page = 1
loop do
  puts "Page #{page}"

  book_infos = client.shelf(USER_ID, 'read', page: page).books
  break if book_infos.size == 0
  book_infos.each do |book_info|
    book = book_info.book

    read_at = DateTime.parse(book_info.read_at || book_info.date_added)

    books << {
      title: book.title,
      url: book.link,
      rating: Integer(book_info.rating),
      author: book.authors.author.name,
      author_url: book.authors.author.link,
      image_url: book.image_url,
      year: read_at.year
    }
  end
  page += 1
end

books = books.sort do |a, b|
  b[:read_at] <=> a[:read_at]
end

File.open('./src/data/books.json', 'w') do |file|
  file.write(JSON.pretty_generate(books))
end
