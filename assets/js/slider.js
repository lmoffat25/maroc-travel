class SimpleSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.wrapper = this.slider.querySelector('.slider-wrapper');
        this.slides = Array.from(this.wrapper.children);
        this.prevButton = this.slider.querySelector('.slider-button.prev');
        this.nextButton = this.slider.querySelector('.slider-button.next');
        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.updateSlider();
        this.addEventListeners();
    }

    addEventListeners() {
        this.nextButton.addEventListener('click', () => this.goToSlide(this.currentIndex + 1));
        this.prevButton.addEventListener('click', () => this.goToSlide(this.currentIndex - 1));
    }

    goToSlide(index) {
        // Ensure index stays within bounds
        if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }

        this.updateSlider();
    }

    updateSlider() {
        const offset = -this.currentIndex * 100; // Calculate offset in percentage
        this.wrapper.style.transform = `translateX(${offset}%)`;
    }
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    const sliderElement = document.querySelector('.carousel-img__carousel');
    if (sliderElement) {
        new SimpleSlider(sliderElement);
    }
});
