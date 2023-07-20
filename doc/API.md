## API Documentation

By default API returns 1 quote per request:

**Request:** `GET /api`<br>
**Response:**

```json
{
  "length": 1,
  "quotes": ["Oooh Oah."]
}
```

You could get multiple quotes by using `qt` (quantity) option:

**Request:** `GET /api?qt=100`<br>
**Response:**

```json
{
  "length": 100,
  "quotes": [
    "Oo Ooaoe!",
    "Oooah Oaoo Oah Ooah, Oooo!",
    "Oooae? Oo, Oooo Ooooh Oae?",
    "Ooo?",
    // and so on...
    "Ooooe Ooaoh. Oaoe Ooh. Oaao?"
  ]
}
```

`qt` should be integer greater than or equal to 1. If it's not, then the option is ignored and you receive standard response (1 quote):

**Request:** `GET /api?qt=abc`<br>
**Response:**

```json
{
  "length": 1,
  "quotes": ["Ooh Oah Ooh Oo Oooe."]
}
```
