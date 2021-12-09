import Image from 'next/image'
type Props = {
  image: string;
  text: string;
  width: string;
  height: string;
  alt_text: string;
}

export default function RightText(props: Props){
  return(
    <>
      <div>
        <section className='md:flex md:justify-center md:space-x-10'>
          {/* <div className={`${props.bg} bg-cover bg-no-repeat w-5/12`}> */} 
          <div>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
          </div>
          <div className='text-base mt-12 md:mt-0 md:w-4/12 md:text-xl'
            dangerouslySetInnerHTML={{
              __html: `${props.text}`,
            }}
          >
          </div>
        </section>
      </div>
    </>
  );
}