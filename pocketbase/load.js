import PocketBase from 'pocketbase';
import { recipeIngredients } from './data.js';
import { Ingredient } from './class.js';

const { POCKETBASE_URL, PB_USERNAME, PB_PASSWORD, PB_ADMIN_PASSWORD, PB_ADMIN_USERNAME } = process.env;
const green = '\x1b[32m';
const red = '\x1b[31m';

// Initialize PocketBase instance, log in generic user
const pb = new PocketBase(POCKETBASE_URL);
//await pb.collection('users').authWithPassword(PB_USERNAME, PB_PASSWORD);
await pb.collection('users').authWithPassword(PB_USERNAME, PB_PASSWORD);
await pb.admins.authWithPassword(PB_ADMIN_USERNAME, PB_ADMIN_PASSWORD);

// Loop through each and create entries. Use class intance to create
// relevant fields and define keys
// Scenario 1: Load from user input data (minimal fields, generate slug, 
// let db assign id)
recipeIngredients.forEach(async (i) => {
    const name = 'recipeIngredients'
    //const datum = (i.unit) ? new Ingredient(i, i.unit) : new Ingredient(i)
    try {
        //const result = await pb.collection(name).create(datum, { requestKey: datum.key() })
        //console.log(green, `[CREATE] ${datum.key()} ${result.id}`)
        //console.log(i)
        const result = await pb.collection(name).update(i.id, i, {requestKey: i.id})
        console.log(green, `[UPDATED] ${result.id} ${result.name}`)
    } catch (err) {
        console.log(err)
        const errMsg = JSON.stringify(err.response.data);
        //console.log(red, `[ERROR] ${datum.key()} - ${errMsg}`)
        console.log(red, `[ERROR] ${i.name} ${errMsg}`)
    }
})
// Scenario 2: Load from previous export (all fields, including id)
//