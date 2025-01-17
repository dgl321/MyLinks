import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaBluesky } from 'react-icons/fa6' // Import Bluesky Icon
import { FiInstagram } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

import { SocialLinkProps } from 'components/SocialLink'

export const socialLinks: SocialLinkProps[] = [
  { href: 'https://bsky.app/profile/dylangrimes.bsky.social', icon: FaBluesky }, // Use Bluesky Icon
  {
    href: 'https://www.linkedin.com/in/dylangrimeslarkin/',
    icon: AiFillLinkedin
  },
  { href: 'https://www.instagram.com/dylangrimesxo/', icon: FiInstagram },
  { href: 'https://github.com/dgl321', icon: AiFillGithub },
  { href: 'mailto:dylangrimeslarkin@gmail.com', icon: MdEmail }
]
