import React from 'react';

const Experience = () => {
  return (
    <>
      <div
        id='experience'
        className='h-full w-full mt-10 px-8 sm:px-20 md:px-20 lg:px-20 '
      >
        <div className='text-orange-800  underline underline-offset-4 text-2xl font-medium mb-5 flex items-center justify-center'>
          Experience
        </div>

        <div className='flex flex-col gap-3'>
          <div>
            <div className='font-bold text-lg'>
              Mernstack Developer (2 Years)
            </div>
            <div className='font-light text-lg  mb-2'>
              GAE Projects - Chennai,Tamilnadu
            </div>
            <div className='px-5  flex flex-col gap-3'>
              <li className='font-normal text-base'>
                RESTful APIs : Implemented RESTful APIs to fetch and manipulate
                data, ensuring seamless communication between the front-end and
                back-end systems.
              </li>
              <li className='font-normal text-base'>
                State Management : Utilized Redux to enhance application
                performance and streamline code maintainability, resulting in a
                more efficient development process.
              </li>
              <li className='font-normal text-base'>
                Database Management : Devised and implemented MongoDB databases,
                optimizing processes for data storage, retrieval, and
                manipulation with a focus on reducing query response times.
              </li>
              <li className='font-normal text-base'>
                Testing : Conducted thorough unit tests using Jest, achieving a
                comprehensive test coverage and ensuring the development of
                high-quality code with enhanced maintainability.
              </li>
            </div>
          </div>
          <div>
            <div className='font-bold text-lg'>PHP Developer (6 Months)</div>
            <div className='font-light text-lg mb-2'>
              Thinksoft Digital Solutions - Ramanatahpuram,Tamilnadu
            </div>
            <div className='px-5  flex flex-col gap-3'>
              <li className='font-normal text-base'>
                Frontend Collaboration : Worked closely with developers to
                seamlessly integrate server-side logic with user interfaces,
                fostering a cohesive and user-friendly experience.
              </li>
              <li className='font-normal text-base'>
                Backend Development : Implemented robust server-side logic using
                PHP, contributing to a significant improvement in the
                performance and responsiveness of web applications.
              </li>
              <li className='font-normal text-base'>
                Database Management : Designed and maintained MySQL databases,
                implementing efficient data storage, retrieval, and manipulation
                while ensuring database security.
              </li>
              <li className='font-normal text-base'>
                Testing : Conducted manual testing for frontend applications,
                debugging, and troubleshooting to identify and resolve issues,
                ensuring the reliability of web applications.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
