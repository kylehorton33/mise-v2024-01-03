# How to use

- Run `npm i` then `npm run db`
- Create an admin user in the Admin UI at [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)
- On Admin UI > Settings > Import collections: Load from JSON file `pb_schema.json`
- On Admin UI: Collections > users > create a new user and save details to `.env`

# pocketbase testing

1. load new ingredients from `npm run load`
2. export existing db info from `npm run export`

# set up

- run `./pb_setup.sh`
- run `npm run db` and visit Admin UI: [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)
- On Admin UI: create admin user

