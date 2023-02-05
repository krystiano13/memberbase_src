import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import err404 from '../images/error.svg';
import '../styles/dist/404.css';


interface Error404Interface {
    portrait : boolean
}

const Error404:React.FC<Error404Interface> = ({ portrait }) => {
    return (
      <>
        <Navbar portrait={portrait} />
        <main className="ErrorWrapper">
          <img className="ErrorWrapper__image" src={err404} alt="error 404 image" />
          <h1 className="ErrorWrapper__title">Page Not Found</h1>
          <h2 className="ErrorWrapper__subtitle">
            The page you are looking for doesn't exist or has been moved.
          </h2>
          <button className='ErrorWrapper__button'>Go to Home</button>
        </main>
        <Footer />
      </>
    );
}

export default Error404;