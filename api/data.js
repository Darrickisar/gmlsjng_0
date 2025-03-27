// /api/data.js
import { getData } from './_data';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await getData();
    res.status(200).json(data);
  } else {
    res.status(405).end(); // 只支持 GET 请求
  }
}
