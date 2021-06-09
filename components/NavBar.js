import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink href="" name="Home" />
        <NavLink href="about" name="About Me" />
        <NavLink href="services" name="Services" />
        <NavLink href="events" name="events" />
      </ul>
    </nav>
  )
}