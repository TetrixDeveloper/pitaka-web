import Hero from './components/Hero';
import About from '../about';
import UserGuide from '../guides';
import Faqs from '../faqs'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <UserGuide />
      <Faqs />
    </>
  );
};

export default Home;
