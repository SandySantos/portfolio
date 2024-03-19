const Skills = () => {
  return (
    <div id='skill' className='h-full w-full px-8 py-5 sm:px-20'>
      <div className='text-orange-800 text-2xl font-medium underline underline-offset-4 mb-5 flex items-center justify-center'>
        Skills
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2  w-full'>
          <div className='text-orange-800 text-2xl font-light'>
            Frontend Development
          </div>
          <div className='flex gap-3 flex-wrap p-2'>
            <div className='p-2 bg-slate-200 rounded-lg '>React.js</div>
            <div className='p-2 bg-slate-200 rounded-lg'>Redux</div>
            <div className='p-2 bg-slate-200 rounded-lg'>Next.js</div>
            <div className='p-2 bg-slate-200 rounded-lg'>HTML</div>
            <div className='p-2 bg-slate-200 rounded-lg'>Tailwind</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='text-orange-800 text-2xl font-light'>
            Backend Development
          </div>
          <div className='flex gap-3 flex-wrap p-2'>
            <div className='p-2 bg-slate-200 rounded-lg'>Node.js</div>
            <div className='p-2 bg-slate-200 rounded-lg'>Express.js</div>
            <div className='p-2 bg-slate-200 rounded-lg'>MongoDB</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='text-orange-800 text-2xl font-light'>Testing</div>
          <div className='flex gap-3 flex-wrap p-2'>
            <div className='p-2 bg-slate-200 rounded-lg'>Jest</div>
            <div className='p-2 bg-slate-200 rounded-lg'>Mocha</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <div className='text-orange-800 text-2xl font-light'>
            Version Control
          </div>
          <div className='flex gap-3 flex-wrap p-2'>
            <div className='p-2 bg-slate-200 rounded-lg'>Git</div>
            <div className='p-2 bg-slate-200 rounded-lg'>GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
