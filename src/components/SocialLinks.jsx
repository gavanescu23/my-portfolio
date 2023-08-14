import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/vlad-gavanescu-b72656130/",
            style: "rounded-tr-md   "
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/gavanescu23",
        },
        {
            id: 3,
            child: (
                <>
                eMail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:gavanescuvlad@yahoo.com",
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/CV - Vlad Gavanescu EP latest.pdf",
            style: "rounded-br-md",
            download: true,
        }
    ]
  return (
    <div className='flex flex-col invisible sl:visible top-[35%] left-0 fixed'>
        <ul className='flex flex-col'>
            {links.map(({id, child, href, style, download}) => (
                            <li key={id} 
                            className={`flex justify-between items-center ml-[-75px] hover:ml-[-10px] rounded-md duration-300 mb-2 w-40 h-14 px-4 bg-white style`}>
                            <a download={download} target='_blank' rel='noreferrer' href={href} className='flex justify-between items-center bg-white w-full '>
                             {child}
                            </a>
                        </li>
            ))}

        </ul>
        
    </div>
  )
}

export default SocialLinks