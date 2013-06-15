less       := ./node_modules/.bin/lessc
mocha      := ./node_modules/.bin/mocha
forever    := ./node_modules/.bin/forever

build:
	@echo
	@$(less) public/stylesheets/main.less > public/stylesheets/main.css

minify:
	@echo
	@node scripts/minify.js

run:
	@make build
	@echo
	@node app

run-forever:
	@make build
	@make minify
	@$(forever) start --minUptime 1000 --spinSleepTime 1000 server.js

.PHONY: build minify run run-forever
