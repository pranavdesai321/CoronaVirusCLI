# corona CLI

Command line interface written in Node.js to check Corona Virus cases and deaths.

This website was created by scraping the website https://www.worldometers.info/coronavirus/ and creating a json api using parsehub

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
corona -h

# Version
corona -V

# API Key Commands
corona key set
corona key show
corona key remove

# Check Total Deaths
corona check deaths

# Check by specific country
corona check deaths --country=countryName


### Version

1.0.0

### License

MIT