import { useState } from 'react';
import Image from 'next/image';

const ImageContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <a href='#' className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        <Image
          className={`duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }`}
          src='https://bit.ly/placeholder-img'
          alt='Image'
          layout='fill'
          objectFit='cover'
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>Chris Davis</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>@chrisdav</p>
    </a>
  );
};

export default ImageContainer;
