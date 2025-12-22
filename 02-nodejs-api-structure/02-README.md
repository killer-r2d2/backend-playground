# Day 2 – Node.js API structure (clean & DRY)

**Theory (15 min)**  
- Folder structure:  
  - `routes/`  
  - `controllers/`  
  - `services/`  
- Why separation matters  
- 👉 Boot.dev: Backend architecture

---

**Practice (45 min)**  
- Refactor yesterday’s server into new structure:  
  ```
  src/
    ├─ routes/
    ├─ controllers/
    ├─ services/
    └─ server.ts
  ```
- Add new routes:  
  - `GET /time`  
  - `POST /echo`


**One-sentence summary (for a junior dev)**

server → starts the app

routes → define URLs

controllers → handle HTTP

services → do the real work


**How to add typescript**

1. Install typescript
2. Create a tsconfig.json file
3. Add the following to the tsconfig.json file:
4. Run the command `tsc` to compile the typescript code to javascript
5. Run the command `node dist/server.js` to start the server