export const navLinks = [
  {
    id: 1,
    label: 'Home',
    route: '/dashboard',
    icon: '/assets/icons/home.svg',
  },
  {
    id: 2,
    label: 'Image Restore',
    route: '/dashboard/transformations/add/restore',
    icon: '/assets/icons/image.svg',
    description:
      'Revive your cherished memories with our AI-powered image restoration service. Pixeluxe enhances old, damaged, or low-quality photos, bringing them back to life with stunning clarity. Whether it’s removing scratches, sharpening details, or restoring faded colors, our advanced AI ensures that your images look as vibrant and sharp as the day they were taken. Don’t let your precious moments fade away—experience the magic of Pixeluxe and give your photos the quality they deserve.',
    image: '/assets/images/features/restore.jpg',
  },
  {
    id: 3,
    label: 'Generative Fill',
    route: '/dashboard/transformations/add/fill',
    icon: '/assets/icons/stars.svg',
    image: '/assets/images/features/fill.jpg',
    description:
      'With Pixeluxe’s Generative Fill, you can expand the possibilities of your images beyond their original frames. Simply provide a picture, choose your desired aspect ratio, and let our AI intelligently fill in the remaining space with seamless, high-quality content that perfectly matches the original. Whether you’re looking to widen a landscape, extend a portrait, or create entirely new scenes, our Generative Fill feature adds the perfect finishing touch to your images, transforming them into something truly remarkable. Unleash your creativity and watch your photos grow with Pixeluxe.',
  },
  {
    id: 4,
    label: 'Object Remove',
    route: '/dashboard/transformations/add/remove',
    icon: '/assets/icons/scan.svg',
    image: '/assets/images/features/remove.jpg',
    description:
      "Say goodbye to unwanted distractions in your photos with Pixeluxe’s Object Remove feature. Whether it's a stray passerby, an unsightly blemish, or an out-of-place object, our AI-powered tool lets you easily select and remove anything that detracts from your image’s focus. Simply write down the object you want gone, and watch as our advanced AI seamlessly erases it, filling in the space with natural-looking content that blends perfectly with the surrounding area. With Pixeluxe, your images can be as clean and polished as you envision them—effortlessly.",
  },
  {
    id: 5,
    label: 'Object Recolor',
    route: '/dashboard/transformations/add/recolor',
    icon: '/assets/icons/filter.svg',
    image: '/assets/images/features/color.jpg',
    description:
      'Bring new life to your images with Pixeluxe’s Object Recolor feature. Whether you want to change the color of a single item or breathe fresh style into your entire photo, our AI makes it easy. Simply select the object you want to target—a shirt, a car, a piece of furniture—and specify the color you want it to be. Pixeluxe’s advanced AI will seamlessly apply the new hue, preserving the natural look and feel of the image. From subtle adjustments to bold transformations, Object Recolor lets you customize your photos to match your vision with just a few clicks.',
  },
  {
    id: 6,
    label: 'Background Remove',
    route: '/dashboard/transformations/add/removeBackground',
    icon: '/assets/icons/camera.svg',
    image: '/assets/images/features/background.jpg',
    description:
      "With Pixeluxe’s Background Remove feature, you can isolate the subjects of your photos with precision and ease. Simply upload your image, and let our AI instantly remove the background, leaving you with a clean, transparent canvas. Whether you're preparing product images for an online store, creating professional headshots, or crafting custom designs, our Background Remove tool gives you the flexibility to place your subject in any setting you desire. No more tedious manual editing—just flawless results in seconds with Pixeluxe.",
  },
  {
    id: 7,
    label: 'Profile',
    route: '/dashboard/profile',
    icon: '/assets/icons/profile.svg',
  },
  {
    id: 8,
    label: 'Buy Credits',
    route: '/dashboard/credits',
    icon: '/assets/icons/bag.svg',
  },
];

export const transformationTypes = {
  restore: {
    type: 'restore',
    title: 'Restore Image',
    subTitle: 'Refine images by removing noise and imperfections',
    config: { restore: true },
    icon: 'image.svg',
  },
  removeBackground: {
    type: 'removeBackground',
    title: 'Background Remove',
    subTitle: 'Removes the background of the image using AI',
    config: { removeBackground: true },
    icon: 'camera.svg',
  },
  fill: {
    type: 'fill',
    title: 'Generative Fill',
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: 'stars.svg',
  },
  remove: {
    type: 'remove',
    title: 'Object Remove',
    subTitle: 'Identify and eliminate objects from images',
    config: {
      remove: { prompt: '', removeShadow: true, multiple: true },
    },
    icon: 'scan.svg',
  },
  recolor: {
    type: 'recolor',
    title: 'Object Recolor',
    subTitle: 'Identify and recolor objects from the image',
    config: {
      recolor: { prompt: '', to: '', multiple: true },
    },
    icon: 'filter.svg',
  },
};

export const formDefaultValues = {
  title: '',
  aspectRatio: '',
  color: '',
  prompt: '',
  publicId: '',
};

export const aspectRatioOptions = {
  '1:1': {
    aspectRatio: '1:1',
    label: 'Square (1:1)',
    width: 1000,
    height: 1000,
  },
  '3:4': {
    aspectRatio: '3:4',
    label: 'Standard Portrait (3:4)',
    width: 1000,
    height: 1334,
  },
  '9:16': {
    aspectRatio: '9:16',
    label: 'Phone Portrait (9:16)',
    width: 1000,
    height: 1778,
  },
};

export const creditFee = -1;

export const plans = [
  {
    _id: 1,
    name: 'Free',
    icon: '/assets/icons/free-plan.svg',
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: '20 Free Credits',
        isIncluded: true,
      },
      {
        label: 'Basic Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: false,
      },
      {
        label: 'Priority Updates',
        isIncluded: false,
      },
    ],
    isPopular: false,
  },
  {
    _id: 2,
    name: 'Pro Package',
    icon: '/assets/icons/free-plan.svg',
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: '120 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: false,
      },
    ],
    isPopular: true,
  },
  {
    _id: 3,
    name: 'Premium Package',
    icon: '/assets/icons/free-plan.svg',
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: '2000 Credits',
        isIncluded: true,
      },
      {
        label: 'Full Access to Services',
        isIncluded: true,
      },
      {
        label: 'Priority Customer Support',
        isIncluded: true,
      },
      {
        label: 'Priority Updates',
        isIncluded: true,
      },
    ],
    isPopular: false,
  },
];
