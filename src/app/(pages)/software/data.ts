import { StaticImageData } from 'next/image'
import fea1Img from '@/assets/images/features/fea-1.png'
import fea2Img from '@/assets/images/features/fea-2.png'
import fea3Img from '@/assets/images/features/fea-3.png'
import fea4Img from '@/assets/images/features/fea-4.png'
import fea5Img from '@/assets/images/features/fea-5.png'
import fea6Img from '@/assets/images/features/fea-6.png'
import fea7Img from '@/assets/images/features/fea-7.png'
import fea8Img from '@/assets/images/features/fea-8.png'
import user1 from '@/assets/images/team/user-1.jpg'
import user3 from '@/assets/images/team/user-3.jpg'
import user2 from '@/assets/images/team/user-2.jpg'
import user4 from '@/assets/images/team/user-4.jpg'

type FeaturesType = {
  image: StaticImageData
  title: string
}

export type ServicesType = {
  icon: string
  title: string
  description: string
  isPopular?: boolean
}

type TeamType = {
  image: StaticImageData
  name: string
  role: string
}

export const featuresData: FeaturesType[] = [
  {
    image: fea1Img,
    title: 'Lead Management',
  },
  {
    image: fea2Img,
    title: 'Sales Reporting',
  },
  {
    image: fea3Img,
    title: 'Call & SMS',
  },
  {
    image: fea4Img,
    title: 'Email Sync',
  },
  {
    image: fea5Img,
    title: 'Easy Customize',
  },
  {
    image: fea6Img,
    title: 'Deal Pipeline',
  },
  {
    image: fea7Img,
    title: 'Activities & Goals',
  },
  {
    image: fea8Img,
    title: 'Integration',
  },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'tabler:device-desktop-analytics',
    title: 'Custom Software Development',
    description: 'We understand that every business has unique needs. Our team can create custom software solutions tailored specifically',
  },
  {
    icon: 'tabler:webhook',
    title: 'Integration Services',
    description: 'Our software seamlessly integrates with a variety of platforms and tools. We provide integration services to ensure',
    isPopular: true,
  },
  {
    icon: 'tabler:heart-handshake',
    title: 'Training and Onboarding',
    description: 'We offer thorough training programs and onboarding sessions to help your team get up to speed with our software quickly',
  },
  {
    icon: 'tabler:message-user',
    title: 'Consulting Services',
    description: 'Our experts provide strategic consulting to help you leverage our software for maximum benefit. We offer insights',
  },
  {
    icon: 'tabler:refresh-dot',
    title: 'Updates and Maintenance',
    description: 'We continually update our software to incorporate the latest advancements and features. Our maintenance services',
  },
  {
    icon: 'tabler:headset',
    title: 'Technical Support',
    description: 'Our dedicated support team is available 24/7 to assist you with any technical issues you may encounter.',
  },
]

export const teamData: TeamType[] = [
  {
    image: user1,
    name: 'Kenneth Simpson',
    role: 'CEO/Founder',
  },
  {
    image: user3,
    name: 'James Peck',
    role: 'Founder',
  },
  {
    image: user2,
    name: 'Tina F. Yates',
    role: 'Web Developer',
  },
  {
    image: user4,
    name: 'Sidney J. Long',
    role: 'Web Designer',
  },
]
