# wilbur-api

Return to [main](/README.md) document.

## API Documentation

By default API returns 1 quote per request:

**Request:** `GET /api`<br>
**Response:**

```json
{
  "timestamp": "2023-10-10T10:10:10.100Z",
  "status": 200,
  "quotes": ["Oooh Oah."],
  "length": 1,
  "path": "/api"
}
```

You could get multiple quotes by using `qt` (quantity) option:

**Request:** `GET /api?qt=100`<br>
**Response:**

```json
{
  "timestamp": "2023-10-10T10:10:10.100Z",
  "status": 200,
  "quotes": [
    "Oo Ooaoe!",
    "Oooah Oaoo Oah Ooah, Oooo!",
    "Oooae? Oo, Oooo Ooooh Oae?",
    "Ooo?",
    // and so on...
    "Ooooe Ooaoh. Oaoe Ooh. Oaao?"
  ],
  "length": 100,
  "path": "/api?qt=100"
}
```

`qt` should be integer greater than or equal to 1. If it's not, then the option is ignored and you receive standard response (1 quote):

**Request:** `GET /api?qt=abc`<br>
**Response:**

```json
{
  "timestamp": "2023-10-10T10:10:10.100Z",
  "status": 200,
  "quotes": ["Ooh Oah Ooh Oo Oooe."],
  "length": 1,
  "path": "/api?qt=abc"
}
```

**Request:** `GET /wrong`\*<br>
**Response:**

```json
{
  "timestamp": "2023-10-10T10:10:10.100Z",
  "status": 404,
  "error": "Page not found",
  "path": "/wrong"
}
```

\* Actually, any end-point except `/` and `/api`.

Requests of types other then `GET` are not allowed. Response is the same as for `/wrong`.
