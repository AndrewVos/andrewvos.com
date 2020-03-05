all: ../static/cv/AndrewVos.pdf

# needs wkhtmltopdf:
# sudo apt-get install wkhtmltopdf

../static/cv/AndrewVos.pdf: AndrewVos.md style.css
	go get github.com/russross/blackfriday-tool
	blackfriday-tool AndrewVos.md AndrewVos.html
	wkhtmltopdf AndrewVos.html ../static/cv/AndrewVos.pdf
	rm AndrewVos.html
