FROM node

WORKDIR /NODE_FROM_GITHUB/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/Jyotishmoy12/basic-project.git .

ENV PORT=3000

RUN npm ci

CMD ["npm", "start"]

