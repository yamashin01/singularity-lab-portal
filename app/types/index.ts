export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
}
