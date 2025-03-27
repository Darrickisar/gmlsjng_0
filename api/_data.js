// /api/_data.js
import { getBlob, putBlob } from 'vercel-blob-storage'; // 假设已安装并配置此模块

const DATA_KEY = 'memorialData';

export async function getData() {
  let data = await getBlob(DATA_KEY);
  if (!data) {
    data = { messages: [], candleCount: 0, flowerCount: 0, incenseCount: 0 };
    await putBlob(DATA_KEY, data);
  }
  return data;
}

export async function saveData(data) {
  await putBlob(DATA_KEY, data);
}
