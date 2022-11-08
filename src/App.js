import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-full	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
