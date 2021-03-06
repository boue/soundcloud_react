// presenter
import React from 'react';

function Stream({ tracks = [], onAuth, onPlay }) {
  return (
    <div>
      <div>
        <div>{user.username}</div>
        <button onClick={onAuth} type="button">Login</button>
      </div>
      <br />
      <div>
        {
          tracks.map((track, key) => {
            return (
              <div className="track" key={key}>
                {track.origin.title} 
                <button type="button" onClick={() => onPlay(track)}>Play</button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Stream;
