# duet-duet.com.au

## Dev environment

Should be able to start with `npm start`. It will start the admin, start nextjs. Upon killing node, it will shutdown the admin via ddev.

This is using DDEV for craft, local node for the frontend.

Requirements:
 - DDEV (https://ddev.com/)
 - pnpm (https://pnpm.io)
 - Next.JS (https://nextjs.org/)
 - Tailwind CSS (https://tailwindcss.com/)
 - React (https://reactjs.org/)

### Starting Dev environment

Set up DDEV / install node_modules:

```zsh
npm run dev-setup
```

If you need to import a bootstrap db:

```zsh
npm run admin-initdb
```

### Running dev

There is 2 ways to run the dev environment.

```zsh
npm start
```

Note - killing `npm start` will shutdown the ddev environment as well.

You can access site via:

- frontend: http://localhost:3000
- admin: https://duetadmin.ddev.site/admin


#### Manual Dev

If you want to run the backend/frontend separately:

Fire up the admin (it runs in the background after starting up):

```zsh
npm start-admin
```

Start the frontend (need to control-c to kill server)

```zsh
npm dev
```

Can kill the admin afterwards:

```zsh
npm stop-admin
```

### Default Admin

u: wtadmin
p: changeme


### Access Mailhog

Can verify the details using `npm run admin-ddev describe`

It should be: https://duetadmin.ddev.site:8026/

## Rebuilding notes

This is info for rebuilding the frontend.
### Commands to recreate

If you need to recreate the nextjs environment:

```zsh
create-next-app --ts --use-pnpm  (use duetproperty.com.au)
cd duetproperty.com.au
pnpm install -D tailwindcss postcss autoprefixer
pnpx tailwindcss init -p

``` 
