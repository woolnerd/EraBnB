FROM ruby:2.7.3
RUN apt-get update -qq && apt-get install -y nodejs npm postgresql-client
WORKDIR /erabnb
COPY Gemfile /erabnb/Gemfile
COPY Gemfile.lock /erabnb/Gemfile.lock
RUN bundle install

COPY package.json /erabnb/package.json
RUN npm install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
