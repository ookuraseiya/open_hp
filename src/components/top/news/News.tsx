import ReadMoreButton from '@/components/buttons/readMoreButton'
import Link from "next/link";
import Moment from 'react-moment'


export default function News({newses}: {newses:any}){
  return(
    <section className='bg-gray-100 h-auto w-full'>
      <h2 className='text-4xl md:text-7xl w-full text-center md:pb-10 '>News</h2>
      <div className='flex justify-center'>
        <ol className='space-y-8 w-4/5 md:w-4/12 text-left'>
          {newses.map((news:any) => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>
                <a>
                  <Moment format="YYYY年MM月DD日">
                    {news.createdAt}
                  </Moment>
                  :
                  {news.title}
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className='py-12 md:mt-24'>
          <ReadMoreButton href="/news" />
        </div>
    </section>
  );
}

