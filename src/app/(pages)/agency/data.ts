import { StaticImageData } from 'next/image'
import mobile from '@/assets/images/mobile.png'
import agencyService from '@/assets/images/agency-services.png'
import agencyService3 from '@/assets/images/agency-services-3.png'

export type FeaturesType = {
  icon: string
  title: string
  description: string
}

export type ServicesType = {
  icon: string
  title: string
  description: string
  isPopular?: boolean
}

export type ProjectType = {
  image: StaticImageData
  title: string
  description: string
}

export type PricingType = {
  title: string
  price: number
  packs: string[]
  isPopular?: boolean
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

export const projectData: ProjectType[] = [
  {
    image: mobile,
    title: 'Our Best Skywave App',
    description: 'We are a digital agency that specializes in web design, SEO, social media',
  },
  {
    image: agencyService,
    title: 'Agency Landing Page',
    description: 'We are a digital agency that specializes in web design, SEO, social media',
  },
  {
    image: agencyService3,
    title: 'Business Landing Page',
    description: 'We are a digital agency that specializes in web design, SEO, social media',
  },
]

export const pricingData: PricingType[] = [
  {
    title: 'Starter',
    price: 12.99,
    packs: ['Account Aggregation', 'Expense Tracking', 'Budgeting Tools', 'Transaction Insights', 'Basic Security'],
  },
  {
    title: 'Premium',
    price: 145.99,
    isPopular: true,
    packs: ['Account Aggregation', 'Expense Tracking', 'Budgeting Tools', 'Transaction Insights', 'Basic Security'],
  },
  {
    title: 'Enterprise',
    price: 185.99,
    packs: ['Account Aggregation', 'Expense Tracking', 'Budgeting Tools', 'Transaction Insights', 'Basic Security'],
  },
]
