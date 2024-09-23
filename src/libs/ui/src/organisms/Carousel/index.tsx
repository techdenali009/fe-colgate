import React, { useState } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerSlide } from '../CarouselBannerSlide';
import { CarouselProps } from '@utils/interface';
import './carousel.style.scss';

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onChange = (index: number) => {
        setCurrentIndex(index);
    };

    const renderPrevArrow = (onClickHandler: () => void, hasPrev: boolean, label: string) => {
        const currentSlide = slides[currentIndex];
        if (currentSlide.bgColor.includes('bg-black')) {
            return (
                <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-prev-arrow-black"
                    aria-label={label}
                />
            );
        } else if (currentSlide.bgColor.includes('bg-gray-100')) {
            return (
                <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-prev-arrow-other"
                    aria-label={label}
                />
            );
        }
        return null; // Fallback if no condition matches
    };

    const renderNextArrow = (onClickHandler: () => void, hasNext: boolean, label: string) => {
        const currentSlide = slides[currentIndex];
        if (currentSlide.bgColor.includes('bg-black')) {
            return (
                <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-next-arrow-black"
                    aria-label={label}
                />
            );
        } else if (currentSlide.bgColor.includes('bg-gray-100')) {
            return (
                <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-next-arrow-other"
                    aria-label={label}
                />
            );
        }
        return null; // Fallback if no condition matches
    };

    return (
        <ReactCarousel
            // autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            className="carousel-container"
            onChange={onChange} // Update current index on slide change
            renderArrowPrev={renderPrevArrow}
            renderArrowNext={renderNextArrow}
        >
            {slides.map((slide, index) => (
                <BannerSlide
                    key={index}
                    imgSrc={slide.imgSrc}
                    imgAlt={slide.imgAlt}
                    heading={slide.heading}
                    subheading={slide.subheading}
                    buttonText={slide.buttonText}
                    bgColor={slide.bgColor}
                />
            ))}
            
        </ReactCarousel>
    );
};
