# Refactor Code Exercise
A simple backend project with unfinished refactorings.

---

This repo contains a simple server side app, which has ongoing refactorings in it's `/src/app.js` file.

We'll leave out further context for this fictional app. Use as you wish; find good or bad design, finish the refactorings any way you wish...

Install dependencies
```
npm install
```

Run app (default port 3000)
```
npm start

or

PORT=1234 npm start
```

Test the API with a REST client
```
# POST localhost:3000/thread/2 { "entry": "JavaScript rocks!" }
curl \
  -H "Content-Type: application/json" \
  -d '{ "entry": "JavaScript rocks!" }' \
  localhost:3000/thread/2
```
