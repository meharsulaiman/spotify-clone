import Header from '@/components/Header';
import ListItem from '@/components/ListItem';

export default function Home() {
  return (
    <div
      className='
    h-full
    w-full
    bg-neutral-900
    rounded-lg
    overflow-hidden
    overflow-y-auto
  '
    >
      <Header>
        <div className='mb-2'>
          <h1 className='text-3xl font-semibold text-white'>Welcome back</h1>

          <div
            className='
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          '
          >
            <ListItem
              image='/images/liked.png'
              name='Liked Songs'
              href='liked'
            />
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div
          className='
          flex justify-between
          items-center
        '
        >
          <h1 className='text-2xl font-semibold text-white'>Newest songs</h1>
        </div>
        <div>List of soongs!</div>
      </div>
    </div>
  );
}
