import { StaticImageData } from 'next/image'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'

export type FeaturesType = {
  icon: string
  title: string
  description: string
}
export type ServicesType = {
  icon: string
  title: string
  description: string
}

export type TestimonialType = {
  image: StaticImageData
  name: string
  description: string
  role: string
  star: number
}

export const featuresData: FeaturesType[] = [
  {
    icon: 'tabler:apps',
    title: 'App Integration',
    description: 'Our product seamlessly integrates with various apps, allowing you to streamline your workflow and enhance productivity.',
  },
  {
    icon: 'tabler:jump-rope',
    title: 'Workflow Builder',
    description: 'The Workflow Builder feature empowers you to create, customize, and automate tasks with ease. Design efficient workflows.',
  },
  {
    icon: 'tabler:edit',
    title: 'Specific Tools',
    description: 'Our product comes equipped with a range of specific tools designed to enhance functionality and improve efficiency.',
  },
  {
    icon: 'tabler:alarm',
    title: 'Lifetime Access',
    description:
      "Enjoy the peace of mind that comes with Lifetime Access to our product. Once you purchase, you'll receive ongoing updates, support.",
  },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'tabler:rocket',
    title: 'Start Up',
    description: "You've just launched your project, and want to minimise risk of downtime",
  },
  {
    icon: 'tabler:briefcase',
    title: 'Business',
    description: 'You need to avoid lost revenue from a website outage',
  },
  {
    icon: 'tabler:shopping-cart',
    title: 'E-Commerce',
    description: 'You need to keep your online retail business running 24/7.',
  },
  {
    icon: 'tabler:artboard',
    title: 'Digital Design',
    description: 'It is a long established fact that a reader will be distracted by the readable',
  },
  {
    icon: 'tabler:palette',
    title: 'Unlimited Colors',
    description: 'The European languages are members of the same family.',
  },
  {
    icon: 'tabler:chess-king',
    title: 'Strategy Solutions',
    description: 'He lay on his armour-like back, and if he lifted his head a little',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: avatar1,
    name: 'Dorothy C. Swarts',
    description: "I've been using pagedone for a year now and it's made managing my finances so much easier and quick.",
    role: 'Product Designer',
    star: 4.7,
  },
  {
    image: avatar3,
    name: 'Ronald S. Price',
    description: "With pagedone, I can easily track my investments and see how they're performing in real-time.",
    role: 'CEO',
    star: 4.4,
  },
  {
    image: avatar5,
    name: 'Gary F. Wilson',
    description: 'Thanks to pagedone, I feel more informe and confident about my investment decisions than ever before.',
    role: 'Sales Manager',
    star: 4.5,
  },
  {
    image: avatar6,
    name: 'Elsie K. Beauc',
    description: "I was hesitant to try pagedone at first, but I'm so glad I did it's exceeded all of my expectations",
    role: 'Design Lead',
    star: 4.3,
  },
]
