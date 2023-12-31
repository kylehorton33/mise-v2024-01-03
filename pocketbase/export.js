import PocketBase from 'pocketbase';
import FileSystem from 'fs';

const { POCKETBASE_URL } = process.env;

const COLLECTION = 'ingredients'
const fields = 'id, name, slug, unit'
const sort = 'slug'

const green = '\x1b[32m';

const pb = new PocketBase(POCKETBASE_URL);

const results = await pb.collection(COLLECTION)
    .getFullList({ fields, sort })

FileSystem.writeFile(`exports/${COLLECTION}.json`, JSON.stringify(results), (err) => {
    if (err) throw err
})

console.log(green, `${results.length} ${COLLECTION} written to exports/${COLLECTION}.json`)
