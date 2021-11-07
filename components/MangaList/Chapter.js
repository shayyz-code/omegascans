import Image from 'next/image';
// import Link from 'next/link';
// import { storage_config } from '../../backend/storage';
import { useRouter } from 'next/router';

import styles from '../../styles/components/MangaList/Chapter.module.css';

export default function Chapter({ data }) {
  // const tempData = {
  //   comments: [
  //     {
  //       commentID: 1,
  //       by: { email: 'ffg@gmail.com', alias: 'jack' },
  //       content: 'nice.',
  //       postID: 1,
  //       datetime: String(new Date()).split(' '),
  //     },
  //   ],
  // };
  // get path from url showing in address bar
  const router = useRouter();

  const pathname = router.asPath;

  const handleChapterChange = e => {
    const href = pathname.replace(/\/(?:.(?!\/))+$/, `/${e.target.value}`);
    router.push(href);
  };

  return (
    <div className={styles.chapter}>
      <div className={styles.header}>
        <div className={styles.brief}>
          <ul className={styles.briefContent}>
            <li>
              <h5 className={styles.title}>{data.title}</h5>
            </li>
            <li>
              Released on:
              <div className={styles.released}>{data.released}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <ul className={styles.postedContainer}>
            <li>
              Posted by:
              <div className={styles.postedBy}>{data.postedby}</div>
            </li>
            <li>
              Posted on:
              <div className={styles.postedOn}>{data.postedon.join(' ')}</div>
            </li>
            <li>
              Last updated on:
              <div className={styles.lastUpdatedOn}>
                {data.lastupdatedon.join(' ')}
              </div>
            </li>
          </ul>
          <select
            className={styles.relatedChapters}
            onChange={handleChapterChange}
          >
            {data.relatedChapters &&
              data.relatedChapters.length > 0 &&
              data.relatedChapters.map(({ _id, title }) => (
                <option key={_id} value={_id}>
                  {title}
                </option>
              ))}
          </select>
          <div className={styles.imgsContainer}>
            {data.imgs.length &&
              data.imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Poster"
                  style={{ width: '100%', maxWidth: 700, minWidth: 270 }}
                />
              ))}
          </div>
          {/* <ul className={styles.chapters}>
            <li className={styles.chaptersHeader}>Chapters</li>
            {data.chapters.length &&
              data.chapters.map((chapter, index) => (
                <li key={index}>
                  <Link href={`/manga_list/${chapter}`}>
                    
                    <a className={styles.chapter}>{chapter}</a>
                    
                  </Link>
                </li>
              ))}
          </ul> */}
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
