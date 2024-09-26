const store = StoreClient('ee4b3a19-486b-4b56-a69c-79f13f38e429');
const rewrittenDescriptionChunk = JSON.parse(inputData.rewrittenDescriptionChunk);
const index = Number(inputData.index);

// Store the current chunk
await store.set(`rewrittenDescriptionChunk${index}`, rewrittenDescriptionChunk);

output = {rewrittenDescriptionChunk:rewrittenDescriptionChunk};
        
