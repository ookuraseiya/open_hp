import { useState } from "react";

import JobDetail from '@/components/recruit/JobDetail'

interface Jobs{
  jobDatas: any[]
}

export default function Job(){


  const jobs: Jobs ={
    jobDatas:[
      {
        title:'営業',
        text:'あああああああああああああああああ'
      },
      {
        title:'事務',
        text:'いいいいいいいいいいいいいいいいい'
      },
    ]
  }

  const [jobDatas, setJobDatas] = useState(jobs.jobDatas)


  return(
    <>
      <section className='h-auto w-full flex justify-center space-x-10'>
        <h2 className='text-4xl w-auto'>求人情報</h2>
        <div className="w-3/12 from-pink-50 to-indigo-100 place-items-center">
          <div className="w-full rounded">
            {jobDatas.map((jobData) => (
              <JobDetail 
                title={jobData.title}
                text={jobData.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}