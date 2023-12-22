import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcons from './LiIcons';

const Details = ({position, company, companyLink, time, address, work }) => {
       const ref = useRef(null);
     return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] 
        mx-auto flex flex-col  justify-between md:w-[80%]'>
            <LiIcons reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            
            
            
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink}
                target='_blank'
                className='text-primary dark: text-primaryDark capitalize'
                >@{company}</a></h3>
            </motion.div>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
             </span>
             <p className='font-medium w-full md:text-sm'>
               {work} 
             </p>
            
        </li>
     )

};




const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
          Experience
      </h2>
      
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

         < motion.div 
           style={{scaleY: scrollYProgress}}
         className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
         md:w-[2px] md:left-[30px] xs:left-[20px]
         '/>



           <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
            position="Front End Developer &  UI/UX Designer  " company= "Fireworks Digital  & Technologies "
            companyLink="www.formidabletech.com.ng"
            time="2017-2020" address= "Gwarimpa Abuja Nigeria"
            work=
            
            "(1)  UI/UX design efforts for various projects, resulting in improved
            user satisfaction and increased engagement

            (2) Developed UIs and collaborated closely with backend developers to 
            ensure the   seamless  implementation of designs .
            
            (3)Utilized  HTML, CSS, and Javascript to create 100+ responsive landing 
            pages for both company and client.

            
            (4) Tested debugged, and shipped 10s of 1000s of lines of code to 
            various development teams

           
          "

        
      

         
            
            />

           
           <Details 
            position="Front End Developer &  UI/UX Designer : Remote" company= "Upwork"
            companyLink="www.formidabletech.com.ng"
            time="2021-2022" address= " Cyberteck Academy NY, USA "
            work="
            (1) Redesigned all the pages and functionalities, developed the UI
            and worked closely with the backend developer to implement 
            funtionalities across board

            (2) Upgraded previous website from wordpress to react and node.js

            (3) Recruited backend engineer and cyber security for client and 
            introduced jira and asana as colloborative tool for commuincation

            (4) Wrote SEO friendly codes and optimized web ap for speed, 
            eliminating lazy loading, reducing rework by 15% and increase
            web app engagement by 45%

            "
            
            />


           <Details 
            position="UI Designer and Web Developer " company= "Remote @upwork "
            companyLink="www.formidabletech.com.ng"
            time="2022-2023" address= "Xplore, Melbourne  Australia"
            work="Designed and developed custom news letter, increased
            customer engagement across B2B platforms and improved sale
            of Xplore products  by 17%"
            
            />



          <Details 
            position="UI Designer and Web Developer " company= "Remote @upwork "
            companyLink="www.formidabletech.com.ng"
            time="2023 - Present" address= "Xplore, Melbourne  Australia"
            work="
            
            (1) Developed a social networking app for developers using MERN stack.
(2) Developed and executed front-end development strategies, resulting
 in a 20% increase in web performance by implementing optimization
techniques such as code minificationa and troubleshooting issues 
using browser developer tools
(3) Granted additional code review permissions after demonstrating 
strong attention t detail that led to a 25% decrease in code errors.
Provided support to senior front-end developers after becoming 
proficient in react, next js and tailwind css, resulting in a stronger, 
more efficient tech team
(4) Designed the UX & developed the UI for valuefinders, an online marketplace for freelancers
            
            "
            
            />


            



        

           </ul>
      </div>
    


    </div>
  )
}

export default Experience