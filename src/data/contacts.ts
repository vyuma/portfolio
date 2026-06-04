export interface ContactLink {
  name: string;
  url: string;
  iconUrl: string; // public/ 配下のパス
}

export const contacts: ContactLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/vyuma',
    iconUrl: '/icons/github.png',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61568847274162',
    iconUrl: '/icons/facebook.png',
  },
  {
    name: 'X',
    url: 'https://x.com/',
    iconUrl: '/icons/x.png',
  },
];
