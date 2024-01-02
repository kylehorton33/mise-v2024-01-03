import PocketBase from 'pocketbase';
import FileSystem from 'fs';

// DONE: update collections to include `user` that created each entry
// TODO: custom IDs to include name of INGs. may create issues in overlapping names?
// TODO: ingredients can also be recipes? 'recipe' relation field on 'ingredient'
// TODO: the above may require then creating recipe 'categories'. to filter out all the 'mix' recipes

const { POCKETBASE_URL } = process.env;

const COLLECTION = 'ingredients'
const fields = 'id, recipe'
const sort = 'id'

const green = '\x1b[32m';

const pb = new PocketBase(POCKETBASE_URL);

const results = await pb.collection(COLLECTION)
    .getFullList({ fields, sort })

FileSystem.writeFile(`exports/${COLLECTION}.json`, JSON.stringify(results), (err) => {
    if (err) throw err
})

console.log(green, `${results.length} ${COLLECTION} written to exports/${COLLECTION}.json`)
