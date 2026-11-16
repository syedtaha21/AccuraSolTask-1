import{test} from '@playwright/test';
import { SliderActions } from '../Pages/Sliders/Sliders.actions';

test('TC01- verify Heading', async({page})=>{
      const sliderActions= new SliderActions(page);
      await sliderActions.openWebsite();
      await sliderActions.verifyingHeading();
});



test('TC02-Range Sliders Testing', async({page})=>{
  const sliderActions = new SliderActions(page);

    // Open website
    await sliderActions.openWebsite();

    // Verify slider count
    await sliderActions.verifySliderCount();

    // Verify visibility
    await sliderActions.verifySlidersVisible();

    // Verify default values
    await sliderActions.verifyDefaultValues();

// Drag first slider from 5 to 30
    await sliderActions.moveFirstSlider(30);

    // Verify updated value
    await sliderActions.verifySliderValue(0, 30);

    // Drag second slider from 20 to 60
    await sliderActions.moveSecondSlider(60);

    // Verify updated value
    await sliderActions.verifySliderValue(1, 60);

});


test('TC03 - Verify Dynamic Slider Values', async ({ page }) => {

    const sliderActions = new SliderActions(page);

    await sliderActions.openWebsite();

    // Initial value
    await sliderActions.verifyBlueValue(5);

    // Move slider to 30
    await sliderActions.setSliderValue(0, 30);

    await sliderActions.verifySliderAndBlueValue(0, 30);

    // Move slider backward to 15
    await sliderActions.setSliderValue(0, 15);

    await sliderActions.verifySliderAndBlueValue(0, 15);

});



test('TC04 - Verify All 8 Range Sliders', async ({ page }) => {

    const sliderActions = new SliderActions(page);

    await sliderActions.openWebsite();

    await sliderActions.testAllSliders();

});