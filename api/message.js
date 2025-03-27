// /api/message.js
import { getData, saveData } from './_data';

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { message } = req.body;
    if(!message){
      return res.status(400).json({ error: '留言内容不能为空' });
    }
    const data = await getData();
    data.messages.push(message);
    await saveData(data);
    res.status(200).json({ messages: data.messages });
  } else if(req.method === 'GET'){
    const data = await getData();
    res.status(200).json({ messages: data.messages });
  } else {
    res.status(405).end();
  }
}
