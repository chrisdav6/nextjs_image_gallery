const Image = () => {
  return (
    <a href='#' className='group'>
      <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
        <img
          className='group-hover:opacity-75'
          src='https://bit.ly/placeholder-img'
          alt='Image'
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>Chris Davis</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>@chrisdav</p>
    </a>
  );
};

export default Image;
