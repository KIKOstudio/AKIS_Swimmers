export interface Athlete {
  id: string;
  name: string;
  gender: 'male' | 'female';
  grade: number;
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
    name: 'Emma Johnson',
    gender: 'female',
    grade: 11,
    // To add a profile image, set profileImage to the image path:
    // profileImage: '/images/emma-johnson.jpg',  // for images in public folder
    // profileImage: 'https://example.com/photo.jpg',  // for external URLs
    medals: { gold: 5, silver: 3, bronze: 2 },
    team: 'Varsity Swim',
    specialty: ['Freestyle', 'Butterfly'],
    results: [
      { event: '100m Freestyle', time: '54.32', place: '1st', meet: 'State Championships', date: 'Dec 15, 2024', isPB: true },
      { event: '50m Butterfly', time: '28.45', place: '2nd', meet: 'Regional Finals', date: 'Nov 20, 2024', isPB: true },
      { event: '200m Freestyle', time: '2:01.89', place: '1st', meet: 'District Meet', date: 'Oct 10, 2024' },
      { event: '100m Butterfly', time: '1:02.34', place: '3rd', meet: 'Invitational', date: 'Sep 28, 2024' },
    ],
  },
  {
    id: '2',
    name: 'Michael Chen',
    gender: 'male',
    grade: 12,
    medals: { gold: 8, silver: 4, bronze: 1 },
    team: 'Varsity Swim',
    specialty: ['Backstroke', 'IM'],
    results: [
      { event: '200m Backstroke', time: '1:58.12', place: '1st', meet: 'State Championships', date: 'Dec 15, 2024', isPB: true },
      { event: '400m IM', time: '4:22.67', place: '1st', meet: 'Regional Finals', date: 'Nov 20, 2024' },
      { event: '100m Backstroke', time: '55.89', place: '2nd', meet: 'District Meet', date: 'Oct 10, 2024', isPB: true },
    ],
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    gender: 'female',
    grade: 10,
    medals: { gold: 2, silver: 5, bronze: 3 },
    team: 'JV Swim',
    specialty: ['Breaststroke'],
    results: [
      { event: '100m Breaststroke', time: '1:12.45', place: '2nd', meet: 'JV Championships', date: 'Dec 10, 2024', isPB: true },
      { event: '50m Breaststroke', time: '34.22', place: '1st', meet: 'Dual Meet', date: 'Nov 15, 2024' },
      { event: '200m Breaststroke', time: '2:42.89', place: '3rd', meet: 'Invitational', date: 'Oct 22, 2024' },
    ],
  },
  {
    id: '4',
    name: 'James Williams',
    gender: 'male',
    grade: 11,
    medals: { gold: 4, silver: 2, bronze: 4 },
    team: 'Varsity Swim',
    specialty: ['Freestyle', 'Sprint'],
    results: [
      { event: '50m Freestyle', time: '23.45', place: '1st', meet: 'Sprinter Classic', date: 'Dec 8, 2024', isPB: true },
      { event: '100m Freestyle', time: '50.12', place: '2nd', meet: 'State Championships', date: 'Dec 15, 2024' },
      { event: '200m Freestyle', time: '1:52.34', place: '3rd', meet: 'Regional Finals', date: 'Nov 20, 2024' },
    ],
  },
  {
    id: '5',
    name: 'Olivia Taylor',
    gender: 'female',
    grade: 12,
    medals: { gold: 6, silver: 4, bronze: 2 },
    team: 'Varsity Swim',
    specialty: ['IM', 'Distance'],
    results: [
      { event: '400m IM', time: '4:45.23', place: '1st', meet: 'State Championships', date: 'Dec 15, 2024', isPB: true },
      { event: '800m Freestyle', time: '8:42.56', place: '1st', meet: 'Distance Invitational', date: 'Nov 30, 2024' },
      { event: '200m IM', time: '2:15.67', place: '2nd', meet: 'Regional Finals', date: 'Nov 20, 2024', isPB: true },
    ],
  },
  {
    id: '6',
    name: 'David Park',
    gender: 'male',
    grade: 9,
    medals: { gold: 1, silver: 2, bronze: 3 },
    team: 'JV Swim',
    specialty: ['Butterfly'],
    results: [
      { event: '100m Butterfly', time: '1:05.78', place: '2nd', meet: 'JV Championships', date: 'Dec 10, 2024', isPB: true },
      { event: '50m Butterfly', time: '29.34', place: '1st', meet: 'Freshman Meet', date: 'Nov 5, 2024' },
    ],
  },
  {
    id: '7',
    name: 'Ava Martinez',
    gender: 'female',
    grade: 9,
    medals: { gold: 0, silver: 3, bronze: 2 },
    team: 'JV Swim',
    specialty: ['Freestyle'],
    results: [
      { event: '200m Freestyle', time: '2:12.45', place: '2nd', meet: 'JV Championships', date: 'Dec 10, 2024', isPB: true },
      { event: '100m Freestyle', time: '1:02.89', place: '3rd', meet: 'Freshman Meet', date: 'Nov 5, 2024' },
    ],
  },
  {
    id: '8',
    name: 'Ethan Brown',
    gender: 'male',
    grade: 10,
    medals: { gold: 3, silver: 1, bronze: 2 },
    team: 'Varsity Swim',
    specialty: ['Breaststroke', 'IM'],
    results: [
      { event: '100m Breaststroke', time: '1:05.23', place: '1st', meet: 'District Meet', date: 'Oct 10, 2024', isPB: true },
      { event: '200m IM', time: '2:08.45', place: '2nd', meet: 'Invitational', date: 'Sep 28, 2024' },
      { event: '50m Breaststroke', time: '30.12', place: '1st', meet: 'Dual Meet', date: 'Nov 15, 2024' },
    ],
  },
];
