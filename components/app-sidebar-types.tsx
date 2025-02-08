
export type NavItem = {
  title: string;
  icon?: React.ComponentType;
  items?: Array<{
    title: string;
    url: string;
    icon?: React.ComponentType;
    isActive?: boolean;
  }>;
}

export type Items = {
  versions: string[];
  navMain: NavItem[];
}