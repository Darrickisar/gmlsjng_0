// /api/counter.js
import { getData, saveData } from './_data';

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { type } = req.body;
    if(!['candle', 'flower', 'incense'].includes(type)){
      return res.status(400).json({ error: '计数器类型错误' });
    }
    const data = await getData();
    data[`${type}Count`] = (data[`${type}Count`] || 0) + 1;
    await saveData(data);
    res.status(200).json({ newCount: data[`${type}Count`] });
  } else {
    res.status(405).end();
  }
}
