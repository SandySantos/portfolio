const Projects = () => {
  return (
    <div
      id='project'
      className='h-full w-full mt-10 px-8 sm:px-20 md:px-20 lg:px-20 '
    >
      <div className='text-orange-800  underline underline-offset-4 text-2xl font-medium mb-5 flex items-center justify-center'>
        Projects
      </div>

      <div className='flex justify-center'>
        <div className='flex gap-3 '>
          <div className='font-semibold text-base'>
            1. Event Management Website -
          </div>

          <a
            href='https://eventmanagement-eta.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className='underline decoration-blue-500 text-blue-500'
          >
            https://eventmanagement-eta.vercel.app/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
