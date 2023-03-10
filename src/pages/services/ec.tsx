import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
// 実績用のコンポーネント追加
import Achievement from '@/components/layout/Achievement'
import BackServiceButton from '@/components/organisms/backServiceButton'
import UnderText from '@/components/layout/underText'

interface TopTextWord{
  text: string
}

interface Explanation{
  text: string,
  image: string,
  width: string,
  height: string,
  alt_text: string
}

interface Achievement{
  datas: any[]
}

export default function Home(props:any){
  const explanation1: Explanation = {
    // text: 'オープンストアは国内では未だ少ないshopify experts の公認パートナーです。Shopifyの魅力は、多様なカスタマイズ性、充実した外部サービスとの連携、 海外展開(越境)への対応、強固なセキュリティーなど多岐に渡ります。これまで開発に多大な時間と費用を要したECサイトもShopifyを活用すれば、低予算かつ高機能なオリジナルショップを短期間で開設することができます。',
    text: props.data.ecText,
    // image: '/images/service/ec/op_shopify.png',
    image: props.data.ecImage.url,
    width: '413',
    height: '202',
    alt_text: 'オープンストアとshopify'
  }

  const seoText:string=`オリジナルブランドの作成からECサイトの構築、集客、運用まで一括でサポートいたします。オープンストアにはEC構築、運用のエキスパートが多数在籍しておりますので、安心してお任せください。`

  return(
    <>
      <Seo templateTitle='オープンストアEC事業' text={seoText} />
      <div className="afterBorder">
      <TopContent title="Shopify Expert" text="Shopify エキスパート" />
      </div>
      <UnderText image={explanation1.image} text={explanation1.text} altText={explanation1.text} width={explanation1.width} height={explanation1.height} />
      <Achievement datas={props.achievement} bgColor="gray-50" children={<BackServiceButton />} />
      <style jsx>{`
        .afterBorder {
          position: relative;
        }

        .afterBorder::after {
          content: "";
          width: 15%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 55%;
          transform: rotate(70deg);
          z-index: 1;
          bottom: 44%;
        }

        @media screen and (max-width: 768px) {
        .afterBorder {
        }
        .afterBorder::after {
          width: 32%;
          left: 60%;
          bottom: 41%;
        }
        }
          `}</style>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const achievement = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/achievement?filters=category[contains]Shopify`, key)
  .then(res => res.json())
  .catch(() => null);

  const data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/service`, key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props:{
      achievement: achievement.contents,
      data: data
    }
  };
};