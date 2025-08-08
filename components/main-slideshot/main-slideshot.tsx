import { Movie } from '@/types/movies';
import React, { useRef } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface MainSlideshotProps {
  movies: Movie[];
}

const MainSlideshot = ({ movies }: MainSlideshotProps) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full'>
      <Carousel 
        ref={ref}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshot