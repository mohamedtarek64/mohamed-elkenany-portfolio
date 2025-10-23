import { SocialLink } from '@/types/contact';
import { 
  faLinkedin, 
  faGithub, 
  faInstagram, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohamed-elkenany-41aab6264',
    icon: faLinkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/mohamedtarek64',
    icon: faGithub
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/medo.tarek.7186',
    icon: faFacebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mohammed_elkenany77',
    icon: faInstagram
  }
];

export default socialLinks;
