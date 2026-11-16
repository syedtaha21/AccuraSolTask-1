# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Dropdown Test Cases >> TC01 - Verify country dropdown with search
- Location: tests\Dropdown.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#select2-country-container')
    - locator resolved to <span title="" id="select2-country-container" class="select2-selection__rendered"></span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    37 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic:
      - banner:
        - navigation [ref=e1]:
          - generic:
            - generic:
              - link "Visit TestMu AI Homepage" [ref=e3]:
                - /url: https://www.testmuai.com/
                - img "TestMu AI Logo" [ref=e4]
              - button "Menu" [ref=e5] [cursor=pointer]:
                - img "Open menu" [ref=e6]
      - main:
        - generic:
          - generic [ref=e7]:
            - generic:
              - heading "Jquery Dropdown Search Demo" [level=1]
          - generic [ref=e9]:
            - generic:
              - generic [ref=e10]: Drop Down with Search
              - generic [ref=e11]:
                - text: "Select Country :"
                - combobox [aria-hidden] [ref=e12]
                - combobox [ref=e15] [cursor=pointer]
            - generic:
              - generic [ref=e16]: Select Multiple Values with search
              - generic [ref=e17]:
                - text: "Select State :"
                - listbox [aria-hidden] [ref=e18]:
                  - option [ref=e19]: Alabama
                  - option [ref=e20]: Alaska
                  - option [ref=e21]: Arizona
                  - option [ref=e22]: Arkansas
                  - option [ref=e23]: California
                  - option [ref=e24]: Colorado
                  - option [ref=e25]: Connecticut
                  - option [ref=e26]: Delaware
                  - option [ref=e27]: District Of Columbia
                  - option [ref=e28]: Florida
                  - option [ref=e29]: Georgia
                  - option [ref=e30]: Hawaii
                  - option [ref=e31]: Idaho
                  - option [ref=e32]: Illinois
                  - option [ref=e33]: Indiana
                  - option [ref=e34]: Iowa
                  - option [ref=e35]: Kansas
                  - option [ref=e36]: Kentucky
                  - option [ref=e37]: Louisiana
                  - option [ref=e38]: Maine
                  - option [ref=e39]: Maryland
                  - option [ref=e40]: Massachusetts
                  - option [ref=e41]: Michigan
                  - option [ref=e42]: Minnesota
                  - option [ref=e43]: Mississippi
                  - option [ref=e44]: Missouri
                  - option [ref=e45]: Montana
                  - option [ref=e46]: Nebraska
                  - option [ref=e47]: Nevada
                  - option [ref=e48]: New Hampshire
                  - option [ref=e49]: New Jersey
                  - option [ref=e50]: New Mexico
                  - option [ref=e51]: New York
                  - option [ref=e52]: North Carolina
                  - option [ref=e53]: North Dakota
                  - option [ref=e54]: Ohio
                  - option [ref=e55]: Oklahoma
                  - option [ref=e56]: Oregon
                  - option [ref=e57]: Pennsylvania
                  - option [ref=e58]: Rhode Island
                  - option [ref=e59]: South Carolina
                  - option [ref=e60]: South Dakota
                  - option [ref=e61]: Tennessee
                  - option [ref=e62]: Texas
                  - option [ref=e63]: Utah
                  - option [ref=e64]: Vermont
                  - option [ref=e65]: Virginia
                  - option [ref=e66]: Washington
                  - option [ref=e67]: West Virginia
                  - option [ref=e68]: Wisconsin
                  - option [ref=e69]: Wyoming
                - combobox [ref=e70]:
                  - list [ref=e71]:
                    - listitem [ref=e72]:
                      - textbox "Select state(s)" [ref=e73]
            - generic:
              - generic [ref=e74]: Drop Down with Disabled values
              - generic [ref=e75]:
                - text: "Select Country :"
                - combobox [aria-hidden] [ref=e76]
                - combobox "Puerto Rico" [ref=e77] [cursor=pointer]
            - generic:
              - generic [ref=e79]: Drop-down with Category related options
              - generic [ref=e80]:
                - text: Select a file
                - combobox "Select a file" [ref=e81]:
                  - option "PHP" [selected]
                  - option "Python"
                  - option "Ruby"
                  - option "C"
                  - option "Java"
                  - option ".Net"
                  - option "Unknown Script"
                  - option "Other file"
      - contentinfo:
        - generic [ref=e82]:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - text: Products & Features
                    - generic [ref=e83] [cursor=pointer]: −
                  - generic:
                    - list:
                      - listitem:
                        - link "Automation Testing Cloud" [ref=e84]:
                          - /url: /automation-cloud/
                      - listitem:
                        - link "KaneAI - GenAI-Native Testing Agent" [ref=e85]:
                          - /url: /kane-ai/
                      - listitem:
                        - link "Kane CLI" [ref=e86]:
                          - /url: /kane-cli/
                      - listitem:
                        - link "Kane CLI for Coding Agents" [ref=e87]:
                          - /url: /kane-cli/agents/
                      - listitem:
                        - link "Agent Testing" [ref=e88]:
                          - /url: /agent-testing/
                      - listitem:
                        - link "Agent Functional Testing" [ref=e89]:
                          - /url: /agent-assurance/
                      - listitem:
                        - link "Video Agent Testing" [ref=e90]:
                          - /url: /video-agent-testing/
                      - listitem:
                        - link "AI Agents" [ref=e91]:
                          - /url: /agents/
                      - listitem:
                        - link "MCP Server" [ref=e92]:
                          - /url: /mcp/
                      - listitem:
                        - link "Cross Browser Testing" [ref=e93]:
                          - /url: /cross-browser-testing/
                      - listitem:
                        - link "Real Device Cloud" [ref=e94]:
                          - /url: /real-device-cloud/
                      - listitem:
                        - link "Test Management" [ref=e95]:
                          - /url: /test-management/
                      - listitem:
                        - link "Mobile App Testing" [ref=e96]:
                          - /url: /mobile-app-testing/
                      - listitem:
                        - link "AI Testing" [ref=e97]:
                          - /url: /ai-testing/
                      - listitem:
                        - link "HyperExecute" [ref=e98]:
                          - /url: /hyperexecute/
                      - listitem:
                        - link "Performance Testing" [ref=e99]:
                          - /url: /performance-testing/
                      - listitem:
                        - link "Browser Cloud" [ref=e100]:
                          - /url: /browser-cloud/
                      - listitem:
                        - link "LT Debug" [ref=e101]:
                          - /url: /lt-debug/
                      - listitem:
                        - link "Local Page Testing" [ref=e102]:
                          - /url: /local-page-testing/
                      - listitem:
                        - link "Automated Screenshots" [ref=e103]:
                          - /url: /automated-screenshot/
                      - listitem:
                        - link "Geo-Location Testing" [ref=e104]:
                          - /url: /geolocation-testing/
                      - listitem:
                        - link "Accessibility Testing" [ref=e105]:
                          - /url: /accessibility-testing/
                      - listitem:
                        - link "Responsive Testing" [ref=e106]:
                          - /url: /responsive-test-online/
                      - listitem:
                        - link "Localization Testing" [ref=e107]:
                          - /url: /localization-testing/
                      - listitem:
                        - link "SmartUI Visual Testing Tool" [ref=e108]:
                          - /url: /visual-testing-tool/
                      - listitem:
                        - link "Integrations" [ref=e109]:
                          - /url: /integrations/
                      - listitem:
                        - link "Test Analytics" [ref=e110]:
                          - /url: /test-analytics/
                      - listitem:
                        - link "Professional Services" [ref=e111]:
                          - /url: /professional-services/
                      - listitem:
                        - link "Agentic Testing" [ref=e112]:
                          - /url: /agentic-testing/
                - generic:
                  - generic:
                    - text: Test on
                    - generic [ref=e113] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link [ref=e114]:
                          - /url: /test-on-samsung-galaxy-s26/
                          - text: Samsung Galaxy S26
                          - img "New Samsung Galaxy S26" [ref=e115]
                      - listitem:
                        - link "iPhone 17" [ref=e116]:
                          - /url: /test-on-iphone-17/
                      - listitem:
                        - link "List of Browsers" [ref=e117]:
                          - /url: /list-of-browsers/
                      - listitem:
                        - link "List of Real Devices" [ref=e118]:
                          - /url: /list-of-real-devices/
                      - listitem:
                        - link "Internet Explorer" [ref=e119]:
                          - /url: /test-on-internet-explorer-browsers/
                      - listitem:
                        - link "Firefox" [ref=e120]:
                          - /url: /test-on-firefox-browsers/
                      - listitem:
                        - link "Chrome" [ref=e121]:
                          - /url: /test-on-chrome-browsers/
                      - listitem:
                        - link "Safari Browser Online" [ref=e122]:
                          - /url: /test-on-safari-browsers/
                      - listitem:
                        - link "Microsoft Edge" [ref=e123]:
                          - /url: /test-on-edge-browsers/
                      - listitem:
                        - link "Opera" [ref=e124]:
                          - /url: /test-on-opera-browsers/
                      - listitem:
                        - link "Yandex" [ref=e125]:
                          - /url: /test-on-yandex-browsers/
                      - listitem:
                        - link "Mac OS" [ref=e126]:
                          - /url: /test-on-macos-browsers/
                      - listitem:
                        - link "Mobile Devices" [ref=e127]:
                          - /url: /test-on-mobile-devices/
                      - listitem:
                        - link "iOS Simulator" [ref=e128]:
                          - /url: /ios-simulator-online/
                      - listitem:
                        - link "Android Emulator" [ref=e129]:
                          - /url: /android-emulator-online/
                      - listitem:
                        - link "Browser Emulator" [ref=e130]:
                          - /url: /browser-emulator-online/
                      - listitem:
                        - link "Golden Gate" [ref=e131]:
                          - /url: /test-on-macos-golden-gate/
                - generic:
                  - generic:
                    - text: Browser Automation
                    - generic [ref=e132] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "Selenium Testing" [ref=e133]:
                          - /url: /selenium-automation/
                      - listitem:
                        - link "Selenium Grid" [ref=e134]:
                          - /url: /selenium-grid-online/
                      - listitem:
                        - link "Cypress Testing" [ref=e135]:
                          - /url: /cypress-testing/
                      - listitem:
                        - link "Playwright Testing" [ref=e136]:
                          - /url: /playwright-testing/
                      - listitem:
                        - link "Puppeteer Testing" [ref=e137]:
                          - /url: /puppeteer-testing/
                      - listitem:
                        - link "Taiko Testing" [ref=e138]:
                          - /url: /taiko-automation/
                - generic:
                  - generic:
                    - link "Compare TestMu AI" [ref=e139]:
                      - /url: /vs/
                    - generic [ref=e140] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "Browserstack Alternative" [ref=e141]:
                          - /url: /browserstack-alternative/
                      - listitem:
                        - link "Sauce Labs Alternative" [ref=e142]:
                          - /url: /saucelabs-alternative/
                      - listitem:
                        - link "Perfecto Alternative" [ref=e143]:
                          - /url: /perfecto-alternative/
                      - listitem:
                        - link "mabl Alternative" [ref=e144]:
                          - /url: /mabl-alternative/
                      - listitem:
                        - link "Testim Alternative" [ref=e145]:
                          - /url: /testim-alternative/
                      - listitem:
                        - link "Kobiton Alternative" [ref=e146]:
                          - /url: /kobiton-alternative/
                - generic:
                  - generic:
                    - text: Mobile App Automation
                    - generic [ref=e147] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "Appium Testing" [ref=e148]:
                          - /url: /appium-mobile-testing/
                      - listitem:
                        - link "Espresso Testing" [ref=e149]:
                          - /url: /espresso-automation-testing/
                      - listitem:
                        - link "XCUITest Testing" [ref=e150]:
                          - /url: /xcuitest-app-testing/
                - generic:
                  - generic:
                    - text: Resources
                    - generic [ref=e151] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "TestMu Conf 2027" [ref=e152]:
                          - /url: /testmuconf-2027/
                      - listitem:
                        - link "Use Cases" [ref=e153]:
                          - /url: /use-cases/
                      - listitem:
                        - link "Research" [ref=e154]:
                          - /url: /research/
                      - listitem:
                        - link "Blogs" [ref=e155]:
                          - /url: /blog/
                      - listitem:
                        - link "Certifications" [ref=e156]:
                          - /url: /certifications/
                      - listitem:
                        - link "Newsletter" [ref=e157]:
                          - /url: /newsletter/
                      - listitem:
                        - link "Webinars" [ref=e158]:
                          - /url: /webinar/
                      - listitem:
                        - link "FAQ" [ref=e159]:
                          - /url: /support/faq/
                      - listitem:
                        - link "Software Testing [Glossary]" [ref=e160]:
                          - /url: /learning-hub/software-testing-terminology/
                      - listitem:
                        - link "QA Job Board" [ref=e161]:
                          - /url: /qa-job-board/
                      - listitem:
                        - link "Software Testing Questions" [ref=e162]:
                          - /url: /software-testing-questions/
                      - listitem:
                        - link "Free Online Tools" [ref=e163]:
                          - /url: /free-online-tools/
                      - listitem:
                        - link "Latest Versions" [ref=e164]:
                          - /url: /latest-version/
                      - listitem:
                        - link "AI Testing Tools" [ref=e165]:
                          - /url: /blog/ai-testing-tools/
                      - listitem:
                        - link "Sitemap" [ref=e166]:
                          - /url: /sitemap.xml
                      - listitem:
                        - link "Status" [ref=e167]:
                          - /url: https://status.lambdatest.io
                - generic:
                  - generic:
                    - text: Getting Started
                    - generic [ref=e168] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "Test an AI Agent" [ref=e169]:
                          - /url: /support/docs/getting-started-with-agent-testing-platform/
                      - listitem:
                        - link "Create tests with KaneAI" [ref=e170]:
                          - /url: /support/docs/getting-started-with-kane-ai/
                      - listitem:
                        - link "Use Kane CLI" [ref=e171]:
                          - /url: /docs/kane-cli-introduction/
                      - listitem:
                        - link "Launch Browser Cloud" [ref=e172]:
                          - /url: /support/docs/launch-first-session/
                      - listitem:
                        - link "Run tests on HyperExecute" [ref=e173]:
                          - /url: /support/docs/getting-started-with-hyperexecute/
                      - listitem:
                        - link "Catch Visual Bugs with SmartUI" [ref=e174]:
                          - /url: /support/docs/smart-visual-regression-testing/
                      - listitem:
                        - link "Spot Accessibility Issues" [ref=e175]:
                          - /url: /support/docs/accessibility-testing/
                      - listitem:
                        - link "Manage Test Cases" [ref=e176]:
                          - /url: /support/docs/create-projects/
                      - listitem:
                        - link "TestMu AI MCP Server" [ref=e177]:
                          - /url: /support/docs/testmu-mcp-server/
                - generic:
                  - generic:
                    - text: Company
                    - generic [ref=e178] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "LambdaTest is Now TestMu AI" [ref=e179]:
                          - /url: /lambdatest-is-now-testmuai/
                      - listitem:
                        - link "About Us" [ref=e180]:
                          - /url: /about/
                      - listitem:
                        - link "Careers" [ref=e181]:
                          - /url: /career/
                      - listitem:
                        - link "Customers" [ref=e182]:
                          - /url: /customers/
                      - listitem:
                        - link "Press" [ref=e183]:
                          - /url: /press/
                      - listitem:
                        - link "Achievements" [ref=e184]:
                          - /url: /achievements/
                      - listitem:
                        - link "Reviews" [ref=e185]:
                          - /url: /reviews/
                      - listitem:
                        - link "Community & Support" [ref=e186]:
                          - /url: /community/
                      - listitem:
                        - link "Partners" [ref=e187]:
                          - /url: /partners/
                      - listitem:
                        - link "Open Source" [ref=e188]:
                          - /url: /open-source/
                      - listitem:
                        - link "Content Editorial Policy" [ref=e189]:
                          - /url: /editorial-policy-processes/
                      - listitem:
                        - link "Write for Us" [ref=e190]:
                          - /url: /testmu-write-for-us/
                      - listitem:
                        - link "Become an Affiliate" [ref=e191]:
                          - /url: /affiliate-program-partnership/
                      - listitem:
                        - link "Terms of Service" [ref=e192]:
                          - /url: /legal/terms-of-service/
                      - listitem:
                        - link "Privacy Policy" [ref=e193]:
                          - /url: /legal/privacy/
                      - listitem:
                        - link "Cookie Policy" [ref=e194]:
                          - /url: /legal/cookie/
                      - listitem:
                        - link "Trust" [ref=e195]:
                          - /url: /trust/
                      - listitem:
                        - link "Website Terms of Use" [ref=e196]:
                          - /url: /site-terms/
                      - listitem:
                        - link "Contact Us" [ref=e197]:
                          - /url: /contact-us/
                - generic:
                  - generic:
                    - text: What's New
                    - generic [ref=e198] [cursor=pointer]: +
                  - generic:
                    - list:
                      - listitem:
                        - link "Gartner® Magic Quadrant™ 2026 Report" [ref=e199]:
                          - /url: /gartner-magic-quadrant-agentic-software-quality-assurance-platforms/
                      - listitem:
                        - link "State of AI in Quality Engineering 2026 Report" [ref=e200]:
                          - /url: /research/state-of-ai-in-quality-engineering/
                      - listitem:
                        - link "Coding Jag - Issue 320" [ref=e201]:
                          - /url: /newsletter/editions/issue320/
                      - listitem:
                        - link "June'26 Updates" [ref=e202]:
                          - /url: /blog/june-2026-updates/
                      - listitem:
                        - link "Test on iPhone 18" [ref=e203]:
                          - /url: /test-on-iphone-18/
              - generic:
                - generic:
                  - generic:
                    - paragraph: Deliver unparalleled digital experience with our Next-Gen, AI-Native testing cloud platform. Ensure exceptional user experience across all devices and browsers.
                  - generic:
                    - link "Start free Testing" [ref=e225]:
                      - /url: /register/
                    - button "Book a Demo" [ref=e227] [cursor=pointer]
                - generic:
                  - generic:
                    - paragraph: Summarize with AI
                    - generic:
                      - link "ChatGPT Icon":
                        - /url: https://chatgpt.com/?prompt=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                        - img "ChatGPT Icon"
                      - link "Perplexity Icon":
                        - /url: https://www.perplexity.ai/search?q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                        - img "Perplexity Icon"
                      - link "Claude AI Icon":
                        - /url: https://claude.ai/new?q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                        - img "Claude AI Icon"
                      - link "Grok Icon":
                        - /url: https://x.com/i/grok?text=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                        - img "Grok Icon"
                      - link "Google AI Icon":
                        - /url: https://www.google.com/search?udm=50&aep=11&q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F&no_sw_cr=1
                        - img "Google AI Icon"
                  - paragraph: TestMu AI (formerly LambdaTest) has formal standards certification and comply in line with acts and regulations across the globe.
                  - img "TestMu AI standards certification"
                  - paragraph: LambdaTest is TestMu AI
                  - paragraph: Headquarters
                  - link "1 Sutter Street, Suite 500, San Francisco, California 94104" [ref=e231]:
                    - /url: https://www.google.com/maps/place/TestMu+AI+(Formerly+LambdaTest)/@37.7900416,-122.4008281,17z/data=!4m15!1m8!3m7!1s0x808580627b638d83:0x4b3c6ec12ee5fb4e!2s1+Sutter+St+Suite+500,+San+Francisco,+CA+94104,+USA!3b1!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11xsfkj3p3!3m5!1s0x808581571f7f490b:0xe303f9b390a0b285!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11ghnp6m4p?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D
          - generic:
            - paragraph [ref=e232]: How can we help?
            - button "Contact Us" [ref=e234] [cursor=pointer]
        - generic [ref=e250]:
          - img "Footer Line"
        - generic [ref=e251]:
          - generic:
            - generic [ref=e252]: © 2026 TestMu AI (Formerly LambdaTest). All rights reserved.
            - generic [ref=e253]:
              - text: AI-Agentic Cloud Built With
              - img "Love" [ref=e254]
              - text: For Quality Engineering
            - generic:
              - list:
                - listitem:
                  - link "Like TestmuAI on Facebook":
                    - /url: https://www.facebook.com/testmuai/
                    - img "Like TestmuAI on Facebook"
                - listitem:
                  - link "Follow TestmuAI on Twitter":
                    - /url: https://x.com/testmuai
                    - img "TestmuAI Twitter"
                - listitem:
                  - link "Follow TestmuAI on LinkedIn":
                    - /url: https://www.linkedin.com/company/testmu-ai/
                    - img "Follow TestmuAI on Linkedin"
                - listitem:
                  - link "Like TestmuAI on Youtube":
                    - /url: https://www.youtube.com/@TestMuAI
                    - img "Subscribe TestmuAI on Youtube"
                - listitem:
                  - link "Follow TestmuAI on Github":
                    - /url: https://github.com/LambdaTest/
                    - img "GitHub"
                - listitem:
                  - link "Follow TestmuAI on Pinterest":
                    - /url: https://www.pinterest.com/testmuai/
                    - img "Pinterest"
      - complementary "Chat support"
  - alert [ref=e255]
  - button "Hello, have a question? Let’s chat." [ref=e256] [cursor=pointer]
  - iframe [aria-hidden] [ref=e260]
```

# Test source

```ts
  1   | 
  2   | import { Page, expect } from '@playwright/test';
  3   | import { DropdownLocators } from './Dropdown.locators';
  4   | 
  5   | export class DropdownActions {
  6   | 
  7   |     private page: Page;
  8   |     locators: DropdownLocators;
  9   | 
  10  |     constructor(page: Page) {
  11  |         this.page = page;
  12  |         this.locators = new DropdownLocators(page);
  13  |     }
  14  | 
  15  |     // Open Website
  16  |     async openWebsite() {
  17  |         await this.page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');
  18  |     }
  19  | 
  20  |     // TC01 - Verify Country Dropdown
  21  |     async selectCountry(country: string) {
  22  | 
> 23  |         await this.locators.countryDropdown.click();
      |                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24  | 
  25  |         const searchBox = this.page.locator(
  26  |             '.select2-container--open .select2-search__field'
  27  |         );
  28  | 
  29  |         await searchBox.fill(country);
  30  | 
  31  |         await this.page.getByRole('option', {
  32  |             name: country,
  33  |             exact: true
  34  |         }).click();
  35  |     }
  36  | 
  37  |     // Verify Selected Country
  38  |     async verifySelectedCountry(country: string) {
  39  | 
  40  |         await expect(this.locators.countryDropdown)
  41  |             .toHaveText(country);
  42  |     }
  43  | 
  44  | 
  45  |     // TC02 - Multiple Values with Search
  46  |     async selectStates(states: string[]) {
  47  | 
  48  |         for (const state of states) {
  49  | 
  50  |             await this.locators.stateDropdown.click();
  51  | 
  52  |             const searchBox = this.page.locator(
  53  |                 '.select2-container--open .select2-search__field'
  54  |             );
  55  | 
  56  |             await searchBox.fill(state);
  57  | 
  58  |             await this.page.getByRole('option', {
  59  |                 name: state,
  60  |                 exact: true
  61  |             }).click();
  62  |         }
  63  |     }
  64  | 
  65  |     // Verify Selected States
  66  |     async verifySelectedStates(states: string[]) {
  67  | 
  68  |         for (const state of states) {
  69  | 
  70  |             await expect(this.locators.stateDropdown)
  71  |                 .toContainText(state);
  72  |         }
  73  |     }
  74  | 
  75  | 
  76  |     // TC03 - Disabled Values
  77  |     async openDisabledDropdown() {
  78  | 
  79  |         await this.locators.disabledDropdown.click();
  80  |     }
  81  | 
  82  |     // Verify Disabled Options
  83  |     async verifyDisabledOptions() {
  84  | 
  85  |         const disabledOptions = this.page.locator(
  86  |             '.select2-results__option[aria-disabled="true"]'
  87  |         );
  88  | 
  89  |         await expect(disabledOptions.first()).toBeVisible();
  90  |     }
  91  | 
  92  | 
  93  |     // TC04 - Category Related Options
  94  |     async selectCategory(category: string) {
  95  | 
  96  |         await this.locators.categoryDropdown.selectOption({
  97  |             label: category
  98  |         });
  99  |     }
  100 | 
  101 |     // Verify Selected Category
  102 |     async verifySelectedCategory(value: string) {
  103 | 
  104 |         await expect(this.locators.categoryDropdown)
  105 |             .toHaveValue(value);
  106 |     }
  107 | 
  108 | }
  109 | 
```