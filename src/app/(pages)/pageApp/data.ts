import download from '@/assets/images/download.png'
import workLogin from '@/assets/images/work-login.png'
import form from '@/assets/images/form.png'
import enjoy from '@/assets/images/enjoy.png'
import user1 from '@/assets/images/team/user-1.jpg'
import user2 from '@/assets/images/team/user-2.jpg'
import user3 from '@/assets/images/team/user-3.jpg'
import user4 from '@/assets/images/team/user-4.jpg'
import { StaticImageData } from 'next/image'

export type WorkType = {
  title: string
  description: string
  image: StaticImageData
  step: number
}

type TeamType = {
  image: StaticImageData
  name: string
  role: string
}

export type PricingType = {
  name: string
  icon: string
  description: string
  pricing: number
  year: string
  devices: string
  buttonName: string
  save?: number
  isPopular?: boolean
}

export const workData: WorkType[] = [
  {
    title: 'Download Our Skywave App',
    description: 'Install Application in your android and apple device',
    image: download,
    step: 1,
  },
  {
    title: 'Register in your device',
    description: 'Register your profile and login with google and facebook',
    image: workLogin,
    step: 2,
  },
  {
    title: 'Submit Online Form',
    description: 'simplifies the process of providing necessary information',
    image: form,
    step: 3,
  },
  {
    title: 'Enjoy Our Skywave App',
    description: 'Enjoy to this application and with your best experiences',
    image: enjoy,
    step: 4,
  },
]

export const teamData: TeamType[] = [
  {
    image: user1,
    name: 'Kenneth Simpson',
    role: 'CEO/Founder',
  },
  {
    image: user2,
    name: 'Daniel Malave',
    role: 'Web Developer',
  },
  {
    image: user3,
    name: 'James Peck',
    role: 'Founder',
  },
  {
    image: user4,
    name: 'Marc Johnson',
    role: 'Web Designer',
  },
]

export const pricingData: PricingType[] = [
  {
    name: 'Personal',
    description: 'For individuals who want to securely connect personal devices, for free.',
    devices: '1 Devices',
    icon: 'tabler:free-rights',
    pricing: 0,
    year: '3 Month Free',
    buttonName: 'Try Now',
  },
  {
    name: 'Starter',
    description: 'For teams or organizations looking for an easy-to- use, legacy VPN replacement.',
    devices: 'Cover 5 Devices',
    icon: 'tabler:tag-starred',
    pricing: 20,
    year: '+3 Extra month',
    buttonName: 'Subscribe Now',
    save: 50,
    isPopular: true,
  },
  {
    name: 'Premium',
    description: 'For companies who need service level authentication and access control.',
    devices: 'Cover 10 Devices',
    icon: 'tabler:premium-rights',
    pricing: 60,
    year: '+3 Extra month',
    buttonName: 'Subscribe Now',
    save: 50,
  },
]
