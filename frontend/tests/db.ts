type Record = {
    id: string
}

export async function clearDB(pb: any) {
    console.log('---CLEARING ALL RECORDS FROM TEST DATABASE---')
    try {
        const ingredients: Record[] = await pb.collection('ingredients').getFullList({fields: 'id'})
        const recipes: Record[] = await pb.collection('recipes').getFullList({fields: 'id'})
        
        ingredients.forEach((ingredient) => {
            const { id } = ingredient
            pb.collection('ingredients').delete(id, {requestKey: id})
        });
        recipes.forEach((recipe) => {
            const { id } = recipe
            pb.collection('recipes').delete(id, {requestKey: id})
        });
    } catch (e) {
        console.log(e)
    }
}