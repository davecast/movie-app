import { Movie } from '@/types/movies'
import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import MoviePoster from './movie-poster'

interface MovieHorizontalListProps {
  movies: Movie[]
  title: string
  className?: string
  loadNextPage?: () => void
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: MovieHorizontalListProps) => {
  const isLoading = useRef(false)

  const cleanTitle = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '') // Elimina espacios y caracteres especiales
      .trim()
  }

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false
    }, 200)
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if (!isEndReached) return
    
    isLoading.current = true

    if (loadNextPage) {
      loadNextPage()
    }
  }

  return (
    <View className={`${className}`}>
      <Text className='text-gray-600 px-4 mb-4 text-2xl font-bold'>{title}</Text>
      <FlatList
        data={movies}
        renderItem={(
          { item }) => (
            <MoviePoster 
              id={item.id} 
              poster={item.poster} 
              className='mr-4'
              smallPoster={true}
            />
          )
        }
        keyExtractor={(item, i) => `${i}-${item.id}-${cleanTitle(item.title)}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 10,
        }}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList