import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

import BlueskyIcon from '../mocks/BlueskyIcon' // Adjust path if needed
import { SocialLinkProps } from './SocialLink'

export const socialLinks: SocialLinkProps[] = [
  {
    href: 'https://bsky.app/profile/dylangrimes.bsky.social',
    icon: BlueskyIcon
  }, // Use BlueskyIcon
  {
    href: 'https://www.linkedin.com/in/dylangrimeslarkin/',
    icon: AiFillLinkedin
  },
  { href: 'https://www.instagram.com/dylangrimesxo/', icon: FiInstagram },
  { href: 'https://github.com/dgl321', icon: AiFillGithub },
  { href: 'mailto:dylangrimeslarkin@gmail.com', icon: MdEmail } // Example icon for email
]
