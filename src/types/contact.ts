import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconDefinition | string;
}
