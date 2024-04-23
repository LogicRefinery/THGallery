export type Breadcrumb = {
  slug: string;
  title: string;
  index: number;
  type: string;
};

export type PhotoUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type PhotoLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type TopicSubmission = {
  status: string;
  approved_on: string;
};

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type UserProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type SocialLinks = {
  instagram_username: string;
  portfolio_url: string | null;
  twitter_username: string;
  paypal_email: string | null;
};

export type PhotoUser = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string | null;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: UserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: SocialLinks;
};

export type PhotoTag = {
  type: string;
  title: string;
};

export type Photo = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: Breadcrumb[];
  urls: PhotoUrls;
  links: PhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null;
  topic_submissions: Record<string, TopicSubmission>;
  user: PhotoUser;
  tags: PhotoTag[];
};

export type PhotoResponse = {
  total: number;
  total_pages: number;
  results: Photo[];
};
