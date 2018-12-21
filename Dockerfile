FROM keymetrics/pm2:latest-alpine

# Information of image
LABEL maintainer="@douglaspands"
LABEL version="0.1.0"
LABEL description="Core de API REST em Node.js"
LABEL monitor="pm2 monit"

# docker exec -it apirest-server pm2 monit
# Bundle APP files
COPY . /var/www
WORKDIR /var/www

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]