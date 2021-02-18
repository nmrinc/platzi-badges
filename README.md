# Platzi Badges

## This repository it's intended for the classes of the **Platzi's** _React.js Course_

---

It's based on a create-react-app project and cloned from the project [platzi-badges](https://github.com/Sparragus/platzi-badges) of the Professor [Richard B. Kaufman-López](https://github.com/Sparragus)

Consists on several branches, one for each class. And the main with the final version of the project.

To run the project clone it, install the dependencies with:

```
>npm  install
```

Then start the development environment with:

```
>npm run start
```

Or build a production copy with:

```
>npm run build
```

---

## Development Process

### 1. Create the app project

First create the project with the next code:

```
>npx create-react-app platzi-badges
```

### 2. Create a mock server

First install needed dependencies to deploy this mock server

```
>npm i -D json-server npm-run-all
```

Create a DB.

Create a mock API to consume the DB.

Create the scripts to deploy both the client and the server

```
"client": "react-scripts start",
"server": "json-server --port 3001 --watch server/db.json",

```

Last with help of npm-run-all create a script to run everything

```
"start": "npm-run-all -p client server",
```

### 3. Develops the SPA

Take special care on divide your code into components, pages and containers. Giving every one the correct hierarchy according on the function that performs.
