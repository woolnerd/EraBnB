FROM ruby:2.7.3
RUN apt-get update && apt-get install -y npm nodejs postgresql-client
WORKDIR /erabnb
COPY Gemfile* .
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
