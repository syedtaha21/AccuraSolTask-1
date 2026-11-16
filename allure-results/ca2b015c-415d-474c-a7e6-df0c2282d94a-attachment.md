# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Slider.spec.ts >> TC03 - Verify Dynamic Slider Values
- Location: tests\Slider.spec.ts:42:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input[type="range"]').first()
Expected: "15"
Received: "14"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" locator('input[type="range"]').first() with timeout 5000ms
  - waiting for locator('input[type="range"]').first()
    13 × locator resolved to <input min="1" max="100" value="5" type="range" class="sp__range"/>
       - unexpected value "14"

```

```yaml
- slider: "14"
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
  160 | 
  161 | 
  162 | 
  163 | 
  164 | 
  165 | 
  166 | 
  167 |   // Get current slider value
  168 |     async getSliderValue(sliderIndex: number) {
  169 | 
  170 |         return await this.locators.allSlider
  171 |             .nth(sliderIndex)
  172 |             .inputValue();
  173 |     }
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
  206 |      // Verify blue background value
  207 |     async verifyBlueValue(expectedValue: number) {
  208 | 
  209 |         await expect(this.locators.sliderValue)
  210 |             .toHaveText(String(expectedValue));
  211 |     }
  212 | 
  213 |     // Verify slider and blue number together
  214 |     async verifySliderAndBlueValue(
  215 |         sliderIndex: number,
  216 |         expectedValue: number
  217 |     ) {
  218 | 
  219 |         const slider = this.locators.allSlider.nth(sliderIndex);
  220 | 
  221 |         // Verify input value
  222 |         await expect(slider)
  223 |             .toHaveValue(String(expectedValue));
  224 | 
  225 |         // Verify blue output value
  226 |         await expect(this.locators.sliderValue)
  227 |             .toHaveText(String(expectedValue));
  228 |     }
  229 | 
  230 | 
  231 | 
  232 | 
  233 | 
  234 | 
  235 | 
  236 | 
  237 | 
  238 | 
  239 | 
  240 | }
```