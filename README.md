# Show me the trailer
Very small program that will receive an URL for a viaplay movie and will return the trailer from the movie database.

## Run server
```sh
npm start
```
Now you can go to http://localhost:3000/trailer?url=<link> to get the trailer

## Unit tests
### Single run
```sh
npm test
```
### Watch mode
```sh
npm run test-watch
```

## Linting
```sh
npm run lint
```

## Further considerations & next steps
* Make parameter validation for the url
* Better error handling
* Some defensive code
* Unit tests for the trailer.client (didn't made it as it was harder than the remaining as I had to use something like rewire to mock the dependency from movieDB)
* Some light integration tests mocking only the external http requests
* Depending on the use of the server, a cache might be of interest
