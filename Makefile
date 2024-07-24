build:
	esbuild ./server.js --bundle --platform=node > ./dist.js
	node --experimental-sea-config sea-config.json
	cp `command -v node` ./server
	npx postject ./server NODE_SEA_BLOB ./dist.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 