import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-full	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
