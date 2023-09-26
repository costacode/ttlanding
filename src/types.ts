export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface TeamItem {
  description: string;
  image: string;
  title: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
  video: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  target: string;
  className: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
