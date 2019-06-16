# Node,js, TypeScript, RxJS and Jasmine playground

## Set up

### Locally

To use this playground in your machine, clone and install the repository:

```bash
git clone git@github.com:dtgoitia/rxjs-playground.git
cd rx-playground
npm ci
```

### Installation free

You can access a remote container from your browser. This is a good option if you don't want to install anything in your machine.

To do so, use [GitPod](https://www.gitpod.io/docs/20_Browser_Extension/) to spin-up a container for free for you. Once the container is loaded, the tests will automatically run in watch mode.

## Usage

Add your files under `src/` and ensure your files containing tests end up with `.spec.ts`. Otherwise, Jasmine will not pick them up.

Run the tests in watch-mode:

```bash
npm run test-watch
```

Run the tests only once:

```bash
npm test
```

Being in watch-mode:

  - type `rs` and press ENTER to run the test suit again.
  - press Ctrl + C to exit watch mode

## Debugging

Jasmine allows you to use the old `console.log`, `console.dir`.

## Configuration

Configuration files:

  - Nodemon: `nodemon.json`
  - Node TS: `tsconfig.json`
  - Jasmine: `spec/support/jasmine.json`

Actual setup:

  - `nodemon` is configured to use execute `jasmine-ts`.
  - `jasmine-ts` will by default pick Jasmine's JavaScript configuration (not changed).
  - `jasmine-ts` will use `node-ts`.

Jasmine is set up to use [reporters](https://github.com/bcaudan/jasmine-spec-reporter) for a cleaner test output.

  - [Reporters configuration](https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts)
  - [Custom output](https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/customize-output.md)
