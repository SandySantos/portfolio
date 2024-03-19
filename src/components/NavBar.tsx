import { Link } from 'react-scroll';
import { Disclosure } from '@headlessui/react';
const NavBar = () => {
  return (
    <>
      <div className='hidden sm:flex h-full w-full py-5 px-10 sm:px-20 md:px-32 lg:px-40  justify-between sticky top-0 bg-slate-50'>
        <div className='text-lg font-bold text-orange-800 tracking-wide'>
          Santhosh
        </div>
        <div className='hidden sm:flex gap-5 text-lg font-light text-orange-800  select-none'>
          <Link to='home' spy={true} smooth={true} offset={-70} duration={500}>
            <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
              Home
            </div>
          </Link>
          <Link to='skill' spy={true} smooth={true} offset={-70} duration={500}>
            <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
              Skill
            </div>
          </Link>
          <Link
            to='experience'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
              Experience
            </div>
          </Link>
          <Link
            to='project'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
              Project
            </div>
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
              Contact
            </div>
          </Link>
        </div>
      </div>

      <div className='sm:hidden w-full text-lg font-light text-orange-800 bg-slate-50 select-none sticky top-0 pt-5 px-10 '>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex justify-between'>
                <div className='text-lg font-bold text-orange-800 tracking-wide'>
                  Santhosh
                </div>
                <Disclosure.Button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </Disclosure.Button>
              </div>

              <Disclosure.Panel className='py-2  flex flex-col gap-3 items-center '>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
                    Home
                  </div>
                </Link>
                <Link
                  to='skill'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
                    Skill
                  </div>
                </Link>
                <Link
                  to='experience'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
                    Experience
                  </div>
                </Link>
                <Link
                  to='project'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
                    Project
                  </div>
                </Link>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className='hover:underline underline-offset-4 decoration-2 cursor-pointer '>
                    Contact
                  </div>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default NavBar;

// import React, { useState, useEffect } from "react";
// import "./styles.css";
// export default function App() {
//   const [navSize, setnavSize] = useState("10rem");
//   const [navColor, setnavColor] = useState("transparent");
//   const listenScrollEvent = () => {
//     window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
//     window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//     return () => {
//       window.removeEventListener("scroll", listenScrollEvent);
//     };
//   }, []);

//   return (
//     <div>
//       <nav
//         style={{
//           backgroundColor: navColor,
//           height: navSize,
//           transition: "all 1s"
//         }}
//       >
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Project</li>
//           <li>Skills</li>
//           <li>Contact </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
