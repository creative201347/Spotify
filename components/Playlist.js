import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atom/playlistAtom";

const Playlist = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);

  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 space-y-1">
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
