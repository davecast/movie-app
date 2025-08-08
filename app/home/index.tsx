import MainSlideshot from '@/components/main-slideshot';
import { MovieHorizontalList } from '@/components/movies';
import { useMovies } from '@/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { 
    nowPlayingQuery, 
    popularMoviesQuery, 
    topRatedMoviesQuery, 
    upcomingMoviesQuery 
  } = useMovies();

  const { data: moviesNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying } = nowPlayingQuery;
  const { data: moviesPopular, isLoading: isLoadingPopular, error: errorPopular } = popularMoviesQuery;
  const { data: moviesTopRated, isLoading: isLoadingTopRated, error: errorTopRated } = topRatedMoviesQuery;
  const { data: moviesUpcoming, isLoading: isLoadingUpcoming, error: errorUpcoming } = upcomingMoviesQuery;

  if (isLoadingNowPlaying || isLoadingPopular || isLoadingTopRated || isLoadingUpcoming) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size="large" color="#ef4444" />
        <Text className='text-gray-600 mt-2'>Loading movies...</Text>
      </View>
    );
  }

  if (errorNowPlaying || errorPopular || errorTopRated || errorUpcoming) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-red-500 text-xl font-bold'>Error</Text>
        <Text className='text-gray-600 mt-2 text-center px-4'>
          {errorNowPlaying instanceof Error ? errorNowPlaying.message : 'Error loading movies'}
          {errorPopular instanceof Error ? errorPopular.message : 'Error loading movies'}
          {errorTopRated instanceof Error ? errorTopRated.message : 'Error loading movies'}
          {errorUpcoming instanceof Error ? errorUpcoming.message : 'Error loading movies'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-20'
    >
      <View className='flex-1' style={{ paddingTop: safeArea.top }}>
      {/* Now playing movies */}
      <View className='pt-6'>
        <Text className='text-gray-600 px-4 text-2xl font-bold'>Movies App</Text>
        <MainSlideshot movies={moviesNowPlaying || []} />
      </View>

      {/* Popular movies */}
      <View className='pt-6'>
        <MovieHorizontalList 
          movies={moviesPopular?.pages.flat() || []} 
          title='Popular movies'  
          loadNextPage={popularMoviesQuery.fetchNextPage}
        />
      </View>

      {/* Top rated movies */}
      <View className='pt-6'>
        <MovieHorizontalList 
          movies={moviesTopRated?.pages.flat() || []} 
          title='Top rated movies'
          loadNextPage={topRatedMoviesQuery.fetchNextPage}
        />
      </View>

      {/* Upcoming movies */}
      <View className='pt-6'>
        <MovieHorizontalList 
          movies={moviesUpcoming?.pages.flat() || []} 
          title='Upcoming movies'
          loadNextPage={upcomingMoviesQuery.fetchNextPage}
        />
      </View>
    </View>
    </ScrollView>
  )
}

export default HomeScreen