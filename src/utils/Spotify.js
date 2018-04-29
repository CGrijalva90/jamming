let accessToken;
const clientId = '72a03f9666604db4b5452d8752ecb3a5';
const redirectUri = 'http://localhost:3000/';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = expiresInMatch[1];
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    const headers = { headers: { Authorization: `Bearer ${accessToken}` } };
    fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
       headers
    )
      .then(res => {
        return res.json();
      })
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        console.log(jsonResponse.tracks.items);
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default Spotify;
