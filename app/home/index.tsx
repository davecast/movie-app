import { useMovies } from '@/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const HomeScreen = () => {
  const { moviesQuery } = useMovies();
  const { data: movies, isLoading, error } = moviesQuery;

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size="large" color="#ef4444" />
        <Text className='text-gray-600 mt-2'>Loading movies...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-red-500 text-xl font-bold'>Error</Text>
        <Text className='text-gray-600 mt-2 text-center px-4'>
          {error instanceof Error ? error.message : 'Error loading movies'}
        </Text>
      </View>
    );
  }

  return (
    <View className='flex-1 items-center justify-center' >
      <Text className='text-red-500 text-2xl font-bold'>Movie App</Text>
      <Text className='text-gray-600 mt-2'>Movies loaded: {movies?.length || 0}</Text>
    </View>
  )
}

export default HomeScreen