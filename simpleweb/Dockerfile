FROM node:alpine

# copy files in working dir rather on the root dir 

WORKDIR /usr/app

#copy everything from current working dir to current working dir in container

COPY ./package.json ./

#npm install is going to run only if we make change in line or referenced file above this line

RUN npm install

COPY ./ ./

CMD ["npm","start"]