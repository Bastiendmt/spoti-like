import Play from '../../../assets/play.svg?react';
import type { Track } from '../../../types/track.interface';
import formatDate from '../../../utils/formatDate';
import msToMinutesAndSeconds from '../../../utils/msToMinutes';
import styles from './SongItem.module.scss';

interface SongItemPros {
  current: boolean;
  index: number;
  song: Track;
  songClicked: () => void;
}

const SongItem = ({ song, index, songClicked, current }: SongItemPros) =>
  song.track && (
    <div
      className={[
        styles.Item,
        song.track.preview_url !== null ? styles.Enabled : styles.Disabled,
      ].join(' ')}
      // biome-ignore lint/a11y/useSemanticElements: clickable div is fine
      role="button"
      tabIndex={0}
      onClick={songClicked}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          songClicked();
        }
      }}
    >
      <div className={styles.Index}>
        <span className={current ? 'playing' : ''}>{index + 1}</span>
        <Play className={styles.IndexPlay} />
      </div>

      <div className={styles.Title}>
        {song.track.album.images?.[0]?.url && (
          <img src={song.track.album.images[0].url} alt="cover img" />
        )}
        <div className={styles.NameContainer}>
          <div className={styles.Name}>
            <span className={current ? 'playing' : ''}>{song.track.name}</span>
          </div>
          {song.track.explicit && <span className={styles.Explicit}>e</span>}
          <span
            className={[
              styles.Artist,
              song.track.explicit ? styles.Artist_sub : styles.Artist_badge,
            ].join(', ')}
          >
            {song.track.artists[0].name}
          </span>
        </div>
      </div>
      <div>{song.track.album.name}</div>
      <div>{formatDate(song.added_at)}</div>
      <div className={styles.Length}>
        {msToMinutesAndSeconds(song.track.duration_ms)}
        {/* should be in another column */}
        {/* <button type="button" className={styles.More} tabIndex={-1}>
                ...
              </button> */}
      </div>
    </div>
  );

export default SongItem;
