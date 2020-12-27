NODE_ENV_DEV ?= development

ifndef APP_ENV
  CLIENT_PORT ?= 8088
  API_SERVER_URL=http://localhost:8044/api/
endif

# ifeq ($(APP_ENV), development)
# 	API_SERVER_URL=https://example.com/api/
# endif

# ifeq ($(APP_ENV), production)
# 	API_SERVER_URL=https://example.com/api/
# endif

install:
	npm install

temp:
	rm -rf node_modules package-lock.json

run:
	NODE_ENV=$(NODE_ENV_DEV) \
	CLIENT_PORT=$(CLIENT_PORT) \
	API_SERVER_URL=$(API_SERVER_URL) \
	npm start

storybook:
	npm run storybook

# dev-build:
# 	#sudo docker build -t web_app -f DevDockerfile .

# prod-build:
# 	#sudo docker build -t web_app -f ProdDockerfile .

# prod-run:
# 	sudo docker run --name web_app -p 80:80 -d web_app

docker-build:
	$(info App Env is : $(APP_ENV))
	$(info API Url is : $(API_SERVER_URL))
	NODE_ENV=$(APP_ENV) \
	CLIENT_PORT=$(CLIENT_PORT) \
	API_SERVER_URL=$(API_SERVER_URL) \
	npm run build

.PHONY: run
