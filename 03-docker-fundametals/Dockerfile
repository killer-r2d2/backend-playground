# 1️⃣ Base image (Node runtime)
FROM node:20-alpine

# 2️⃣ Create app directory inside container
WORKDIR /app

# 3️⃣ Copy dependency files first (cache-friendly)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy the rest of the code
COPY . .

# 6️⃣ Build TypeScript
RUN npm run build

# 7️⃣ Expose port (documentation for Docker)
EXPOSE 3000

# 8️⃣ Start the app
CMD ["node", "dist/server.js"]
