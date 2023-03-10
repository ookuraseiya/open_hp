import {client} from '@/lib/client'
import { FaReply } from 'react-icons/fa'
import ReadMoreButton from '@/components/buttons/readMoreButton'
import PrimaryButton from '@/components/buttons/primaryButton'

export default function NewsId({news}:{news:any}) {

  if(typeof news != "undefined"){
    var image:any = ''
    try{
      image = news.image.url
    }catch{
      image = "/images/news/noimage.png"
    }
    return(
      <section className="font-mono bg-white container mx-auto px-5">
        <div className="flex flex-col items-center py-8">
          <div className="flex flex-col w-full mb-12 text-left">
            <div className="w-full mx-auto lg:w-1/2">
              <h1 className="mx-auto md:mt-16 mt-8 mb-6 text-2xl text-center font-semibold text-black lg:text-3xl">{news.title}</h1>
              <img className="rounded-sm w-full" src={image} />
              <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">オープンストアニュース</h2>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">{news.text}</p>
            </div>
          </div>
        {/* <ReadMoreButton href="/news" className="flex">
          <span className="pt-0.5 pr-2"><FaReply/></span>
          一覧画面へ
        </ReadMoreButton> */}
        <PrimaryButton
            href="/news"
            className='text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600'
            span='bg-white'
        >
          一覧画面へ
        </PrimaryButton>
        </div>
      </section>
    );
  }else{
    return(
      <>
      </>
    );
  }
}

export const getStaticPaths = async() => {
  // 少しづつ呼び出して処理する方法を考えるべき
  const offset:number = 0;
  const limit:number = 80;

  const news = await client.get({
    endpoint: "news",
    queries: {
      offset,
      limit
    }
  });
  const paths = news.contents.map((content:any) => `/news/${content.id}`);

  return { paths, fallback: true };
}

export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const news = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: news,
    },
  };
};