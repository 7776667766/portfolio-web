import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Skill from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/contact'
import Footer from './component/footer';
function App() {

  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white
snap-y snap-mandatory overflow-y-scroll     overflow-x-hidden scrollbar-thin
    z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">

      {/* { Header}  */}
      <Header />

      {/* { Hero}  */}
      <section id="hero" className='snap-start' >
        <Hero />
      </section>

      {/* { About}  */}

      <section id="about " className='snap-center' >
        <About />

      </section>

      {/* { Experiance}  */}



      <section id="experience" className='snap-center'>

        <Experience />
      </section>
      {/* { Skills}  */}
      <section id="experience" className='snap-center'>

<Skill />
</section>



      {/* {Projects}  */}

<section id="experience" className='snap-center'>
<Projects />
</section>


<section id="contact" className='snap-center'>
<Contact />
</section>


<footer id=" Footer">
<Footer />
</footer> 


    </div>
  );
}

export default App;
