# Node,js, TypeScript, RxJS and Jasmine playground

## Usage

Run the tests:

```bash
npm test
```

Run the tests in watch-mode:

```bash
npm run test-watch
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
