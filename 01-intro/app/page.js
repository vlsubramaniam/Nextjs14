import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  console.log('Home Page'); // This will not be displayed on the screen as this is a server component
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.js Tutorial</h1>
      <Link href='/client' className='btn btn-accent'>
        {' '}
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
