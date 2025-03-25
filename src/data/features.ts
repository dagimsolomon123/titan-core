import { Zap, Shield, Heart, Coffee,ChevronsLeftRightEllipsis,Rss,HandCoins, Smile, Grip, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: ChevronsLeftRightEllipsis,
                title: 'Custom Software Development',
                description: 'Tailored solutions for businesses.'
            },
            {
                icon: TabletSmartphone,
                title: 'Mobile App Development',
                description: 'Apps for mobile platforms.'
            },
            {
                icon: Rss,
                title: 'Web Application Development',
                description: 'Websites and web apps.'
            },
            {
                icon: Grip,
                title: 'Software Maintenance and Support',
                description: 'software maintainance and supports on our provided software solutions'
            },
            {
                icon: HandCoins,
                title: 'Software Consultancy',
                description: ' Expert guidance for software.'
            },
            {
                icon: CodeXml,
                title: 'UI/UX Design',
                description: ' User-friendly interface designs'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
