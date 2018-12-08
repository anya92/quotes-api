# Quotes REST API

Quotes API endpoints return book quotes in polish.

The base address of API is https://cytaty.herokuapp.com.

## API Reference

| endpoint | method | sample response | description |
|----------|--------|-----------------|-------------|
| /api/quotes | GET | <pre><code>[{<br />  "_id": "59c13a39a3496c1b3c78c74f",<br />  "index": 204,<br />  "text": "Wielcy ludzie nie rodzą się wielkimi, tylko się nimi stają.",<br />  "author": "Mario Puzo – Ojciec Chrzestny",<br />}]<code></pre> | Returns all quotes in database. |
| /api/quotes | POST <hr> Required params: text: `String`<br /> author: `String` | <pre><code>[{<br />  "_id": "59c13a3ba3496c1b3c78c9a3",<br />  "index": 800 <br />  "text": "Są książki, których grzbiety i okładki stanowią najlepszą ich część.",<br />  "author": "Charles Dickens",<br />}]<code></pre> | Creates a new quote. Returns the created quote with the index. |
| /api/quotes/random | GET | <pre><code>[{<br />  "_id": "59c13a39a3496c1b3c78c74e",<br />  "index": 203 <br />  "text": "Codziennie patrz na świat, jakbyś oglądał go po raz pierwszy.",<br />  "author": "Éric-Emmanuel Schmitt – Oskar i pani Róża",<br />}]<code></pre> | Returns a random quote. |
| /api/quotes/:id | GET | <pre><code>[{<br />  "_id": "59c13a38a3496c1b3c78c686",<br />  "index": 3,<br />  "text": "Książki są lustrem: widzisz w nich tylko to, co już masz w sobie.",<br />  "author": "Carlos Ruiz Zafón – Cień wiatru",<br />}]<code></pre> | Returns a single quote with the given index. |

## EXAMPLES

- Random Quotes Machine - Vue app build with Quotes API ([Live](https://cytaty.surge.sh/),  [Github repository](https://github.com/anya92/vue-quotes))
