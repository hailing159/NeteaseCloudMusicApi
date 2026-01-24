import { getPlaylistDetail, getSongDetail } from '../../module/netease'; // 你原本的 module

export default async function handler(req, res) {
  const { id } = req.query;
  if(!id) return res.status(400).json({error:'缺少歌单id'});
  try{
    const playlist = await getPlaylistDetail(id);
    const trackIds = playlist.trackIds.map(t=>t.id);
    const songs = [];
    for(let i=0;i<trackIds.length;i+=200){
      const part = trackIds.slice(i,i+200);
      const detail = await getSongDetail(part.join(','));
      songs.push(...detail.songs);
    }
    res.status(200).json({songs});
  }catch(e){
    res.status(500).json({error:e.message});
  }
}
