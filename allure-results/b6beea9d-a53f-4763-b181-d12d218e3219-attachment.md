# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckBox.spec.ts >> TC05 - Should uncheck all multiple checkboxes
- Location: tests\CheckBox.spec.ts:51:5

# Error details

```
TypeError: _CheckBox.CheckBoxActions is not a constructor
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - region "Promotional banner" [ref=e4]:
    - link "Test how your agents actually behave across workflows, tools, and actions | Try Agent Assurance now!" [ref=e9] [cursor=pointer]:
      - /url: /register/?redirectTo=https://rook.lambdatest.com/projects
  - banner [ref=e11]:
    - navigation [ref=e12]:
      - generic [ref=e13]:
        - link "Visit TestMu AI Homepage" [ref=e16] [cursor=pointer]:
          - /url: https://www.testmuai.com/
          - img "TestMu AI Logo" [ref=e17]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - link "Platform" [ref=e22] [cursor=pointer]:
              - /url: /feature/
            - button "Solutions" [ref=e25] [cursor=pointer]
            - button "Resources" [ref=e28] [cursor=pointer]
            - link "Customers" [ref=e30] [cursor=pointer]:
              - /url: https://www.testmuai.com/customers/
            - link "Pricing" [ref=e31] [cursor=pointer]:
              - /url: https://www.testmuai.com/pricing/
          - generic [ref=e32]:
            - link "Login" [ref=e33] [cursor=pointer]:
              - /url: /login/
            - button "Book a Demo" [ref=e34] [cursor=pointer]
            - link "Get Started Free" [ref=e35] [cursor=pointer]:
              - /url: https://www.testmuai.com/register/
  - main [ref=e36]:
    - generic [ref=e39]:
      - heading "Checkbox Demo" [level=1] [ref=e40]
      - generic [ref=e41]:
        - generic [ref=e42]:
          - heading "Single Checkbox Demo" [level=2] [ref=e43]
          - generic [ref=e44]:
            - checkbox "Click on check box" [ref=e45]
            - text: Click on check box
        - generic [ref=e46]:
          - heading "Disabled Checkbox Demo" [level=2] [ref=e47]
          - generic [ref=e48]:
            - generic [ref=e49]:
              - checkbox "Option 1" [ref=e50]
              - text: Option 1
            - generic [ref=e51]:
              - checkbox "Option 2" [ref=e52]
              - text: Option 2
            - generic [ref=e53]:
              - checkbox "Option 3" [disabled] [ref=e54]
              - text: Option 3
            - generic [ref=e55]:
              - checkbox "Option 4" [disabled] [ref=e56]
              - text: Option 4
        - generic [ref=e57]:
          - heading "Multiple Checkbox Demo" [level=2] [ref=e58]
          - generic [ref=e59]:
            - generic [ref=e60]:
              - checkbox "Option 1" [ref=e61]
              - text: Option 1
            - generic [ref=e62]:
              - checkbox "Option 2" [ref=e63]
              - text: Option 2
            - generic [ref=e64]:
              - checkbox "Option 3" [ref=e65]
              - text: Option 3
            - generic [ref=e66]:
              - checkbox "Option 4" [ref=e67]
              - text: Option 4
          - button "Check All" [ref=e68] [cursor=pointer]
  - contentinfo [ref=e69]:
    - generic [ref=e70]:
      - generic [ref=e72]:
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: Products & Features
            - list [ref=e77]:
              - listitem [ref=e78]:
                - link "Automation Testing Cloud" [ref=e79] [cursor=pointer]:
                  - /url: /automation-cloud/
              - listitem [ref=e80]:
                - link "KaneAI - GenAI-Native Testing Agent" [ref=e81] [cursor=pointer]:
                  - /url: /kane-ai/
              - listitem [ref=e82]:
                - link "Kane CLI" [ref=e83] [cursor=pointer]:
                  - /url: /kane-cli/
              - listitem [ref=e84]:
                - link "Kane CLI for Coding Agents" [ref=e85] [cursor=pointer]:
                  - /url: /kane-cli/agents/
              - listitem [ref=e86]:
                - link "Agent Testing" [ref=e87] [cursor=pointer]:
                  - /url: /agent-testing/
              - listitem [ref=e88]:
                - link "Agent Functional Testing" [ref=e89] [cursor=pointer]:
                  - /url: /agent-assurance/
              - listitem [ref=e90]:
                - link "Video Agent Testing" [ref=e91] [cursor=pointer]:
                  - /url: /video-agent-testing/
              - listitem [ref=e92]:
                - link "AI Agents" [ref=e93] [cursor=pointer]:
                  - /url: /agents/
              - listitem [ref=e94]:
                - link "MCP Server" [ref=e95] [cursor=pointer]:
                  - /url: /mcp/
              - listitem [ref=e96]:
                - link "Cross Browser Testing" [ref=e97] [cursor=pointer]:
                  - /url: /cross-browser-testing/
              - listitem [ref=e98]:
                - link "Real Device Cloud" [ref=e99] [cursor=pointer]:
                  - /url: /real-device-cloud/
              - listitem [ref=e100]:
                - link "Test Management" [ref=e101] [cursor=pointer]:
                  - /url: /test-management/
              - listitem [ref=e102]:
                - link "Mobile App Testing" [ref=e103] [cursor=pointer]:
                  - /url: /mobile-app-testing/
              - listitem [ref=e104]:
                - link "AI Testing" [ref=e105] [cursor=pointer]:
                  - /url: /ai-testing/
              - listitem [ref=e106]:
                - link "HyperExecute" [ref=e107] [cursor=pointer]:
                  - /url: /hyperexecute/
              - listitem [ref=e108]:
                - link "Performance Testing" [ref=e109] [cursor=pointer]:
                  - /url: /performance-testing/
              - listitem [ref=e110]:
                - link "Browser Cloud" [ref=e111] [cursor=pointer]:
                  - /url: /browser-cloud/
              - listitem [ref=e112]:
                - link "LT Debug" [ref=e113] [cursor=pointer]:
                  - /url: /lt-debug/
              - listitem [ref=e114]:
                - link "Local Page Testing" [ref=e115] [cursor=pointer]:
                  - /url: /local-page-testing/
              - listitem [ref=e116]:
                - link "Automated Screenshots" [ref=e117] [cursor=pointer]:
                  - /url: /automated-screenshot/
              - listitem [ref=e118]:
                - link "Geo-Location Testing" [ref=e119] [cursor=pointer]:
                  - /url: /geolocation-testing/
              - listitem [ref=e120]:
                - link "Accessibility Testing" [ref=e121] [cursor=pointer]:
                  - /url: /accessibility-testing/
              - listitem [ref=e122]:
                - link "Responsive Testing" [ref=e123] [cursor=pointer]:
                  - /url: /responsive-test-online/
              - listitem [ref=e124]:
                - link "Localization Testing" [ref=e125] [cursor=pointer]:
                  - /url: /localization-testing/
              - listitem [ref=e126]:
                - link "SmartUI Visual Testing Tool" [ref=e127] [cursor=pointer]:
                  - /url: /visual-testing-tool/
              - listitem [ref=e128]:
                - link "Integrations" [ref=e129] [cursor=pointer]:
                  - /url: /integrations/
              - listitem [ref=e130]:
                - link "Test Analytics" [ref=e131] [cursor=pointer]:
                  - /url: /test-analytics/
              - listitem [ref=e132]:
                - link "Professional Services" [ref=e133] [cursor=pointer]:
                  - /url: /professional-services/
              - listitem [ref=e134]:
                - link "Agentic Testing" [ref=e135] [cursor=pointer]:
                  - /url: /agentic-testing/
          - generic [ref=e136]:
            - generic [ref=e137]: Test on
            - generic [ref=e138]:
              - list [ref=e139]:
                - listitem [ref=e140]:
                  - link [ref=e141] [cursor=pointer]:
                    - /url: /test-on-samsung-galaxy-s26/
                    - text: Samsung Galaxy S26
                    - img "New Samsung Galaxy S26" [ref=e142]
                - listitem [ref=e143]:
                  - link "iPhone 17" [ref=e144] [cursor=pointer]:
                    - /url: /test-on-iphone-17/
                - listitem [ref=e145]:
                  - link "List of Browsers" [ref=e146] [cursor=pointer]:
                    - /url: /list-of-browsers/
                - listitem [ref=e147]:
                  - link "List of Real Devices" [ref=e148] [cursor=pointer]:
                    - /url: /list-of-real-devices/
                - listitem [ref=e149]:
                  - link "Internet Explorer" [ref=e150] [cursor=pointer]:
                    - /url: /test-on-internet-explorer-browsers/
                - listitem [ref=e151]:
                  - link "Firefox" [ref=e152] [cursor=pointer]:
                    - /url: /test-on-firefox-browsers/
                - listitem [ref=e153]:
                  - link "Chrome" [ref=e154] [cursor=pointer]:
                    - /url: /test-on-chrome-browsers/
                - listitem [ref=e155]:
                  - link "Safari Browser Online" [ref=e156] [cursor=pointer]:
                    - /url: /test-on-safari-browsers/
                - listitem [ref=e157]:
                  - link "Microsoft Edge" [ref=e158] [cursor=pointer]:
                    - /url: /test-on-edge-browsers/
                - listitem [ref=e159]:
                  - link "Opera" [ref=e160] [cursor=pointer]:
                    - /url: /test-on-opera-browsers/
                - listitem [ref=e161]:
                  - link "Yandex" [ref=e162] [cursor=pointer]:
                    - /url: /test-on-yandex-browsers/
                - listitem [ref=e163]:
                  - link "Mac OS" [ref=e164] [cursor=pointer]:
                    - /url: /test-on-macos-browsers/
                - listitem [ref=e165]:
                  - link "Mobile Devices" [ref=e166] [cursor=pointer]:
                    - /url: /test-on-mobile-devices/
                - listitem [ref=e167]:
                  - link "iOS Simulator" [ref=e168] [cursor=pointer]:
                    - /url: /ios-simulator-online/
                - listitem [ref=e169]:
                  - link "Android Emulator" [ref=e170] [cursor=pointer]:
                    - /url: /android-emulator-online/
                - listitem [ref=e171]:
                  - link "Browser Emulator" [ref=e172] [cursor=pointer]:
                    - /url: /browser-emulator-online/
                - listitem [ref=e173]:
                  - link "Golden Gate" [ref=e174] [cursor=pointer]:
                    - /url: /test-on-macos-golden-gate/
              - generic [ref=e175]: Browser Automation
              - list [ref=e176]:
                - listitem [ref=e177]:
                  - link "Selenium Testing" [ref=e178] [cursor=pointer]:
                    - /url: /selenium-automation/
                - listitem [ref=e179]:
                  - link "Selenium Grid" [ref=e180] [cursor=pointer]:
                    - /url: /selenium-grid-online/
                - listitem [ref=e181]:
                  - link "Cypress Testing" [ref=e182] [cursor=pointer]:
                    - /url: /cypress-testing/
                - listitem [ref=e183]:
                  - link "Playwright Testing" [ref=e184] [cursor=pointer]:
                    - /url: /playwright-testing/
                - listitem [ref=e185]:
                  - link "Puppeteer Testing" [ref=e186] [cursor=pointer]:
                    - /url: /puppeteer-testing/
                - listitem [ref=e187]:
                  - link "Taiko Testing" [ref=e188] [cursor=pointer]:
                    - /url: /taiko-automation/
              - link "Compare TestMu AI" [ref=e190] [cursor=pointer]:
                - /url: /vs/
              - list [ref=e191]:
                - listitem [ref=e192]:
                  - link "Browserstack Alternative" [ref=e193] [cursor=pointer]:
                    - /url: /browserstack-alternative/
                - listitem [ref=e194]:
                  - link "Sauce Labs Alternative" [ref=e195] [cursor=pointer]:
                    - /url: /saucelabs-alternative/
                - listitem [ref=e196]:
                  - link "Perfecto Alternative" [ref=e197] [cursor=pointer]:
                    - /url: /perfecto-alternative/
                - listitem [ref=e198]:
                  - link "mabl Alternative" [ref=e199] [cursor=pointer]:
                    - /url: /mabl-alternative/
                - listitem [ref=e200]:
                  - link "Testim Alternative" [ref=e201] [cursor=pointer]:
                    - /url: /testim-alternative/
                - listitem [ref=e202]:
                  - link "Kobiton Alternative" [ref=e203] [cursor=pointer]:
                    - /url: /kobiton-alternative/
          - generic [ref=e204]:
            - generic [ref=e205]: Mobile App Automation
            - generic [ref=e206]:
              - list [ref=e207]:
                - listitem [ref=e208]:
                  - link "Appium Testing" [ref=e209] [cursor=pointer]:
                    - /url: /appium-mobile-testing/
                - listitem [ref=e210]:
                  - link "Espresso Testing" [ref=e211] [cursor=pointer]:
                    - /url: /espresso-automation-testing/
                - listitem [ref=e212]:
                  - link "XCUITest Testing" [ref=e213] [cursor=pointer]:
                    - /url: /xcuitest-app-testing/
              - generic [ref=e214]: Resources
              - list [ref=e215]:
                - listitem [ref=e216]:
                  - link "TestMu Conf 2027" [ref=e217] [cursor=pointer]:
                    - /url: /testmuconf-2027/
                - listitem [ref=e218]:
                  - link "Use Cases" [ref=e219] [cursor=pointer]:
                    - /url: /use-cases/
                - listitem [ref=e220]:
                  - link "Research" [ref=e221] [cursor=pointer]:
                    - /url: /research/
                - listitem [ref=e222]:
                  - link "Blogs" [ref=e223] [cursor=pointer]:
                    - /url: /blog/
                - listitem [ref=e224]:
                  - link "Certifications" [ref=e225] [cursor=pointer]:
                    - /url: /certifications/
                - listitem [ref=e226]:
                  - link "Newsletter" [ref=e227] [cursor=pointer]:
                    - /url: /newsletter/
                - listitem [ref=e228]:
                  - link "Webinars" [ref=e229] [cursor=pointer]:
                    - /url: /webinar/
                - listitem [ref=e230]:
                  - link "FAQ" [ref=e231] [cursor=pointer]:
                    - /url: /support/faq/
                - listitem [ref=e232]:
                  - link "Software Testing [Glossary]" [ref=e233] [cursor=pointer]:
                    - /url: /learning-hub/software-testing-terminology/
                - listitem [ref=e234]:
                  - link "QA Job Board" [ref=e235] [cursor=pointer]:
                    - /url: /qa-job-board/
                - listitem [ref=e236]:
                  - link "Software Testing Questions" [ref=e237] [cursor=pointer]:
                    - /url: /software-testing-questions/
                - listitem [ref=e238]:
                  - link "Free Online Tools" [ref=e239] [cursor=pointer]:
                    - /url: /free-online-tools/
                - listitem [ref=e240]:
                  - link "Latest Versions" [ref=e241] [cursor=pointer]:
                    - /url: /latest-version/
                - listitem [ref=e242]:
                  - link "AI Testing Tools" [ref=e243] [cursor=pointer]:
                    - /url: /blog/ai-testing-tools/
                - listitem [ref=e244]:
                  - link "Sitemap" [ref=e245] [cursor=pointer]:
                    - /url: /sitemap.xml
                - listitem [ref=e246]:
                  - link "Status" [ref=e247] [cursor=pointer]:
                    - /url: https://status.lambdatest.io
              - generic [ref=e248]: Getting Started
              - list [ref=e249]:
                - listitem [ref=e250]:
                  - link "Test an AI Agent" [ref=e251] [cursor=pointer]:
                    - /url: /support/docs/getting-started-with-agent-testing-platform/
                - listitem [ref=e252]:
                  - link "Create tests with KaneAI" [ref=e253] [cursor=pointer]:
                    - /url: /support/docs/getting-started-with-kane-ai/
                - listitem [ref=e254]:
                  - link "Use Kane CLI" [ref=e255] [cursor=pointer]:
                    - /url: /docs/kane-cli-introduction/
                - listitem [ref=e256]:
                  - link "Launch Browser Cloud" [ref=e257] [cursor=pointer]:
                    - /url: /support/docs/launch-first-session/
                - listitem [ref=e258]:
                  - link "Run tests on HyperExecute" [ref=e259] [cursor=pointer]:
                    - /url: /support/docs/getting-started-with-hyperexecute/
                - listitem [ref=e260]:
                  - link "Catch Visual Bugs with SmartUI" [ref=e261] [cursor=pointer]:
                    - /url: /support/docs/smart-visual-regression-testing/
                - listitem [ref=e262]:
                  - link "Spot Accessibility Issues" [ref=e263] [cursor=pointer]:
                    - /url: /support/docs/accessibility-testing/
                - listitem [ref=e264]:
                  - link "Manage Test Cases" [ref=e265] [cursor=pointer]:
                    - /url: /support/docs/create-projects/
                - listitem [ref=e266]:
                  - link "TestMu AI MCP Server" [ref=e267] [cursor=pointer]:
                    - /url: /support/docs/testmu-mcp-server/
          - generic [ref=e268]:
            - generic [ref=e269]: Company
            - generic [ref=e270]:
              - list [ref=e271]:
                - listitem [ref=e272]:
                  - link "LambdaTest is Now TestMu AI" [ref=e273] [cursor=pointer]:
                    - /url: /lambdatest-is-now-testmuai/
                - listitem [ref=e274]:
                  - link "About Us" [ref=e275] [cursor=pointer]:
                    - /url: /about/
                - listitem [ref=e276]:
                  - link "Careers" [ref=e277] [cursor=pointer]:
                    - /url: /career/
                - listitem [ref=e278]:
                  - link "Customers" [ref=e279] [cursor=pointer]:
                    - /url: /customers/
                - listitem [ref=e280]:
                  - link "Press" [ref=e281] [cursor=pointer]:
                    - /url: /press/
                - listitem [ref=e282]:
                  - link "Achievements" [ref=e283] [cursor=pointer]:
                    - /url: /achievements/
                - listitem [ref=e284]:
                  - link "Reviews" [ref=e285] [cursor=pointer]:
                    - /url: /reviews/
                - listitem [ref=e286]:
                  - link "Community & Support" [ref=e287] [cursor=pointer]:
                    - /url: /community/
                - listitem [ref=e288]:
                  - link "Partners" [ref=e289] [cursor=pointer]:
                    - /url: /partners/
                - listitem [ref=e290]:
                  - link "Open Source" [ref=e291] [cursor=pointer]:
                    - /url: /open-source/
                - listitem [ref=e292]:
                  - link "Content Editorial Policy" [ref=e293] [cursor=pointer]:
                    - /url: /editorial-policy-processes/
                - listitem [ref=e294]:
                  - link "Write for Us" [ref=e295] [cursor=pointer]:
                    - /url: /testmu-write-for-us/
                - listitem [ref=e296]:
                  - link "Become an Affiliate" [ref=e297] [cursor=pointer]:
                    - /url: /affiliate-program-partnership/
                - listitem [ref=e298]:
                  - link "Terms of Service" [ref=e299] [cursor=pointer]:
                    - /url: /legal/terms-of-service/
                - listitem [ref=e300]:
                  - link "Privacy Policy" [ref=e301] [cursor=pointer]:
                    - /url: /legal/privacy/
                - listitem [ref=e302]:
                  - link "Cookie Policy" [ref=e303] [cursor=pointer]:
                    - /url: /legal/cookie/
                - listitem [ref=e304]:
                  - link "Trust" [ref=e305] [cursor=pointer]:
                    - /url: /trust/
                - listitem [ref=e306]:
                  - link "Website Terms of Use" [ref=e307] [cursor=pointer]:
                    - /url: /site-terms/
                - listitem [ref=e308]:
                  - link "Contact Us" [ref=e309] [cursor=pointer]:
                    - /url: /contact-us/
              - generic [ref=e310]: What's New
              - list [ref=e311]:
                - listitem [ref=e312]:
                  - link "Gartner® Magic Quadrant™ 2026 Report" [ref=e313] [cursor=pointer]:
                    - /url: /gartner-magic-quadrant-agentic-software-quality-assurance-platforms/
                - listitem [ref=e314]:
                  - link "State of AI in Quality Engineering 2026 Report" [ref=e315] [cursor=pointer]:
                    - /url: /research/state-of-ai-in-quality-engineering/
                - listitem [ref=e316]:
                  - link "Coding Jag - Issue 320" [ref=e317] [cursor=pointer]:
                    - /url: /newsletter/editions/issue320/
                - listitem [ref=e318]:
                  - link "June'26 Updates" [ref=e319] [cursor=pointer]:
                    - /url: /blog/june-2026-updates/
                - listitem [ref=e320]:
                  - link "Test on iPhone 18" [ref=e321] [cursor=pointer]:
                    - /url: /test-on-iphone-18/
        - generic [ref=e322]:
          - generic [ref=e323]:
            - paragraph [ref=e346]: Deliver unparalleled digital experience with our Next-Gen, AI-Native testing cloud platform. Ensure exceptional user experience across all devices and browsers.
            - generic [ref=e347]:
              - link "Start free Testing" [ref=e348] [cursor=pointer]:
                - /url: /register/
              - button "Book a Demo" [ref=e350] [cursor=pointer]
          - generic [ref=e351]:
            - generic [ref=e352]:
              - paragraph [ref=e353]: Summarize with AI
              - generic [ref=e354]:
                - link [ref=e355] [cursor=pointer]:
                  - /url: https://chatgpt.com/?prompt=Summarize%20this%20page
                  - img "ChatGPT Icon" [ref=e356]
                - link [ref=e357] [cursor=pointer]:
                  - /url: https://www.perplexity.ai/search?q=Summarize%20this%20page
                  - img "Perplexity Icon" [ref=e358]
                - link [ref=e359] [cursor=pointer]:
                  - /url: https://claude.ai/new?q=Summarize%20this%20page
                  - img "Claude AI Icon" [ref=e360]
                - link [ref=e361] [cursor=pointer]:
                  - /url: https://x.com/i/grok?text=Summarize%20this%20page
                  - img "Grok Icon" [ref=e362]
                - link [ref=e363] [cursor=pointer]:
                  - /url: https://www.google.com/search?udm=50&aep=11&q=Summarize%20this%20page&no_sw_cr=1
                  - img "Google AI Icon" [ref=e364]
            - paragraph [ref=e365]: TestMu AI (formerly LambdaTest) has formal standards certification and comply in line with acts and regulations across the globe.
            - img "TestMu AI standards certification" [ref=e366]
            - paragraph [ref=e367]: LambdaTest is TestMu AI
            - paragraph [ref=e368]: Headquarters
            - link "1 Sutter Street, Suite 500, San Francisco, California 94104" [ref=e373] [cursor=pointer]:
              - /url: https://www.google.com/maps/place/TestMu+AI+(Formerly+LambdaTest)/@37.7900416,-122.4008281,17z/data=!4m15!1m8!3m7!1s0x808580627b638d83:0x4b3c6ec12ee5fb4e!2s1+Sutter+St+Suite+500,+San+Francisco,+CA+94104,+USA!3b1!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11xsfkj3p3!3m5!1s0x808581571f7f490b:0xe303f9b390a0b285!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11ghnp6m4p?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D
      - generic [ref=e374]:
        - paragraph [ref=e375]: How can we help?
        - button "Contact Us" [ref=e377] [cursor=pointer]
    - img "Footer Line" [ref=e397]
    - generic [ref=e400]:
      - generic [ref=e401]: © 2026 TestMu AI (Formerly LambdaTest). All rights reserved.
      - generic [ref=e402]:
        - text: AI-Agentic Cloud Built With
        - img "Love" [ref=e403]
        - text: For Quality Engineering
      - list [ref=e405]:
        - listitem [ref=e406]:
          - link "Like TestmuAI on Facebook" [ref=e407] [cursor=pointer]:
            - /url: https://www.facebook.com/testmuai/
            - img "Like TestmuAI on Facebook" [ref=e408]
        - listitem [ref=e409]:
          - link "Follow TestmuAI on Twitter" [ref=e410] [cursor=pointer]:
            - /url: https://x.com/testmuai
            - img "TestmuAI Twitter" [ref=e411]
        - listitem [ref=e412]:
          - link "Follow TestmuAI on LinkedIn" [ref=e413] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/testmu-ai/
            - img "Follow TestmuAI on Linkedin" [ref=e414]
        - listitem [ref=e415]:
          - link "Like TestmuAI on Youtube" [ref=e416] [cursor=pointer]:
            - /url: https://www.youtube.com/@TestMuAI
            - img "Subscribe TestmuAI on Youtube" [ref=e417]
        - listitem [ref=e418]:
          - link "Follow TestmuAI on Github" [ref=e419] [cursor=pointer]:
            - /url: https://github.com/LambdaTest/
            - img "GitHub" [ref=e420]
        - listitem [ref=e421]:
          - link "Follow TestmuAI on Pinterest" [ref=e422] [cursor=pointer]:
            - /url: https://www.pinterest.com/testmuai/
            - img "Pinterest" [ref=e423]
```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | import { CheckBoxActions } from '../Pages/CheckBox/CheckBox.actions';
  4  | 
  5  | // Open website before every test
  6  | test.beforeEach(async ({ page }) => {
  7  | 
  8  |     await page.goto(
  9  |         'https://www.testmuai.com/selenium-playground/checkbox-demo/'
  10 |     );
  11 | 
  12 | });
  13 | 
  14 | // TC01 - Verify Heading
  15 | test('TC01 - Should verify Checkbox heading', async ({ page }) => {
  16 | 
  17 |     const checkBoxActions = new CheckBoxActions(page);
  18 | 
  19 |     await checkBoxActions.verifyCheckBoxHeading();
  20 | 
  21 | });
  22 | 
  23 | // TC02 - Check Single Checkbox
  24 | test('TC02 - Should check single checkbox and verify message', async ({ page }) => {
  25 | 
  26 |     const checkBoxActions = new CheckBoxActions(page);
  27 | 
  28 |     await checkBoxActions.checkTheCheckBox();
  29 | 
  30 | });
  31 | 
  32 | // TC03 - Verify Disabled Checkbox
  33 | test('TC03 - Should verify disabled checkbox', async ({ page }) => {
  34 | 
  35 |     const checkBoxActions = new CheckBoxActions(page);
  36 | 
  37 |     await checkBoxActions.verifyDisbledCheckBox();
  38 | 
  39 | });
  40 | 
  41 | // TC04 - Check All
  42 | test('TC04 - Should check all multiple checkboxes', async ({ page }) => {
  43 | 
  44 |     const checkBoxActions = new CheckBoxActions(page);
  45 | 
  46 |     await checkBoxActions.checkAllBoxes();
  47 | 
  48 | });
  49 | 
  50 | // TC05 - Uncheck All
  51 | test('TC05 - Should uncheck all multiple checkboxes', async ({ page }) => {
  52 | 
> 53 |     const checkBoxActions = new CheckBoxActions(page);
     |                             ^ TypeError: _CheckBox.CheckBoxActions is not a constructor
  54 | 
  55 |     await checkBoxActions.uncheckAllBoxes();
  56 | 
  57 | });
  58 | 
  59 | // TC06 - Multiple Checkbox Selection
  60 | test('TC06 - Should select multiple checkboxes individually', async ({ page }) => {
  61 | 
  62 |     const checkBoxActions = new CheckBoxActions(page);
  63 | 
  64 |     await checkBoxActions.verifyMultipleCheckBoxes();
  65 | 
  66 | });
  67 | 
```