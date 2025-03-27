// /api/_data.js
import { getBlob, putBlob } from 'vercel-blob-storage';

const DATA_KEY = 'memorialData';

export async function getData() {
  let data = await getBlob(DATA_KEY, "vercel_blob_rw_XUNFJUgwGuo8v8MC_ETEualt4YVHQJOGCiI9N53Qdhkqj2G");
  if (!data) {
    data = { messages: [], candleCount: 0, flowerCount: 0, incenseCount: 0 };
    await putBlob(DATA_KEY, data, process.env.BLOB_READ_WRITE_TOKEN);
  }
  return data;
}

export async function saveData(data) {
  await putBlob(DATA_KEY, data,"vercel_blob_rw_XUNFJUgwGuo8v8MC_ETEualt4YVHQJOGCiI9N53Qdhkqj2G");
}
