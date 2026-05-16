#!/bin/sh

docker compose down
docker run --rm -v .:/app -w /app -p 8765:8765/tcp -it node:24-slim npm run build
docker compose up -d
#open http://localhost:8777
