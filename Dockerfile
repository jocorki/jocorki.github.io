FROM ruby:3.3-bookworm

WORKDIR /app

# Keep dependencies separate from the source mount used during development.
COPY Gemfile /opt/jekyll/Gemfile
ENV BUNDLE_GEMFILE=/opt/jekyll/Gemfile
RUN bundle install

EXPOSE 4000 35729
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling", "--destination", "/tmp/jekyll-site"]
