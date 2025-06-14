import { Cottage, PricingPlan, Amenity, FAQ } from '../types';

export const cottages: Cottage[] = [
  {
    id: '1',
    title: 'Alpine Villa',
    size: '6 Marla',
    price: 4500000,
    bedrooms: 3,
    bathrooms: 2,
    features: [
      'Mountain View',
      'Private Garden',
      'Modern Kitchen',
      'Fireplace',
      'Parking Space',
      'Security System'
    ],
    floorPlan: 'https://images.pexels.com/photos/1181896/pexels-photo-1181896.jpeg',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
    ]
  },
  {
    id: '2',
    title: 'Pine Ridge Cottage',
    size: '6 Marla',
    price: 4200000,
    bedrooms: 2,
    bathrooms: 2,
    features: [
      'Forest View',
      'Balcony',
      'Modern Amenities',
      'Storage Room',
      'Parking Space',
      'Garden Access'
    ],
    floorPlan: 'https://images.pexels.com/photos/1181896/pexels-photo-1181896.jpeg',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    ]
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Standard Plan',
    totalPrice: 4200000,
    downPayment: 500000,
    installments: 36,
    monthlyAmount: 102778,
    features: [
      '6 Marla Plot',
      '2-3 Bedrooms',
      'Modern Kitchen',
      'Parking Space',
      'Basic Finishing',
      '2 Years Warranty'
    ]
  },
  {
    id: '2',
    name: 'Premium Plan',
    totalPrice: 4500000,
    downPayment: 600000,
    installments: 36,
    monthlyAmount: 108333,
    features: [
      '6 Marla Plot',
      '3 Bedrooms',
      'Luxury Kitchen',
      'Private Garden',
      'Premium Finishing',
      'Mountain View',
      '3 Years Warranty'
    ],
    isPopular: true
  },
  {
    id: '3',
    name: 'Luxury Plan',
    totalPrice: 5000000,
    downPayment: 750000,
    installments: 36,
    monthlyAmount: 118056,
    features: [
      '6 Marla Plot',
      '3-4 Bedrooms',
      'Designer Kitchen',
      'Private Garden',
      'Luxury Finishing',
      'Panoramic View',
      'Smart Home Features',
      '5 Years Warranty'
    ]
  }
];

export const amenities: Amenity[] = [
  {
    id: '1',
    title: 'Expressway Access',
    description: 'Direct access to Murree Expressway for easy connectivity',
    icon: 'Car'
  },
  {
    id: '2',
    title: '24/7 Security',
    description: 'Round-the-clock security with CCTV monitoring',
    icon: 'Shield'
  },
  {
    id: '3',
    title: 'Utilities',
    description: 'Electricity, gas, water, and internet connectivity',
    icon: 'Zap'
  },
  {
    id: '4',
    title: 'Maintenance',
    description: 'Professional maintenance and housekeeping services',
    icon: 'Wrench'
  },
  {
    id: '5',
    title: 'Green Spaces',
    description: 'Landscaped gardens and recreational areas',
    icon: 'Trees'
  },
  {
    id: '6',
    title: 'Parking',
    description: 'Dedicated parking spaces for each cottage',
    icon: 'Car'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the size of each cottage?',
    answer: 'Each cottage is built on a 6 Marla plot with 2-3 bedrooms, modern amenities, and private outdoor space.',
    category: 'General'
  },
  {
    id: '2',
    question: 'What are the payment options available?',
    answer: 'We offer flexible payment plans with down payments starting from 500,000 PKR and installments up to 36 months.',
    category: 'Payment'
  },
  {
    id: '3',
    question: 'Is the project legally approved?',
    answer: 'Yes, Sanmarco Murree Cottages has all necessary NOCs and approvals from relevant authorities.',
    category: 'Legal'
  },
  {
    id: '4',
    question: 'Can I use the cottage for tourism/rental purposes?',
    answer: 'Absolutely! The cottages are designed for both personal use and tourism rental with high ROI potential.',
    category: 'Investment'
  },
  {
    id: '5',
    question: 'What amenities are included?',
    answer: 'Amenities include 24/7 security, utilities, maintenance services, parking, and access to green spaces.',
    category: 'Amenities'
  },
  {
    id: '6',
    question: 'When will the project be completed?',
    answer: 'The development is ongoing with completion expected by Q2 2025. Early bookings get priority.',
    category: 'Timeline'
  }
];