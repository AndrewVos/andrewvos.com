require 'goodreads'
require 'json'
require 'date'

client = Goodreads::Client.new(
  api_key: ENV.fetch('GOODREADS_API_KEY'),
  api_secret: ENV.fetch('GOODREADS_SECRET')
)

USER_ID='25834255'

data = []
by_year = {}

page = 1
loop do
  puts "Page #{page}"
  book_infos = client.shelf(USER_ID, 'read', page: page).books
  break if book_infos.size == 0
  book_infos.each do |book_info|
    book = book_info.book

    read_at = DateTime.parse(book_info.read_at || book_info.date_added)
    if !by_year[read_at.year]
      year = {
        year: read_at.year,
        books: []
      }
      by_year[read_at.year] = year
      data << year
    end

    by_year[read_at.year][:books] << {
      title: book.title,
      url: book.link,
      description: book.description,
      image_url: book.image_url,
      small_image_url: book.small_image_url,
      rating: Integer(book_info.rating),
      author: book.authors.author.name,
      author_url: book.authors.author.link,
      read_at: read_at
    }
  end
  page += 1
end

data.each do |year|
  year[:books] = year[:books].sort do |a,b|
    b[:read_at] <=> a[:read_at]
  end
end

File.open('./data/books.json', 'w') do |file|
  file.write(JSON.pretty_generate(data))
end
