
import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  text: string;
}

export default function ServiceContent(props: Props){
  return(
    <>
      <div className="md:w-service bg-white">
        <div className='text-2xl py-4 md:text-2xl rounded-3xl border-green-700 border-2'>
          <Image src={props.image}
                  width={150}
                  height={150}
                  alt="オープンストアEC関連事業"
                  decoding="async"
          />
          <h4 className="mt-3 mb-5 text-green-700">{props.title}</h4>
          <div className="text-base px-per13 py-2 text-left">
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}