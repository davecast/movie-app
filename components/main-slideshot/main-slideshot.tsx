import { MoviePoster } from '@/components/movies';
import { Movie } from '@/types/movies';
import { AnimatePresence, View as ViewMoti } from 'moti';
import React, { useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface MainSlideshotProps {
  movies: Movie[];
}

const MainSlideshot = ({ movies }: MainSlideshotProps) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <AnimatePresence>
      <ViewMoti
        className='h-[250px] w-full'
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 600,
          delay: 500,
        }}
      >
        <Carousel 
          ref={ref}
          data={movies}
          renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
          width={200}
          height={350}
          style={{
            width: width,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mode='parallax'
          loop={true}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}

          defaultIndex={1}
        />
      </ViewMoti>
    </AnimatePresence>
  )
};

export default MainSlideshot