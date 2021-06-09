import Link from 'next/link'
import { useRouter } from 'next/router'


export default function NavLink({ href, name }) {
  // router object
  const router = useRouter()
  let currentPage = false
 
  // checks to see if the current page matches with the link
  if (router.pathname == `/${href}`) {
    currentPage = true
  }


  return(
    <li>
      <svg className={`heart ${currentPage ?  "currentPage" : ""}`} viewBox="0 0 32 29.6" fill="red">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      <Link href={`/${href}`}>{name}</Link>
    </li>
  )
}