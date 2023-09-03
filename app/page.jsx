"use client"
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Main from '@/components/main/Main'
import About from '@/components/About/About'
import Title from '@/components/Title/Title'
import Services from '@/components/services/Services'
import Visit from '@/components/visit/Visit'
import Footer from '@/components/footer/Footer'
import Testimonials from '@/components/testimonials/testimonials'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <ToastContainer />
      <div className={styles.description}>
        <section className={styles.hero}>
        <Navbar />
        <Main />
        </section>
        <section className={styles.about}>
          <Title name="About us"/>
          <About />
        </section>
        <section>
          <Title name="Services"/>
          <Services />
        </section>
        <section style={{marginTop : "100px"}}>
          <Title name="Testimonials"/>
          <Testimonials />
        </section>
        <section>
          <Title name="Have a visit"/>
          <Visit />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  )
}
