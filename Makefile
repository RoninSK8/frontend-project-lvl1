install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	node_modules/.bin/eslint .

brain-even:
	node bin/brain-even.js