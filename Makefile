PREFIX = docker run --user 1000 --rm -it -p 8080:8080 -v .:/usr/src/app -w /usr/src/app node:22-alpine3.19

.PHONY: all

all:
	${PREFIX} sh
