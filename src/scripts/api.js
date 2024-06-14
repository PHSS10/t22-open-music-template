// api.js

export const fetchAlbums = async () => {
    const url = 'https://openmusic-fake-api.onrender.com/api/musics';
  
    try {
      const response = await fetch(url);
  
      if (response.ok) {
        const albums = await response.json();
        return albums;
      } else {
        console.error('Erro ao obter álbuns:', response.status, response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      return [];
    }
  };
  