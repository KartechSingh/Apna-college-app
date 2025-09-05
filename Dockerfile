FROM node:22-alpine

WORKDIR /app

COPY . .

*# Install only production dependencies*

RUN npm ci --omit=dev

*# Generate Prisma client*

RUN npx prisma generate

*# Seed the database*

RUN npm run seed

*# Start the server*

CMD [“npm”, “start”]