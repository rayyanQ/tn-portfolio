import Image from 'next/image';

export default function Card({ title, description, image, imageAlt}) {
  return (
    <div className='w-5/6 mx-auto flex justify-center align-center p-5 my-5'>
      <div className='w-1/2 flex justify-center align-center relative'>
        <Image src={image} width='500' height='500' alt={imageAlt} />
      </div>
      <div className='h-48 w-1/2 flex flex-col justify-start align-center'>
        <h3 className='text-3xl mb-3'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}