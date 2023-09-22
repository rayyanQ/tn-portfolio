import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, description, image, imageAlt}) {
  return (
    <div className='w-full md:w-5/6 mx-auto flex flex-wrap justify-center align-center p-5 my-5'>
      <div className='w-full md:w-1/2 flex justify-center align-center relative'>
        <Link href='/Volcanoes/story.html'><Image src={image} height='500' width='500' alt={imageAlt} /></Link>
      </div>
      <div className='w-full mt-5 md:mt-0 md:w-1/2 flex flex-col justify-center align-center'>
        <h3 className='text-3xl mb-3 text-center md:text-left'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}