import Head from 'next/head'
import styles from '../../styles/Home.module.scss'


export default function MovieDetail({ info }) {

  return (
    <div className={styles.containerDetail}>
      <Head>
        <title>Detalhes do filme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.detailMovie}>
        <div className={styles.imageDetail}>
          <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="1000" />
        </div>

        <div className={styles.description}>
          <h1>{info.title}</h1>
          <div className={styles.circle}>
            <h2>{info.vote_average}</h2>
          </div>
          <h2> <a href={`${info.homepage}`} target="_blank">See more</a> </h2>
          <small>Poularity: </small>
          <h2>{info.popularity}</h2>
          <h2>{info.runtime} min</h2>
          <small>Genre: </small>
          <h2>{info.genres[0].name}</h2>
          <small>Release date</small>
          <h2>{info.release_date}</h2>
          <small>Description</small>
          <h3>{info.overview}</h3>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://list-movie-next-js.vercel.app/api/movie/${context.params.id}`)
  const json = await res.json()

  return {
    props: {
      info: json.info
    }
  }
}

