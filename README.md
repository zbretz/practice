# CommonApp

Description:

## Instructions

-   Run `npm install` to install all necessary files.

### Client

-   Type `npm run react-dev` on the terminal to run the client side

### Server

-   Type `npm start` on the terminal to run the server side

### Database

-   Copy `.env-sample` and rename it to `.env`
-   Save all of data config on `.env` file. This is what we'll use to connect to the database
-   Initialize Database - This would create, migrate and seed the roles. This is, hopefully, everything needed to do the initial setup
    -   `npm run db:init` all setup from creation of database to migration to seeding of roles
    -   `npm run db:init:dev` all setup from creation of database to migration to seeding of roles and all dummy data
-   Creating and deleting database
    -   Make sure to have the `.env` file filled out before proceeding
    -   `npx sequelize db:create` to create the database
    -   `npx sequelize db:drop` to delete the database
-   Database migration
    -   `npm run migrate` to migrate all models into the database
    -   `npm run migrate:undo` to undo last migration
    -   `npm run migrate:undo:all` to undo all migration
-   Database seeding
    -   `npm run seed:roles` to seed just the roles
    -   `npm run seed -- --seed [seedfile]` to seed a specific file. File should be inside the seed folder
    -   `npm run seed:all` to seed all
    -   `npm run seed:undo` to undo last seeding
    -   `npm run seed:undo:all` to undo all seeding
