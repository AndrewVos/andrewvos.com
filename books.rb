require 'goodreads'
require 'json'

client = Goodreads::Client.new(
  api_key: ENV.fetch('GOODREADS_API_KEY'),
  api_secret: ENV.fetch('GOODREADS_SECRET')
)

USER_ID='25834255'

data = []
page = 1
loop do
  puts "Page #{page}"
  book_infos = client.shelf(USER_ID, 'read', page: page).books
  break if book_infos.size == 0
  book_infos.each do |book_info|
    book = book_info.book

    data << {
      title: book.title,
      url: book.link,
      description: book.description,
      image_url: book.image_url,
      rating: Integer(book_info.rating),
      author: book.authors.author.name,
      author_url: book.authors.author.link,
    }
  end
  page += 1
end

File.open('./data/books.json', 'w') do |file|
  file.write(JSON.pretty_generate(data))
end
