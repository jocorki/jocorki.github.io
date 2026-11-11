# Just Jonathan

## Local preview

### Docker Compose

With Docker Desktop running, run this from the project directory:

```sh
docker compose up --build
```

Open [localhost:4000](http://localhost:4000). Source files are mounted into the container, so edits rebuild automatically and LiveReload refreshes the browser. Ruby is installed inside the image; no local Ruby installation is needed.

Stop with `Ctrl+C`, then run `docker compose down` to remove the container. Run `docker compose up --build` again after changing the Gemfile or Dockerfile.

### Ruby

With a recent Ruby installed, run these commands from the project directory:

```sh
gem install bundler
bundle install
bundle exec jekyll serve
```

Open [localhost:4000](http://localhost:4000). Jekyll rebuilds the site when you save changes. Stop the server with `Ctrl+C`.

If your Mac's system Ruby is too old, install Ruby with Homebrew first:

```sh
brew install ruby
export PATH="$(brew --prefix ruby)/bin:$PATH"
```

Then run the installation and preview commands above in the same terminal. The PATH change applies only to that terminal session.

## Links
[Github Blog Homepage](https://jocorki.github.io)  
[Source files for Github Blog](https://github.com/jocorki/jocorki.github.io)
