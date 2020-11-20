all: ../public/AndrewVos.pdf

# needs wkhtmltopdf:
# sudo pacman -S wkhtmltopdf

../public/AndrewVos.pdf: AndrewVos.md style.css
	go get github.com/russross/blackfriday-tool
	blackfriday-tool AndrewVos.md AndrewVos.html
	wkhtmltopdf --allow "." AndrewVos.html ../public/AndrewVos.pdf
	rm AndrewVos.html
