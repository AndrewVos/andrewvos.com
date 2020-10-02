all: ../src/AndrewVos.pdf

# needs wkhtmltopdf:
# sudo pacman -S wkhtmltopdf

../src/AndrewVos.pdf: AndrewVos.md style.css
	go get github.com/russross/blackfriday-tool
	blackfriday-tool AndrewVos.md AndrewVos.html
	wkhtmltopdf AndrewVos.html ../src/AndrewVos.pdf
	rm AndrewVos.html
