protoc:
	protoc \
	--plugin=protoc-gen-ts_proto="./node_modules/.bin/protoc-gen-ts_proto" \
	--ts_proto_opt=esModuleInterop=true \
	--ts_proto_out=nestJs=true="./src",importSuffix=.js:. \
	./modules/*/*.proto