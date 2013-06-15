less       := ./node_modules/.bin/lessc
mocha      := ./node_modules/.bin/mocha
forever    := ./node_modules/.bin/forever

build:
	@echo
	@$(less) public/stylesheets/main.less > public/stylesheets/main.css

run:
	@make build
	@echo
	@node server

run-forever:
	@make build
	@$(forever) start --minUptime 1000 --spinSleepTime 1000 server.js

.PHONY: build run run-forever
