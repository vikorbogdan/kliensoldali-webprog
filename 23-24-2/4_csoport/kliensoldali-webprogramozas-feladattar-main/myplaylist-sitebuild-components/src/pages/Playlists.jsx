import PlaylistList from "../components/PlaylistList";
import TrackDetails from "../components/TrackDetails";
import TrackList from "../components/TrackList";
import { examplePlaylists } from "../domain/playlist";

const Playlists = () => {
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <PlaylistList data={examplePlaylists} />
        <TrackList />
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};

export default Playlists;
