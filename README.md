# Artillery game
browser game mimicking the classic two-player, turn-based artillery game, based on Angular and Node

### Prerequisite

- Please install NodeJS 16.19.0 following this [guide](https://nodejs.org/en/download/)
- Please install Angular 15.2.0 following this [guide](https://angular.io/guide/setup-local)

### Install

1. Open the terminal

2. Change working directory to the root directory of the project

3. Install dependencies

```
$ npm install
```

4. Run the web server for the backend

```
$ node server.js
```

### Quick Usage

For a default set of contracts and tests, run the following within an empty project directory:

```
$ truffle init
```

From there, you can run `truffle compile`, `truffle migrate` and `truffle test` to compile your contracts, deploy those contracts to the network, and run their associated unit tests.

Truffle comes bundled with a local development blockchain server that launches automatically when you invoke the commands above. If you'd like to [configure a more advanced development environment](https://trufflesuite.com/docs/truffle/reference/configuration) we recommend you install the blockchain server separately by running `npm install -g ganache` at the command line.

- [ganache](https://github.com/trufflesuite/ganache): a command-line version of Truffle's blockchain server.
- [ganache-ui](https://github.com/trufflesuite/ganache-ui): A GUI for the server that displays your transaction history and chain state.

### Documentation

Please see the [Official Truffle Documentation](https://trufflesuite.com/docs/) for guides, tips, and examples.

### Development

We welcome pull requests. To get started, just fork this repo, clone it locally, and run:

```shell
# Install
npm install -g yarn
yarn bootstrap

# Test
yarn test

# Adding dependencies to a package
cd packages/<truffle-package>
yarn add <npm-package> [--dev] # Use yarn
```

If you'd like to update a dependency to the same version across all packages, you might find [this utility](https://www.npmjs.com/package/lerna-update-wizard) helpful.

_Notes on project branches:_

- `master`: Stable, released version (v5)
- `beta`: Released beta version
- `develop`: Work targeting stable release (v5)
- `next`: Not currently in use

Please make pull requests against `develop`.

There is a bit more information in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

### License
