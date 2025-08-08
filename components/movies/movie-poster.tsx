import React from 'react';
import { Image, Pressable } from 'react-native';

interface MoviePosterProps {
  id: string,
  poster: string | null,
  smallPoster?: boolean,
  className?: string,
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-80 transition-opacity duration-300 ${className}`}
    >
      {poster && (
        <Image 
          source={{ uri: poster }} 
          className='shadow-lg rounded-2xl w-full h-full' 
          style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
          }}
          resizeMode='cover'
        />
      )}
    </Pressable>
  )
}

export default MoviePoster