import Book1 from '../public/assets/Book1.webp'
import Book2 from '../public/assets/Book2.webp'
import Book3 from '../public/assets/Book3.webp'
import Book4 from '../public/assets/Book4.webp'
import Book5 from '../public/assets/Book5.webp'
import Book6 from '../public/assets/Book6.webp'
import Book7 from '../public/assets/Book7.webp'
import Book8 from '../public/assets/Book8.webp'
import Book from './Book'
import { Fade } from 'react-awesome-reveal'
const ProjectsSection = () => {
  return (
    <section id='mybooks' className='text-center'>
      <Fade cascade> 
        <h3 className='text-primary font-bold'>Projects</h3>
        <h3 className='text-slate-800 font-bold text-2xl md:text-4xl lg:text-5xl mt-2 mb-10'>
            My Other Books
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {[Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8].map((book, index) => (
                <Book image={book} key={index} />
            ))}
        </div>
        </Fade>
    </section>
  )
}

export default ProjectsSection