import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

const Busca = () => {
    const [searchText, setSearchText] = useState('')
    const [movieList, setMovieList] = useState([])

    const handleSearch = async () => {
        if (searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
            const json = await result.json()
            setMovieList(json.list)
        } else {
            alert('Digite um filme')
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Pagina de busca</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Buscar filmes</h1>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Digite o nome..." />
                <button className={styles.btnPrimary} onClick={handleSearch}>Buscar</button>
                <ul className={styles.list}>
                    {movieList.map(item => (
                        <li key={item.id}>
                            <a href={`/movie/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="250" />
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </div>);
}

export default Busca;