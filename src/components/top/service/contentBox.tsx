import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  text: string;
  height: string;
}

export default function ContentBox(props: Props){
  return(
    <>
      <div className={`md:h-${props.height} text-2xl py-4 md:text-2xl rounded-3xl border-green-700 border-2 bg-white`}>
        <Image src={props.image}
                width={150}
                height={150}
                alt="オープンストアEC関連事業"
                decoding="async"
        />
        <h4 className="mt-3 mb-5 text-green-700">{props.title}</h4>
        <div className="text-base px-per13 py-2 text-left"
          dangerouslySetInnerHTML=
            {
              {
                __html: `${props.text}`,
              }
            } />
      </div>
    </>
  );
}