# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Slider.spec.ts >> TC02-Range Sliders Testing
- Location: tests\Slider.spec.ts:12:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input[type="range"]').first()
Expected: "30"
Received: "10"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" locator('input[type="range"]').first() with timeout 5000ms
  - waiting for locator('input[type="range"]').first()
    13 × locator resolved to <input min="1" max="100" value="5" type="range" class="sp__range"/>
       - unexpected value "10"

```

```yaml
- slider: "10"
```

# Test source

```ts
  57  |         const slider = this.locators.allSlider.nth(sliderIndex);
  58  | 
  59  |         const min = Number(await slider.getAttribute('min') || 0);
  60  |         const max = Number(await slider.getAttribute('max') || 100);
  61  |          const step = Number(await slider.getAttribute('step') || 1);
  62  | 
  63  |         const box = await slider.boundingBox();
  64  | 
  65  |         if (!box) {
  66  |             throw new Error('Slider not found');
  67  |         }
  68  | 
  69  |         const value = Math.max(min, Math.min(max, targetValue));
  70  | 
  71  |         const targetX =
  72  |             box.x + ((value - min) / (max - min)) * box.width;
  73  | 
  74  |         const targetY = box.y + box.height / 2;
  75  | 
  76  |         await this.page.mouse.move(
  77  |             box.x + box.width / 2,
  78  |             targetY
  79  |         );
  80  | 
  81  |         await this.page.mouse.down();
  82  | 
  83  |         await this.page.mouse.move(
  84  |             targetX,
  85  |             targetY,
  86  |             { steps: 20 }
  87  |         );
  88  | 
  89  |         await this.page.mouse.up();
  90  |  // Verify updated slider value
  91  |         await expect(slider).toHaveValue(String(value));
  92  | 
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  | 
  99  | }
  100 | */
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 | 
  109 | 
  110 | async dragSlider(sliderIndex: number, targetValue: number) {
  111 | 
  112 |     const slider = this.locators.allSlider.nth(sliderIndex);
  113 | 
  114 |     const min = Number(await slider.getAttribute('min') || 0);
  115 |     const max = Number(await slider.getAttribute('max') || 100);
  116 |     const step = Number(await slider.getAttribute('step') || 1);
  117 | 
  118 |     const box = await slider.boundingBox();
  119 | 
  120 |     if (!box) {
  121 |         throw new Error('Slider not found');
  122 |     }
  123 | 
  124 |     // Calculate target value according to step
  125 |     const value = Math.max(
  126 |         min,
  127 |         Math.min(max, min + Math.round((targetValue - min) / step) * step)
  128 |     );
  129 | 
  130 |     // Calculate thumb position
  131 |     const thumbOffset = 8;
  132 |     const usableWidth = box.width - (thumbOffset * 2);
  133 | 
  134 |     const targetX =
  135 |         box.x + thumbOffset +
  136 |         ((value - min) / (max - min)) * usableWidth;
  137 | 
  138 |     const targetY = box.y + box.height / 2;
  139 | 
  140 |     // Drag slider
  141 |     await this.page.mouse.move(
  142 |         box.x + thumbOffset,
  143 |         targetY
  144 |     );
  145 | 
  146 |     await this.page.mouse.down();
  147 | 
  148 |     await this.page.mouse.move(
  149 |         targetX,
  150 |         targetY,
  151 |         { steps: 30 }
  152 |     );
  153 | 
  154 |     await this.page.mouse.up();
  155 | 
  156 |     // Verify updated value
> 157 |     await expect(slider).toHaveValue(String(value));
      |                          ^ Error: expect(locator).toHaveValue(expected) failed
  158 | }
  159 | 
  160 |   // Get current slider value
  161 |     async getSliderValue(sliderIndex: number) {
  162 | 
  163 |         return await this.locators.allSlider
  164 |             .nth(sliderIndex)
  165 |             .inputValue();
  166 |     }
  167 | 
  168 |      // Verify updated slider value
  169 |     async verifySliderValue(
  170 |         sliderIndex: number,
  171 |         expectedValue: number
  172 |     ) {
  173 | 
  174 |         await expect(
  175 |             this.locators.allSlider.nth(sliderIndex)
  176 |         ).toHaveValue(String(expectedValue));
  177 |     }
  178 | 
  179 |     // Move first slider
  180 |     async moveFirstSlider(value: number) {
  181 |         await this.dragSlider(0, value);
  182 |     }
  183 | 
  184 |     // Move second slider
  185 |     async moveSecondSlider(value: number) {
  186 |         await this.dragSlider(1, value);
  187 |     }
  188 | 
  189 | 
  190 |     //move 3rd
  191 |     async moveThirdSlider(value: number) {
  192 |         await this.dragSlider(2, value);
  193 |     }
  194 | 
  195 | 
  196 | 
  197 | 
  198 | 
  199 | 
  200 | 
  201 | 
  202 | 
  203 | 
  204 |     
  205 | // Move slider to exact value using keyboard
  206 | async setSliderValue(sliderIndex: number, targetValue: number) {
  207 | 
  208 |     const slider = this.locators.allSlider.nth(sliderIndex);
  209 | 
  210 |     const min = Number(await slider.getAttribute('min') || 0);
  211 |     const max = Number(await slider.getAttribute('max') || 100);
  212 |     const step = Number(await slider.getAttribute('step') || 1);
  213 | 
  214 |     if (targetValue < min || targetValue > max) {
  215 |         throw new Error('Target value is outside slider range');
  216 |     }
  217 | 
  218 |     const steps = (targetValue - min) / step;
  219 | 
  220 |     if (!Number.isInteger(steps)) {
  221 |         throw new Error('Target value does not match slider step');
  222 |     }
  223 | 
  224 |     // Focus slider
  225 |     await slider.focus();
  226 | 
  227 |     // Move to minimum value
  228 |     await slider.press('Home');
  229 | 
  230 |     // Move forward using ArrowRight
  231 |     for (let i = 0; i < steps; i++) {
  232 |         await slider.press('ArrowRight');
  233 |     }
  234 | 
  235 |     // Verify actual slider value
  236 |     await expect(slider).toHaveValue(String(targetValue));
  237 | }
  238 | 
  239 | 
  240 | 
  241 | 
  242 | 
  243 | 
  244 |      // Verify blue background value
  245 |     async verifyBlueValue(expectedValue: number) {
  246 | 
  247 |         await expect(this.locators.sliderValue)
  248 |             .toHaveText(String(expectedValue));
  249 |     }
  250 | 
  251 |     // Verify slider and blue number together
  252 |     async verifySliderAndBlueValue(
  253 |         sliderIndex: number,
  254 |         expectedValue: number
  255 |     ) {
  256 | 
  257 |         const slider = this.locators.allSlider.nth(sliderIndex);
```