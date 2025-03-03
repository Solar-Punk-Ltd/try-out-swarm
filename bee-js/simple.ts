import { Duration, Bee, Reference } from '@upcoming/bee-js';

const bee = new Bee('http://localhost:1633');

async function getBatch() {
  const ids = await bee.getAllPostageBatch();
  // for the sake of this demo if there is a batch already created we will use it
  // otherwise we will create a new one
  // on the other hand this would not be correct in a real world scenario
  // stamps can be invalid, full etc...
  // This amount costed aprox 1 bzz the time I tested it
  const batchId = ids.length > 0 ? ids[0].batchID : await bee.buyStorage(16, Duration.fromHours(48));
  return batchId;
}

async function upload() {
  const stamp = await getBatch();
  const { reference } = await bee.uploadData(stamp, JSON.stringify({ data: 'Hello, world!' }));
  return reference;
}

async function download(reference: Reference) {
  const data = await bee.downloadData(reference);
  return data.toJSON();
}

async function main() {
  const reference = await upload();
  console.log('Uploaded data with reference:', reference);

  const downloadedData = await download(reference);
  console.log('Downloaded data:', downloadedData);
}

main();
