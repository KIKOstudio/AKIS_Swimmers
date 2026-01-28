export interface Athlete {
  id: string;
  name: string;
  gender: 'male' | 'female';
  grade: string;
  profileImage?: string;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
  };
  team: string;
  specialty: string[];
  results: {
    event: string;
    time: string;
    place: string;
    meet: string;
    date: string;
    isPB?: boolean;
  }[];
  // Media section
  mediaPhotos?: string[]; // Array of photo URLs for the media gallery
  swimCloudUrl?: string; // Link to SwimCloud profile
}

export const athletes: Athlete[] = [
  {
    id: '1',
    name: 'Layan Hegazi',
    gender: 'female',
    grade: '11GB',
    // To add a profile image, set profileImage to the image path:
    profileImage: '/layan.png',  // for images in public folder
    // profileImage: 'https://example.com/photo.jpg',  // for external URLs
    medals: { gold: 0, silver: 0, bronze: 0 },
    team: 'Varsity Swim',
    specialty: ['Freestyle', 'Breaststroke'],
    swimCloudUrl: 'https://www.swimcloud.com/swimmer/2522195/',
    results: [
      { event: '50 Free SCM', time: '30.33', place: '4th', meet: 'SC - 1ST Competitive Swimming', date: 'Nov 4, 2023', isPB: true },
      { event: '100 Breast SCM', time: '	1:30.87', place: '7th', meet: 'SC - 3rd Competitive Championship', date: 'May 10, 2025', isPB: true },
      { event: '50 Back LCM', time: '	38.18', place: '9th', meet: 'UAETSS Competition', date: 'Nov 15–16, 2025' },
    ],
    mediaPhotos: ['/layanmed.png'],
  },
  {
    id: '2',
    name: 'Ziad Ghettas',
    gender: 'male',
    grade: '10BA',
    medals: { gold: 2, silver: 0, bronze: 1 },
    team: 'Varsity Swim',
    specialty: ['Freestyle', 'Fly', 'Breaststroke'],
    profileImage: '/ziad.png',  // for images in public folder
    swimCloudUrl: 'https://www.swimcloud.com/swimmer/2800380/',
    results: [
      { event: '800 Free LCM', time: '9:44.79', place: '12th', meet: 'Abu Dhabi International Championship', date: 'Dec 12–14, 2025', isPB: true },
      { event: '100 Free SCM', time: '59.27', place: '4th', meet: 'SSS Club Championships', date: 'Jan 24, 2026', isPB: true},
      { event: '200 Fly LCM', time: '	2:52.98', place: '5th', meet: 'Abu Dhabi International Championship', date: 'Dec 12–14, 2025' },
    ],
    mediaPhotos: ['/ziadmed1.png', '/ziadmed2.png', '/ziadmed3.png'],
  },
  {
    id: '3',
    name: 'Ahmed Tawfik',
    gender: 'male',
    grade: '7BC',
    medals: { gold: 2, silver: 1, bronze: 0 },
    team: 'Varsity Swim',
    specialty: ['Backstroke'],
    profileImage: '/tawfeeq.png',  // for images in public folder
    swimCloudUrl: 'https://www.swimcloud.com/swimmer/3148642/',
    results: [
      { event: '50 Free LCM', time: '28.76', place: '5th', meet: 'Abu Dhabi International Championship', date: 'Dec 12–14, 2025', isPB: true },
      { event: '100 Back LCM', time: '	1:14.44', place: '6th', meet: 'Abu Dhabi International Championship', date: 'Dec 12–14, 2025', isPB: true },
      { event: '200 Back LCM', time: '2:47.30', place: '4th', meet: 'SC - Open Swimming Championship', date: 'Jun 14–15, 2025' },
    ],
      mediaPhotos: ['/tawfeeqmed1.png', '/tawfeeqmed2.png'],
  },
  {
    id: '4',
    name: 'Yassin Elsawy',
    gender: 'male',
    grade: '10BE',
    medals: { gold: 0, silver: 2, bronze: 0 },
    team: 'Varsity Swim',
    specialty: ['Freestyle', 'Fly'],
    profileImage: '/elsawy.png',  // for images in public folder
    swimCloudUrl: 'https://www.swimcloud.com/swimmer/3188177/',
    results: [
      { event: '100 Fly LCM', time: '1:02.73', place: '2nd', meet: 'Dassa Seconday Individual Championships 2026', date: 'Jan 26, 2026' },
      { event: '200 IM LCM', time: '	2:24.44', place: '1st', meet: 'Abu Dhabi International Swimming Championship', date: 'Dec 13, 2025', isPB: true },
      { event: '50 Free LCM', time: '27.27', place: '14th', meet: 'Hamilton Club Championships', date: 'Jun 16, 2026' },
    ],
      mediaPhotos: ['/elsawymed1.png', '/elsawymed2.png', '/elsawymed3.png', '/elsawymed4.png'],
  },
];