import NavBar from "./NavBar";
import Link from 'next/link'

export default function Header() {
  return(
    <header>
      <div className="topHeader">
        <Link href="/">
            <img className="cursorPointer" src="Logo2.jpg" />
        </Link>
        <Link href="/">
            <h1 className="cursorPointer">The Dreaming Tree</h1>
        </Link>
      </div>
      <div className="contactInfo">
      <a href="mailto:thedreamingtreellc@gmail.com">TheDreamingTreeLLC@gmail.com</a><a href="tel:860-559-1729">(860) 559-1729</a>
      </div>
      <NavBar />
    </header>
  )
}