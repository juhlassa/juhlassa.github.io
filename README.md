# Pramiat vadit website builder

Website builder powered by [Next.js](https://nextjs.org/).

Production site available at https://pramiatvadit.fi/ (points to http://juhlassa.github.io/).

## Running locally
```
npm install
npm run dev
```
Goto http://localhost:8765.

You may also run the site in the docker container. All you need to do is to build the site and start the container.
```
npm install
npm run build
docker compose up -d
```
This will start nginx web server and mount the site just built and expose port 8777 to the host machine.

Goto http://localhost:8777. If the site is running smoothly in container, it should be safe to deploy changes in production.
Stop the container by running `docker compose down`.

## Deployment into production

Commit your changes to the main branch and push them to the remote counterpart.
```
# do your changes into files
git commit -m "some commit message"
git push origin main
```

Pushing changes triggers a GitHub action to start a process for deployment. Each deploy action is required to be
approved by the site owner. After approval, the action will publish the site on GitHub pages. Publishing takes about
a minute or so.

Goto site to verify changes in production: https://pramiatvadit.fi/.

## Copyright and Usage

The content in folder `/src` and `/public` of this repository, including text, images, and code (unless otherwise
stated), is the intellectual property of the author and is protected by copyright law.

This repository is publicly accessible, but that does not grant permission to reuse, redistribute, or modify
contents in those folders without prior written consent.

If you wish to use any material, please contact the author.
