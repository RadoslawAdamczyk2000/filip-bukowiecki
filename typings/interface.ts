export interface IntLayout extends IntSeo {
  children: any;
}
export interface IntSeo {
  canonical?: string;
  description: string;
  image: string;
  robots?: string;
  title: string;
  typePage?: string;
}
