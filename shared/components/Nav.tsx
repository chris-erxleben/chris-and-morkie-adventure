import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// TODO: Change this to a real URL
const GOOGLE_FORM_URL = 'https://google.com/'

const NAV_LINKS = [
  ['Home', '/'],
  ['Our Story', '/our-story'],
  ['Wedding Details', '/wedding-details'],
]

const Nav: FC = () => {
  const router = useRouter()

  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-center align-middle space-x-14 py-7">
      {NAV_LINKS.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className={router.pathname === href ? 'text-primary-400' : null}
        >
          {label}
        </Link>
      ))}
      <Link href={GOOGLE_FORM_URL} target="_blank" passHref>
        RSVP
      </Link>
    </nav>
  )
}

export default Nav
