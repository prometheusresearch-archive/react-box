.DELETE_ON_ERROR:

BIN           = ./node_modules/.bin
TESTS         = $(shell find src -path '*/__tests__/*-test.js')
SRC           = $(filter-out $(TESTS), $(shell find src -name '*.js'))
LIB           = $(SRC:src/%.js=lib/%.js) $(SRC:src/%.js=lib/%.js.flow)
NODE          = $(BIN)/babel-node

build:
	@$(MAKE) -j 8 $(LIB)

lint:
	@$(BIN)/eslint src

test:
	@$(BIN)/jest

ci:
	@$(BIN)/jest --watch

check:
	@$(BIN)/flow

version-major version-minor version-patch: lint test
	@npm version $(@:version-%=%)

publish: build
	@git push --tags origin HEAD:master
	@npm publish --access public

clean:
	@rm -rf lib/

lib/%.js: src/%.js
	@echo "Building $@"
	@mkdir -p $(@D)
	@$(BIN)/babel -o $@ $<

lib/%.js.flow: src/%.js
	@echo "Building $@"
	@mkdir -p $(@D)
	@cp $< $@
