import {Page, expect} from '@playwright/test'
import { SliderLocator } from './Sliders.locators';

export class SliderActions{
   private page:Page;
     locators:SliderLocator;
    
    constructor(page:Page){
        this.page= page;
        this.locators= new SliderLocator(page);

    }


    //open website
    async openWebsite(){
    await this.page.goto('https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/');
    }

    //verify heading
async verifyingHeading(){
    await expect(this.locators.SliderHeading).toBeVisible();
}

//verify sliders are visible
async verifySlidersVisible(){
    const count= await this.locators.allSlider.count();
    for(let i=0; i< count; i++){
        await expect(this.locators.allSlider.nth(i)).toBeVisible()
    }
}
// verify total sliders
async verifySliderCount(){
    await expect(this.locators.allSlider).toHaveCount(8);
}

//verify Default Val
 async verifyDefaultValues() {

        const defaultValues = [5, 20, 15, 50, 25, 30, 40, 80];

        for (let i = 0; i < defaultValues.length; i++) {

            await expect(
                this.locators.allSlider.nth(i)
            ).toHaveValue(String(defaultValues[i]));
        }
    }

async dragSlider(sliderIndex: number, targetValue: number) {

    const slider = this.locators.allSlider.nth(sliderIndex);

    const min = Number(await slider.getAttribute('min') || 0);
    const max = Number(await slider.getAttribute('max') || 100);
    const step = Number(await slider.getAttribute('step') || 1);

    const box = await slider.boundingBox();

    if (!box) {
        throw new Error('Slider not found');
    }

    // Calculate target value according to step
    const value = Math.max(
        min,
        Math.min(max, min + Math.round((targetValue - min) / step) * step)
    );

    // Calculate thumb position
    const thumbOffset = 8;
    const usableWidth = box.width - (thumbOffset * 2);

    const targetX =
        box.x + thumbOffset +
        ((value - min) / (max - min)) * usableWidth;

    const targetY = box.y + box.height / 2;

    // Drag slider
    await this.page.mouse.move(
        box.x + thumbOffset,
        targetY
    );

    await this.page.mouse.down();

    await this.page.mouse.move(
        targetX,
        targetY,
        { steps: 30 }
    );

    await this.page.mouse.up();

    // Verify updated value
    await expect(slider).toHaveValue(String(value));
}

  // Get current slider value
    async getSliderValue(sliderIndex: number) {

        return await this.locators.allSlider
            .nth(sliderIndex)
            .inputValue();
    }

     // Verify updated slider value
    async verifySliderValue(
        sliderIndex: number,
        expectedValue: number
    ) {

        await expect(
            this.locators.allSlider.nth(sliderIndex)
        ).toHaveValue(String(expectedValue));
    }

    // Move first slider
    async moveFirstSlider(value: number) {
        await this.dragSlider(0, value);
    }

    // Move second slider
    async moveSecondSlider(value: number) {
        await this.dragSlider(1, value);
    }


   
    
// Move slider to exact value using keyboard
async setSliderValue(sliderIndex: number, targetValue: number) {

    const slider = this.locators.allSlider.nth(sliderIndex);

    const min = Number(await slider.getAttribute('min') || 0);
    const max = Number(await slider.getAttribute('max') || 100);
    const step = Number(await slider.getAttribute('step') || 1);

    if (targetValue < min || targetValue > max) {
        throw new Error('Target value is outside slider range');
    }

    const steps = (targetValue - min) / step;

    if (!Number.isInteger(steps)) {
        throw new Error('Target value does not match slider step');
    }

    // Focus slider
    await slider.focus();

    // Move to minimum value
    await slider.press('Home');

    // Move forward using ArrowRight
    for (let i = 0; i < steps; i++) {
        await slider.press('ArrowRight');
    }

    // Verify actual slider value
    await expect(slider).toHaveValue(String(targetValue));
}


     // Verify blue background value
    async verifyBlueValue(expectedValue: number) {

        await expect(this.locators.sliderValue)
            .toHaveText(String(expectedValue));
    }

    // Verify slider and blue number together
    async verifySliderAndBlueValue(
        sliderIndex: number,
        expectedValue: number
    ) {

        const slider = this.locators.allSlider.nth(sliderIndex);

        // Verify input value
        await expect(slider)
            .toHaveValue(String(expectedValue));

        // Verify blue output value
        await expect(this.locators.sliderValue)
            .toHaveText(String(expectedValue));
    }


    // Test all 8 sliders
    async testAllSliders() {

        const defaultValues = [5, 20, 15, 50, 25, 30, 40, 80];

        const targetValues = [30, 40, 25, 70, 45, 60, 75, 90];

        const count = await this.locators.allSlider.count();

        // Verify total sliders
        expect(count).toBe(8);

        for (let i = 0; i < count; i++) {

            const slider = this.locators.allSlider.nth(i);

          

            // Verify default value
            await expect(slider).toHaveValue(
                String(defaultValues[i])
            );

            // Move slider to target value
            await this.setSliderValue(i, targetValues[i]);

            // Verify updated input value
            await expect(slider).toHaveValue(
                String(targetValues[i])
            );

           
        }
    }

}