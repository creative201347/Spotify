import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";

const Playlist = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);
  console.log(playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500">
      {playlists.map((playlist) => (
        <p
          key={playlist.id}
          onClick={() => setPlaylistId(playlist.id)}
          className="cursor-pointer hover:text-white"
        >
          {playlist.name}
        </p>
      ))}
    </div>
  );
};

export default Playlist;
