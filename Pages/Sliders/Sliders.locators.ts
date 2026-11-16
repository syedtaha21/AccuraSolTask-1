import { Page, Locator } from '@playwright/test';

export class SliderLocator{
    allSlider:Locator;
    SliderHeading:Locator;
    slider1:Locator;
    slider2:Locator;
    slider3:Locator;
    slider4:Locator;
    slider5:Locator;
    slider6:Locator;
    slider7:Locator;
    slider8:Locator;

    sliderValue:Locator;
    constructor(page:Page){

         this.allSlider= page.locator('input[type="range"]')
        this.SliderHeading= page.locator('h1.text-size-48');
        this.slider1= this.allSlider.nth(0);
        this.slider2=this.allSlider.nth(1);
        this.slider3=this.allSlider.nth(2);
        this.slider4= this.allSlider.nth(3);
        this.slider5= this.allSlider.nth(4);
        this.slider6= this.allSlider.nth(5);
        this.slider7= this.allSlider.nth(6);
        this.slider8= this.allSlider.nth(7);

        this.sliderValue= page.locator('#range');
    }
}