import React from 'react';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import More from '../components/More';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface HomeInterface {
    portrait : boolean,
    route : string
}

const Home:React.FC<HomeInterface> = ({ portrait,route }) => {
    const [searchResult,setSearchResult] = React.useState<string>('');
    const handleSearch = (value:string) => {
      setSearchResult(value);
    }
    return (
      <>
        <Navbar handleSearch={handleSearch} portrait={portrait} />
        <Hero portrait={portrait} route={route} />
        <Resources search={searchResult}/>
        <More />
        <Footer />
      </>
    );
}

export default Home;