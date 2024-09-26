// this is wrapped in an `async` function
// you can use await throughout the function
const descriptionsToRewrite = JSON.parse(inputData.descriptionsToRewrite);


const chunkArray = (array, chunkSize) => {
  const chunks = [];
  let chunkIndex = 0; // Initialize a counter for chunk labels
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
    chunkIndex++; // Increment the chunk counter
  }
  return chunks;
};

const chunks = [...chunkArray(descriptionsToRewrite, 10)];
const length = chunks.length;
  output = {chunks:JSON.stringify(chunks),length:length}





