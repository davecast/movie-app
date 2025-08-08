import { Movie } from '@/types/movies'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import MoviePoster from './movie-poster'

interface MovieHorizontalListProps {
  movies: Movie[]
  title: string
}

const MovieHorizontalList = ({ movies, title }: MovieHorizontalListProps) => {
  return (
    <View>
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
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 10,
        }}
      />
    </View>
  )
}

export default MovieHorizontalList