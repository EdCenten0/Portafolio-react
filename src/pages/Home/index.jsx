import React from "react";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";

function Home() {
  return (
    <>
      <MainPanel>
        <div className='flex gap-10 items-center justify-start flex-col  lg:flex-row'>
          <img
            src='https://avatars.githubusercontent.com/u/90741749?v=4'
            alt='avatar'
            className='rounded-full h-40 w-40 border border-gray-400'
          />
          <div>
            <h3 className=' text-xl font-bold pb-4'>
              Carlos Eduardo Chavarria Centeno
            </h3>
            <p className=' font-medium'>Computer Science student</p>
            <p className=' font-medium'>I'm currently learning by myself</p>
            <p className=' font-medium'>
              Looking for opportunities in order to develop myself
            </p>
            <div className=' flex my-6 flex-wrap gap-2'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'
                alt='c'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'
                alt='cplusplus'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                alt='css3'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                alt='html5'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
                alt='java'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                alt='javascript'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
                alt='mysql'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
                alt='python'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                alt='react'
                width='40'
                height='40'
              />
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
                alt='sass'
                width='40'
                height='40'
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=' text-xl font-bold pb-4'>About</h3>
          <p className='my-4'>
            Hello! I'm Carlos Eduardo Chavarria, an 18-year-old dedicated to the
            field of System Engineering. My academic journey began in February
            2022, where I eagerly dived into the intricacies of programming
            languages such as C, C++, Java, Python, Visual Basic, and various
            databases including MySQL, MSSQL, and more.
          </p>
          <p className='my-4'>
            In May 2023, as part of my ongoing academic journey, I continued to
            deepen my understanding, focusing on web development while exploring
            frontend, backend languages, and nuanced database management.
          </p>

          <p className='my-4'>
            I consider myself on a continual learning path within the realm of
            system engineering. My dedication extends beyond the conventional
            boundaries to encompass desktop development and backend languages.
            This personal web page serves as a reflection of my experiences,
            projects, and growth.
          </p>
          <p className='my-4'>
            Join me as I navigate the evolving landscape of system engineering,
            driven by a passion for learning and a commitment to excellence.
          </p>
          <p className='my-4'>Let's embrace the coding journey together!</p>
        </div>
      </MainPanel>
    </>
  );
}

export default Home;
