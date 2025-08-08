import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { getNowPlaying } from '@/core/services/now-playing.services';
import { Movie } from '@/types/movies';
import './global.css';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const nowPlaying = await getNowPlaying();
        setMovies(nowPlaying);
      } catch (err) {
        setError(typeof err === 'string' ? err : 'Error loading movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
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
        <Text className='text-gray-600 mt-2 text-center px-4'>{error}</Text>
      </View>
    );
  }

  return (
    <View className='flex-1 items-center justify-center' >
      <Text className='text-red-500 text-2xl font-bold'>Movie App</Text>
      <Text className='text-gray-600 mt-2'>Movies loaded: {movies.length}</Text>
    </View>
  )
}

export default App