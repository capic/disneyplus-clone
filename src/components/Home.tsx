import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useAppDispatch, useAppSelector } from '../hooks/useAppRedux'
import db from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { IMovie } from '../types'
import { setMovies } from '../features/movie/movieSlice'
import { Unsubscribe } from '@firebase/firestore'

const Home = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  let recommends: IMovie[] = []
  let news: IMovie[] = []
  let originals: IMovie[] = []
  let trendings: IMovie[] = []
  let unsubscribe: Unsubscribe | null = null

  useEffect(() => {
    if (user) {
      unsubscribe = onSnapshot(collection(db, 'movies'), (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          const movie: IMovie = { id: doc.id, ...doc.data() } as IMovie
          switch (movie.type) {
            case 'recommend':
              recommends = [...recommends, movie]
              break
            case 'new':
              news = [...news, movie]
              break
            case 'original':
              originals = [...originals, movie]
              break
            case 'trending':
              trendings = [...trendings, movie]
              break
          }
        })

        dispatch(setMovies({ recommends, news, originals, trendings }))
      })
    } else {
      if (unsubscribe) unsubscribe()
    }
  }, [user])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`

export default Home
