export type HeadingProps = {
    text: string;
  };

export type ImageProps = {
    src: string;
    alt: string;
  };
  
export type SubheadingProps = {
    text: string;
  };
  
export type BannerContentProps = {
    heading: string;
    subheading: string;
    buttonText: string;
    
  };
  
export type Slide = {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    subheading: string;
    buttonText: string;
    bgColor:string;
    
  };
  
  export interface CarouselProps {
    slides: {
        imgSrc: string;
        imgAlt: string;
        heading: string;
        subheading: string;
        buttonText: string;
        bgColor: string;
    }[];
}

  
export type BannerSlideProps = {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    subheading: string;
    buttonText: string;
    bgColor:string;
    
  };  