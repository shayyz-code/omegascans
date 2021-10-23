import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/MangaList/Manga.module.css';

export default function Manga({ data }) {
  const tempData = {
    comments: [
      {
        commentID: 1,
        by: { email: 'ffg@gmail.com', alias: 'jack' },
        content: 'nice.',
        postID: 1,
        datetime: String(new Date()).split(' '),
      },
    ],
  };

  return (
    <div className={styles.manga}>
      <div className={styles.header}>
        <Image
          src={data.cover || 'https://via.placeholder.com/600/92c952'}
          alt="Cover"
          layout="fill"
        />
        <div className={styles.brief}>
          <div className={styles.profile}>
            <Image
              src={data.profile || 'https://via.placeholder.com/600/92c952'}
              alt="Profile"
              layout="fill"
            />
          </div>
          <ul className={styles.briefContent}>
            <li>
              <h5 className={styles.title}>{data.title}</h5>
            </li>
            <li>
              <div className={styles.rating}>{data.rating}</div>
            </li>
            <li>
              <div className={styles.status}>{data.status}</div>
            </li>
            <li>
              Author:
              <div className={styles.author}>{data.author}</div>
            </li>
            <li>
              Artist:
              <div className={styles.artist}>{data.artist}</div>
            </li>
            <li>
              Released on:
              <div className={styles.released}>{data.released}</div>
            </li>
            <li>
              Type:
              <div className={styles.type}>{data.type}</div>
            </li>
            <li>
              Genres:
              <div className={styles.genres}>
                {data.genres.length &&
                  data.genres.map((genre, index) => (
                    <div key={index}>{genre}</div>
                  ))}
              </div>
            </li>
            <li>
              Serialization:
              <div className={styles.serialization}>{data.serialization}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <p className={styles.review}>{data.review}</p>
          <ul className={styles.postedContainer}>
            <li>
              Posted by:
              <div className={styles.postedBy}>{data.postedBy}</div>
            </li>
            <li>
              Posted on:
              <div className={styles.postedOn}>{data.postedOn}</div>
            </li>
            <li>
              Last updated on:
              <div className={styles.lastUpdatedOn}>{data.lastUpdatedOn}</div>
            </li>
          </ul>
          <ul className={styles.chapters}>
            <li className={styles.chaptersHeader}>Chapters</li>
            {data.chapters.length &&
              data.chapters.map((chapter, index) => (
                <li key={index}>
                  <Link href={`/manga_list/${chapter}`}>
                    {/*chapter id */}
                    <a className={styles.chapter}>{chapter}</a>
                    {/*chapter title */}
                  </Link>
                </li>
              ))}
          </ul>
          {/* <ul className={styles.comments}>
            <li className={styles.commentsHeader}>Comments</li>
            {tempData.comments.map(({ by, postName, datetime }, index) => (
              <li key={index}>
                <div className={styles.comment}>
                  <div className={styles.by}>{`${by.alias} (${by.email})`}</div>
                  <div className={styles.postID}>{postName}</div>
                  <div className={styles.datetime}>
                    <div>{datetime[0]}</div>
                    <div>{`${datetime[1]} ${datetime[2]}  ${datetime[3]}`}</div>
                    <div>{datetime[4]}</div>
                    <div>{datetime[5]}</div>
                    <div>{`${datetime[6]} ${datetime[7]}`}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
