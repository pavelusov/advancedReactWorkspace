export default {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "required": [
    "comments",
    "auth"
  ],
  "properties": {
    "comments": {
      "$id": "#/properties/comments",
      "type": "array",
      "items": {
        "$id": "#/properties/comments/items",
        "type": "string",
        "pattern": "^(.*)$"
      }
    },
    "auth": {
      "$id": "#/properties/auth",
      "type": "boolean"
    }
  }
}