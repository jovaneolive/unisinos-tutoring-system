import React from 'react';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Unisinos Academic Tutoring System
          </h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <p className='text-lg'>
            Welcome to the Unisinos Academic Tutoring Registration System.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
