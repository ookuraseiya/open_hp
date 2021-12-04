import { useState, useEffect} from "react";

import { useRouter } from 'next/router';

import Seo from '@/components/Seo';
import BlogList from '@/components/layout/blogTemplate/BlogList';


export default function User(){
  const [blogsQuery, setBlogsQuery] = useState<{ keyword:string } | null>(null);
  const [blogs, setBlogs] = useState<any>()
  const router = useRouter();

  useEffect(() => {
    const urlQuery:any = router.query;

    if(urlQuery != null || typeof urlQuery !== 'undefined'){
      setBlogsQuery(urlQuery)
    }

  }, [router.query]);
  useEffect(() => {
    if (blogsQuery != null) {

      void (async (): Promise<void> => {

        const id = router.query.id

        const trg = router.query.keyword

        const key = {
          headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
        };

        const PER_PAGE = Number(process.env.onePageContent); 

        // ブログ情報を取得
        const blog_data = await fetch(
          `${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?filters=upUser[equals]${trg}&offset=${(Number(id) - 1) * PER_PAGE}&limit=6`,
          key,
        ).then((res) => res.json()).catch(() => null);
      
        // カテゴリー情報を取得
        const blog_cate = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog_category`, key)
        .then(res => res.json())
        .catch(() => null); 
      
        // 執筆者情報を取得
        const blog_user = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/user`, key)
        .then(res => res.json())
        .catch(() => null); 
      
        var blogs = {
          blogList: blog_data.contents,
          blogCategory: blog_cate.contents,
          blogUser: blog_user.contents,
          totalCount: blog_data.totalCount,
          pageNum: Number(id)
        }

        setBlogs(blogs)
      })();
    }
  }, [blogsQuery]);

  if(typeof blogs !== 'undefined'){ 
    if(blogs.blogList.length != 0){
      return(
        <>
          <Seo templateTitle='blog' />
          <BlogList blogList={blogs.blogList} blogCategory={blogs.blogCategory} blogUser={blogs.blogUser} pageNum={blogs.pageNum} totalCount={blogs.totalCount} searchSt={true} />
        </>
      );
    }else{
      return(
        <>
          <BlogList blogList={blogs.blogList} blogCategory={blogs.blogCategory} blogUser={blogs.blogUser} pageNum={blogs.pageNum} totalCount={blogs.totalCount} searchSt={false} />
        </>
      );
    }
  }else{
    return(
      <>
      検索中
      </>
    );
  }

}