# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Slider.spec.ts >> TC03 - Verify Dynamic Slider Values
- Location: tests\Slider.spec.ts:42:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#range')
Expected: "30"
Received: "5"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('#range') with timeout 5000ms
  - waiting for locator('#range')
    14 × locator resolved to <output id="range">5</output>
       - unexpected value "5"

```

```yaml
- status: "5"
```

# Test source

```ts
  174 | 
  175 |  
  176 | 
  177 |      // Verify updated slider value
  178 |     async verifySliderValue(
  179 |         sliderIndex: number,
  180 |         expectedValue: number
  181 |     ) {
  182 | 
  183 |         await expect(
  184 |             this.locators.allSlider.nth(sliderIndex)
  185 |         ).toHaveValue(String(expectedValue));
  186 |     }
  187 | 
  188 |     // Move first slider
  189 |     async moveFirstSlider(value: number) {
  190 |         await this.dragSlider(0, value);
  191 |     }
  192 | 
  193 |     // Move second slider
  194 |     async moveSecondSlider(value: number) {
  195 |         await this.dragSlider(1, value);
  196 |     }
  197 | 
  198 | 
  199 |     //move 3rd
  200 |     async moveThirdSlider(value: number) {
  201 |         await this.dragSlider(2, value);
  202 |     }
  203 | 
  204 | 
  205 | 
  206 | 
  207 | 
  208 | 
  209 | 
  210 | 
  211 | 
  212 | 
  213 |     
  214 | // Move slider to exact value using keyboard
  215 | async setSliderValue(sliderIndex: number, targetValue: number) {
  216 | 
  217 |     const slider = this.locators.allSlider.nth(sliderIndex);
  218 | 
  219 |     const min = Number(await slider.getAttribute('min') || 0);
  220 |     const max = Number(await slider.getAttribute('max') || 100);
  221 |     const step = Number(await slider.getAttribute('step') || 1);
  222 | 
  223 |     if (targetValue < min || targetValue > max) {
  224 |         throw new Error('Target value is outside slider range');
  225 |     }
  226 | 
  227 |     const steps = (targetValue - min) / step;
  228 | 
  229 |     if (!Number.isInteger(steps)) {
  230 |         throw new Error('Target value does not match slider step');
  231 |     }
  232 | 
  233 |     // Focus slider
  234 |     await slider.focus();
  235 | 
  236 |     // Move to minimum value
  237 |     await slider.press('Home');
  238 | 
  239 |     // Move forward using ArrowRight
  240 |     for (let i = 0; i < steps; i++) {
  241 |         await slider.press('ArrowRight');
  242 |     }
  243 | 
  244 |     // Verify actual slider value
  245 |     await expect(slider).toHaveValue(String(targetValue));
  246 | }
  247 | 
  248 | 
  249 | 
  250 | 
  251 | 
  252 | 
  253 |      // Verify blue background value
  254 |     async verifyBlueValue(expectedValue: number) {
  255 | 
  256 |         await expect(this.locators.sliderValue)
  257 |             .toHaveText(String(expectedValue));
  258 |     }
  259 | 
  260 |     // Verify slider and blue number together
  261 |     async verifySliderAndBlueValue(
  262 |         sliderIndex: number,
  263 |         expectedValue: number
  264 |     ) {
  265 | 
  266 |         const slider = this.locators.allSlider.nth(sliderIndex);
  267 | 
  268 |         // Verify input value
  269 |         await expect(slider)
  270 |             .toHaveValue(String(expectedValue));
  271 | 
  272 |         // Verify blue output value
  273 |         await expect(this.locators.sliderValue)
> 274 |             .toHaveText(String(expectedValue));
      |              ^ Error: expect(locator).toHaveText(expected) failed
  275 |     }
  276 | 
  277 | }
```