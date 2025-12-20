/**
 * Minimal HTTP server (no frameworks) using Node's built-in `http` module.
 *
 * How to run:
 * - `node index.js`
 *
 * What it exposes:
 * - GET /health  → 200 JSON { "status": "ok" }
 * - anything else → 404 "Not Found"
 *
 * Why this example exists:
 * - to demonstrate the core backend loop:
 *   request comes in → route it → build a response → send it → connection closes
 */
const http = require("node:http");

/** The TCP port our server process will bind to. */
const serverPort = 3000;

/** A small constant so we don't repeat string literals in routing logic. */
const healthCheckPath = "/health";

/**
 * Create an HTTP server.
 *
 * Node calls this handler function once per incoming request.
 *
 * @param {import("http").IncomingMessage} httpRequest
 * @param {import("http").ServerResponse} httpResponse
 */
const server = http.createServer((httpRequest, httpResponse) => {
  // "Routing" (very manual here): we decide what to do based on method + URL path.
  if (httpRequest.method === "GET" && httpRequest.url === healthCheckPath) {
    // Status code communicates outcome (200 = OK).
    httpResponse.statusCode = 200;

    // Headers describe the response body format.
    // This tells clients to parse the body as JSON.
    httpResponse.setHeader("Content-Type", "application/json");

    // `.end(...)` sends the response body and finishes the response.
    // Once you call `end`, the response is considered complete.
    httpResponse.end(JSON.stringify({ status: "ok" }));
    return;
  }

  // Default case: if no route matched, return 404.
  httpResponse.statusCode = 404;
  httpResponse.end("Not Found");
});

// Start listening: Node binds to the port and begins accepting connections.
server.listen(serverPort, () => {
  console.log(`Server running on http://localhost:${serverPort}`);
});