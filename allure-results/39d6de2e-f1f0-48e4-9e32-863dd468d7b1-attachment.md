# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Dropdown Test Cases >> TC02 - Verify multiple states selection
- Location: tests\Dropdown.spec.ts:26:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'California', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e37]:
        - heading "Jquery Dropdown Search Demo" [level=1] [ref=e41]
        - generic [ref=e45]:
          - generic [ref=e46]:
            - generic [ref=e47]: Drop Down with Search
            - generic [ref=e48]:
              - text: "Select Country :"
              - combobox [aria-hidden] [ref=e49]
              - combobox [ref=e52] [cursor=pointer]
          - generic [ref=e53]:
            - generic [ref=e54]: Select Multiple Values with search
            - generic [ref=e55]:
              - text: "Select State :"
              - listbox [aria-hidden] [ref=e56]:
                - option [ref=e57]: Alabama
                - option [ref=e58]: Alaska
                - option [ref=e59]: Arizona
                - option [selected] [ref=e60]: Arkansas
                - option [selected] [ref=e61]: California
                - option [ref=e62]: Colorado
                - option [ref=e63]: Connecticut
                - option [ref=e64]: Delaware
                - option [ref=e65]: District Of Columbia
                - option [ref=e66]: Florida
                - option [ref=e67]: Georgia
                - option [ref=e68]: Hawaii
                - option [ref=e69]: Idaho
                - option [ref=e70]: Illinois
                - option [ref=e71]: Indiana
                - option [ref=e72]: Iowa
                - option [ref=e73]: Kansas
                - option [ref=e74]: Kentucky
                - option [ref=e75]: Louisiana
                - option [ref=e76]: Maine
                - option [ref=e77]: Maryland
                - option [ref=e78]: Massachusetts
                - option [ref=e79]: Michigan
                - option [ref=e80]: Minnesota
                - option [ref=e81]: Mississippi
                - option [ref=e82]: Missouri
                - option [ref=e83]: Montana
                - option [ref=e84]: Nebraska
                - option [ref=e85]: Nevada
                - option [ref=e86]: New Hampshire
                - option [ref=e87]: New Jersey
                - option [ref=e88]: New Mexico
                - option [ref=e89]: New York
                - option [ref=e90]: North Carolina
                - option [ref=e91]: North Dakota
                - option [ref=e92]: Ohio
                - option [ref=e93]: Oklahoma
                - option [ref=e94]: Oregon
                - option [ref=e95]: Pennsylvania
                - option [ref=e96]: Rhode Island
                - option [ref=e97]: South Carolina
                - option [ref=e98]: South Dakota
                - option [ref=e99]: Tennessee
                - option [ref=e100]: Texas
                - option [ref=e101]: Utah
                - option [ref=e102]: Vermont
                - option [ref=e103]: Virginia
                - option [ref=e104]: Washington
                - option [ref=e105]: West Virginia
                - option [ref=e106]: Wisconsin
                - option [ref=e107]: Wyoming
              - combobox [ref=e110]:
                - list [ref=e111]:
                  - listitem "Arkansas" [ref=e112]: × Arkansas
                  - listitem "California" [ref=e113]: × California
                  - listitem [ref=e114]:
                    - textbox [ref=e115]
          - generic [ref=e116]:
            - generic [ref=e117]: Drop Down with Disabled values
            - generic [ref=e118]:
              - text: "Select Country :"
              - combobox [aria-hidden] [ref=e119]
              - combobox "Puerto Rico" [ref=e122] [cursor=pointer]
          - generic [ref=e124]:
            - generic [ref=e125]: Drop-down with Category related options
            - generic [ref=e126]:
              - text: Select a file
              - combobox "Select a file" [ref=e127]:
                - option "PHP" [selected]
                - option "Python"
                - option "Ruby"
                - option "C"
                - option "Java"
                - option ".Net"
                - option "Unknown Script"
                - option "Other file"
    - contentinfo [ref=e128]:
      - generic [ref=e129]:
        - generic [ref=e131]:
          - generic [ref=e132]:
            - generic [ref=e133]:
              - generic [ref=e134]: Products & Features
              - list [ref=e136]:
                - listitem [ref=e137]:
                  - link "Automation Testing Cloud" [ref=e138] [cursor=pointer]:
                    - /url: /automation-cloud/
                - listitem [ref=e139]:
                  - link "KaneAI - GenAI-Native Testing Agent" [ref=e140] [cursor=pointer]:
                    - /url: /kane-ai/
                - listitem [ref=e141]:
                  - link "Kane CLI" [ref=e142] [cursor=pointer]:
                    - /url: /kane-cli/
                - listitem [ref=e143]:
                  - link "Kane CLI for Coding Agents" [ref=e144] [cursor=pointer]:
                    - /url: /kane-cli/agents/
                - listitem [ref=e145]:
                  - link "Agent Testing" [ref=e146] [cursor=pointer]:
                    - /url: /agent-testing/
                - listitem [ref=e147]:
                  - link "Agent Functional Testing" [ref=e148] [cursor=pointer]:
                    - /url: /agent-assurance/
                - listitem [ref=e149]:
                  - link "Video Agent Testing" [ref=e150] [cursor=pointer]:
                    - /url: /video-agent-testing/
                - listitem [ref=e151]:
                  - link "AI Agents" [ref=e152] [cursor=pointer]:
                    - /url: /agents/
                - listitem [ref=e153]:
                  - link "MCP Server" [ref=e154] [cursor=pointer]:
                    - /url: /mcp/
                - listitem [ref=e155]:
                  - link "Cross Browser Testing" [ref=e156] [cursor=pointer]:
                    - /url: /cross-browser-testing/
                - listitem [ref=e157]:
                  - link "Real Device Cloud" [ref=e158] [cursor=pointer]:
                    - /url: /real-device-cloud/
                - listitem [ref=e159]:
                  - link "Test Management" [ref=e160] [cursor=pointer]:
                    - /url: /test-management/
                - listitem [ref=e161]:
                  - link "Mobile App Testing" [ref=e162] [cursor=pointer]:
                    - /url: /mobile-app-testing/
                - listitem [ref=e163]:
                  - link "AI Testing" [ref=e164] [cursor=pointer]:
                    - /url: /ai-testing/
                - listitem [ref=e165]:
                  - link "HyperExecute" [ref=e166] [cursor=pointer]:
                    - /url: /hyperexecute/
                - listitem [ref=e167]:
                  - link "Performance Testing" [ref=e168] [cursor=pointer]:
                    - /url: /performance-testing/
                - listitem [ref=e169]:
                  - link "Browser Cloud" [ref=e170] [cursor=pointer]:
                    - /url: /browser-cloud/
                - listitem [ref=e171]:
                  - link "LT Debug" [ref=e172] [cursor=pointer]:
                    - /url: /lt-debug/
                - listitem [ref=e173]:
                  - link "Local Page Testing" [ref=e174] [cursor=pointer]:
                    - /url: /local-page-testing/
                - listitem [ref=e175]:
                  - link "Automated Screenshots" [ref=e176] [cursor=pointer]:
                    - /url: /automated-screenshot/
                - listitem [ref=e177]:
                  - link "Geo-Location Testing" [ref=e178] [cursor=pointer]:
                    - /url: /geolocation-testing/
                - listitem [ref=e179]:
                  - link "Accessibility Testing" [ref=e180] [cursor=pointer]:
                    - /url: /accessibility-testing/
                - listitem [ref=e181]:
                  - link "Responsive Testing" [ref=e182] [cursor=pointer]:
                    - /url: /responsive-test-online/
                - listitem [ref=e183]:
                  - link "Localization Testing" [ref=e184] [cursor=pointer]:
                    - /url: /localization-testing/
                - listitem [ref=e185]:
                  - link "SmartUI Visual Testing Tool" [ref=e186] [cursor=pointer]:
                    - /url: /visual-testing-tool/
                - listitem [ref=e187]:
                  - link "Integrations" [ref=e188] [cursor=pointer]:
                    - /url: /integrations/
                - listitem [ref=e189]:
                  - link "Test Analytics" [ref=e190] [cursor=pointer]:
                    - /url: /test-analytics/
                - listitem [ref=e191]:
                  - link "Professional Services" [ref=e192] [cursor=pointer]:
                    - /url: /professional-services/
                - listitem [ref=e193]:
                  - link "Agentic Testing" [ref=e194] [cursor=pointer]:
                    - /url: /agentic-testing/
            - generic [ref=e195]:
              - generic [ref=e196]: Test on
              - generic [ref=e197]:
                - list [ref=e198]:
                  - listitem [ref=e199]:
                    - link [ref=e200] [cursor=pointer]:
                      - /url: /test-on-samsung-galaxy-s26/
                      - text: Samsung Galaxy S26
                      - img "New Samsung Galaxy S26" [ref=e201]
                  - listitem [ref=e202]:
                    - link "iPhone 17" [ref=e203] [cursor=pointer]:
                      - /url: /test-on-iphone-17/
                  - listitem [ref=e204]:
                    - link "List of Browsers" [ref=e205] [cursor=pointer]:
                      - /url: /list-of-browsers/
                  - listitem [ref=e206]:
                    - link "List of Real Devices" [ref=e207] [cursor=pointer]:
                      - /url: /list-of-real-devices/
                  - listitem [ref=e208]:
                    - link "Internet Explorer" [ref=e209] [cursor=pointer]:
                      - /url: /test-on-internet-explorer-browsers/
                  - listitem [ref=e210]:
                    - link "Firefox" [ref=e211] [cursor=pointer]:
                      - /url: /test-on-firefox-browsers/
                  - listitem [ref=e212]:
                    - link "Chrome" [ref=e213] [cursor=pointer]:
                      - /url: /test-on-chrome-browsers/
                  - listitem [ref=e214]:
                    - link "Safari Browser Online" [ref=e215] [cursor=pointer]:
                      - /url: /test-on-safari-browsers/
                  - listitem [ref=e216]:
                    - link "Microsoft Edge" [ref=e217] [cursor=pointer]:
                      - /url: /test-on-edge-browsers/
                  - listitem [ref=e218]:
                    - link "Opera" [ref=e219] [cursor=pointer]:
                      - /url: /test-on-opera-browsers/
                  - listitem [ref=e220]:
                    - link "Yandex" [ref=e221] [cursor=pointer]:
                      - /url: /test-on-yandex-browsers/
                  - listitem [ref=e222]:
                    - link "Mac OS" [ref=e223] [cursor=pointer]:
                      - /url: /test-on-macos-browsers/
                  - listitem [ref=e224]:
                    - link "Mobile Devices" [ref=e225] [cursor=pointer]:
                      - /url: /test-on-mobile-devices/
                  - listitem [ref=e226]:
                    - link "iOS Simulator" [ref=e227] [cursor=pointer]:
                      - /url: /ios-simulator-online/
                  - listitem [ref=e228]:
                    - link "Android Emulator" [ref=e229] [cursor=pointer]:
                      - /url: /android-emulator-online/
                  - listitem [ref=e230]:
                    - link "Browser Emulator" [ref=e231] [cursor=pointer]:
                      - /url: /browser-emulator-online/
                  - listitem [ref=e232]:
                    - link "Golden Gate" [ref=e233] [cursor=pointer]:
                      - /url: /test-on-macos-golden-gate/
                - generic [ref=e234]: Browser Automation
                - list [ref=e235]:
                  - listitem [ref=e236]:
                    - link "Selenium Testing" [ref=e237] [cursor=pointer]:
                      - /url: /selenium-automation/
                  - listitem [ref=e238]:
                    - link "Selenium Grid" [ref=e239] [cursor=pointer]:
                      - /url: /selenium-grid-online/
                  - listitem [ref=e240]:
                    - link "Cypress Testing" [ref=e241] [cursor=pointer]:
                      - /url: /cypress-testing/
                  - listitem [ref=e242]:
                    - link "Playwright Testing" [ref=e243] [cursor=pointer]:
                      - /url: /playwright-testing/
                  - listitem [ref=e244]:
                    - link "Puppeteer Testing" [ref=e245] [cursor=pointer]:
                      - /url: /puppeteer-testing/
                  - listitem [ref=e246]:
                    - link "Taiko Testing" [ref=e247] [cursor=pointer]:
                      - /url: /taiko-automation/
                - link "Compare TestMu AI" [ref=e249] [cursor=pointer]:
                  - /url: /vs/
                - list [ref=e250]:
                  - listitem [ref=e251]:
                    - link "Browserstack Alternative" [ref=e252] [cursor=pointer]:
                      - /url: /browserstack-alternative/
                  - listitem [ref=e253]:
                    - link "Sauce Labs Alternative" [ref=e254] [cursor=pointer]:
                      - /url: /saucelabs-alternative/
                  - listitem [ref=e255]:
                    - link "Perfecto Alternative" [ref=e256] [cursor=pointer]:
                      - /url: /perfecto-alternative/
                  - listitem [ref=e257]:
                    - link "mabl Alternative" [ref=e258] [cursor=pointer]:
                      - /url: /mabl-alternative/
                  - listitem [ref=e259]:
                    - link "Testim Alternative" [ref=e260] [cursor=pointer]:
                      - /url: /testim-alternative/
                  - listitem [ref=e261]:
                    - link "Kobiton Alternative" [ref=e262] [cursor=pointer]:
                      - /url: /kobiton-alternative/
            - generic [ref=e263]:
              - generic [ref=e264]: Mobile App Automation
              - generic [ref=e265]:
                - list [ref=e266]:
                  - listitem [ref=e267]:
                    - link "Appium Testing" [ref=e268] [cursor=pointer]:
                      - /url: /appium-mobile-testing/
                  - listitem [ref=e269]:
                    - link "Espresso Testing" [ref=e270] [cursor=pointer]:
                      - /url: /espresso-automation-testing/
                  - listitem [ref=e271]:
                    - link "XCUITest Testing" [ref=e272] [cursor=pointer]:
                      - /url: /xcuitest-app-testing/
                - generic [ref=e273]: Resources
                - list [ref=e274]:
                  - listitem [ref=e275]:
                    - link "TestMu Conf 2027" [ref=e276] [cursor=pointer]:
                      - /url: /testmuconf-2027/
                  - listitem [ref=e277]:
                    - link "Use Cases" [ref=e278] [cursor=pointer]:
                      - /url: /use-cases/
                  - listitem [ref=e279]:
                    - link "Research" [ref=e280] [cursor=pointer]:
                      - /url: /research/
                  - listitem [ref=e281]:
                    - link "Blogs" [ref=e282] [cursor=pointer]:
                      - /url: /blog/
                  - listitem [ref=e283]:
                    - link "Certifications" [ref=e284] [cursor=pointer]:
                      - /url: /certifications/
                  - listitem [ref=e285]:
                    - link "Newsletter" [ref=e286] [cursor=pointer]:
                      - /url: /newsletter/
                  - listitem [ref=e287]:
                    - link "Webinars" [ref=e288] [cursor=pointer]:
                      - /url: /webinar/
                  - listitem [ref=e289]:
                    - link "FAQ" [ref=e290] [cursor=pointer]:
                      - /url: /support/faq/
                  - listitem [ref=e291]:
                    - link "Software Testing [Glossary]" [ref=e292] [cursor=pointer]:
                      - /url: /learning-hub/software-testing-terminology/
                  - listitem [ref=e293]:
                    - link "QA Job Board" [ref=e294] [cursor=pointer]:
                      - /url: /qa-job-board/
                  - listitem [ref=e295]:
                    - link "Software Testing Questions" [ref=e296] [cursor=pointer]:
                      - /url: /software-testing-questions/
                  - listitem [ref=e297]:
                    - link "Free Online Tools" [ref=e298] [cursor=pointer]:
                      - /url: /free-online-tools/
                  - listitem [ref=e299]:
                    - link "Latest Versions" [ref=e300] [cursor=pointer]:
                      - /url: /latest-version/
                  - listitem [ref=e301]:
                    - link "AI Testing Tools" [ref=e302] [cursor=pointer]:
                      - /url: /blog/ai-testing-tools/
                  - listitem [ref=e303]:
                    - link "Sitemap" [ref=e304] [cursor=pointer]:
                      - /url: /sitemap.xml
                  - listitem [ref=e305]:
                    - link "Status" [ref=e306] [cursor=pointer]:
                      - /url: https://status.lambdatest.io
                - generic [ref=e307]: Getting Started
                - list [ref=e308]:
                  - listitem [ref=e309]:
                    - link "Test an AI Agent" [ref=e310] [cursor=pointer]:
                      - /url: /support/docs/getting-started-with-agent-testing-platform/
                  - listitem [ref=e311]:
                    - link "Create tests with KaneAI" [ref=e312] [cursor=pointer]:
                      - /url: /support/docs/getting-started-with-kane-ai/
                  - listitem [ref=e313]:
                    - link "Use Kane CLI" [ref=e314] [cursor=pointer]:
                      - /url: /docs/kane-cli-introduction/
                  - listitem [ref=e315]:
                    - link "Launch Browser Cloud" [ref=e316] [cursor=pointer]:
                      - /url: /support/docs/launch-first-session/
                  - listitem [ref=e317]:
                    - link "Run tests on HyperExecute" [ref=e318] [cursor=pointer]:
                      - /url: /support/docs/getting-started-with-hyperexecute/
                  - listitem [ref=e319]:
                    - link "Catch Visual Bugs with SmartUI" [ref=e320] [cursor=pointer]:
                      - /url: /support/docs/smart-visual-regression-testing/
                  - listitem [ref=e321]:
                    - link "Spot Accessibility Issues" [ref=e322] [cursor=pointer]:
                      - /url: /support/docs/accessibility-testing/
                  - listitem [ref=e323]:
                    - link "Manage Test Cases" [ref=e324] [cursor=pointer]:
                      - /url: /support/docs/create-projects/
                  - listitem [ref=e325]:
                    - link "TestMu AI MCP Server" [ref=e326] [cursor=pointer]:
                      - /url: /support/docs/testmu-mcp-server/
            - generic [ref=e327]:
              - generic [ref=e328]: Company
              - generic [ref=e329]:
                - list [ref=e330]:
                  - listitem [ref=e331]:
                    - link "LambdaTest is Now TestMu AI" [ref=e332] [cursor=pointer]:
                      - /url: /lambdatest-is-now-testmuai/
                  - listitem [ref=e333]:
                    - link "About Us" [ref=e334] [cursor=pointer]:
                      - /url: /about/
                  - listitem [ref=e335]:
                    - link "Careers" [ref=e336] [cursor=pointer]:
                      - /url: /career/
                  - listitem [ref=e337]:
                    - link "Customers" [ref=e338] [cursor=pointer]:
                      - /url: /customers/
                  - listitem [ref=e339]:
                    - link "Press" [ref=e340] [cursor=pointer]:
                      - /url: /press/
                  - listitem [ref=e341]:
                    - link "Achievements" [ref=e342] [cursor=pointer]:
                      - /url: /achievements/
                  - listitem [ref=e343]:
                    - link "Reviews" [ref=e344] [cursor=pointer]:
                      - /url: /reviews/
                  - listitem [ref=e345]:
                    - link "Community & Support" [ref=e346] [cursor=pointer]:
                      - /url: /community/
                  - listitem [ref=e347]:
                    - link "Partners" [ref=e348] [cursor=pointer]:
                      - /url: /partners/
                  - listitem [ref=e349]:
                    - link "Open Source" [ref=e350] [cursor=pointer]:
                      - /url: /open-source/
                  - listitem [ref=e351]:
                    - link "Content Editorial Policy" [ref=e352] [cursor=pointer]:
                      - /url: /editorial-policy-processes/
                  - listitem [ref=e353]:
                    - link "Write for Us" [ref=e354] [cursor=pointer]:
                      - /url: /testmu-write-for-us/
                  - listitem [ref=e355]:
                    - link "Become an Affiliate" [ref=e356] [cursor=pointer]:
                      - /url: /affiliate-program-partnership/
                  - listitem [ref=e357]:
                    - link "Terms of Service" [ref=e358] [cursor=pointer]:
                      - /url: /legal/terms-of-service/
                  - listitem [ref=e359]:
                    - link "Privacy Policy" [ref=e360] [cursor=pointer]:
                      - /url: /legal/privacy/
                  - listitem [ref=e361]:
                    - link "Cookie Policy" [ref=e362] [cursor=pointer]:
                      - /url: /legal/cookie/
                  - listitem [ref=e363]:
                    - link "Trust" [ref=e364] [cursor=pointer]:
                      - /url: /trust/
                  - listitem [ref=e365]:
                    - link "Website Terms of Use" [ref=e366] [cursor=pointer]:
                      - /url: /site-terms/
                  - listitem [ref=e367]:
                    - link "Contact Us" [ref=e368] [cursor=pointer]:
                      - /url: /contact-us/
                - generic [ref=e369]: What's New
                - list [ref=e370]:
                  - listitem [ref=e371]:
                    - link "Gartner® Magic Quadrant™ 2026 Report" [ref=e372] [cursor=pointer]:
                      - /url: /gartner-magic-quadrant-agentic-software-quality-assurance-platforms/
                  - listitem [ref=e373]:
                    - link "State of AI in Quality Engineering 2026 Report" [ref=e374] [cursor=pointer]:
                      - /url: /research/state-of-ai-in-quality-engineering/
                  - listitem [ref=e375]:
                    - link "Coding Jag - Issue 320" [ref=e376] [cursor=pointer]:
                      - /url: /newsletter/editions/issue320/
                  - listitem [ref=e377]:
                    - link "June'26 Updates" [ref=e378] [cursor=pointer]:
                      - /url: /blog/june-2026-updates/
                  - listitem [ref=e379]:
                    - link "Test on iPhone 18" [ref=e380] [cursor=pointer]:
                      - /url: /test-on-iphone-18/
          - generic [ref=e381]:
            - generic [ref=e382]:
              - paragraph [ref=e405]: Deliver unparalleled digital experience with our Next-Gen, AI-Native testing cloud platform. Ensure exceptional user experience across all devices and browsers.
              - generic [ref=e406]:
                - link "Start free Testing" [ref=e407] [cursor=pointer]:
                  - /url: /register/
                - button "Book a Demo" [ref=e409] [cursor=pointer]
            - generic [ref=e410]:
              - generic [ref=e411]:
                - paragraph [ref=e412]: Summarize with AI
                - generic [ref=e413]:
                  - link [ref=e414] [cursor=pointer]:
                    - /url: https://chatgpt.com/?prompt=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                    - img "ChatGPT Icon" [ref=e415]
                  - link [ref=e416] [cursor=pointer]:
                    - /url: https://www.perplexity.ai/search?q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                    - img "Perplexity Icon" [ref=e417]
                  - link [ref=e418] [cursor=pointer]:
                    - /url: https://claude.ai/new?q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                    - img "Claude AI Icon" [ref=e419]
                  - link [ref=e420] [cursor=pointer]:
                    - /url: https://x.com/i/grok?text=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F
                    - img "Grok Icon" [ref=e421]
                  - link [ref=e422] [cursor=pointer]:
                    - /url: https://www.google.com/search?udm=50&aep=11&q=Summarize%20this%20page%20https%3A%2F%2Fwww.testmuai.com%2Fselenium-playground%2Fjquery-dropdown-search-demo%2F&no_sw_cr=1
                    - img "Google AI Icon" [ref=e423]
              - paragraph [ref=e424]: TestMu AI (formerly LambdaTest) has formal standards certification and comply in line with acts and regulations across the globe.
              - img "TestMu AI standards certification" [ref=e425]
              - paragraph [ref=e426]: LambdaTest is TestMu AI
              - paragraph [ref=e427]: Headquarters
              - link "1 Sutter Street, Suite 500, San Francisco, California 94104" [ref=e432] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/TestMu+AI+(Formerly+LambdaTest)/@37.7900416,-122.4008281,17z/data=!4m15!1m8!3m7!1s0x808580627b638d83:0x4b3c6ec12ee5fb4e!2s1+Sutter+St+Suite+500,+San+Francisco,+CA+94104,+USA!3b1!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11xsfkj3p3!3m5!1s0x808581571f7f490b:0xe303f9b390a0b285!8m2!3d37.7900416!4d-122.4008281!16s%2Fg%2F11ghnp6m4p?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D
        - generic [ref=e433]:
          - paragraph [ref=e434]: How can we help?
          - button "Contact Us" [ref=e436] [cursor=pointer]
      - img "Footer Line" [ref=e456]
      - generic [ref=e459]:
        - generic [ref=e460]: © 2026 TestMu AI (Formerly LambdaTest). All rights reserved.
        - generic [ref=e461]:
          - text: AI-Agentic Cloud Built With
          - img "Love" [ref=e462]
          - text: For Quality Engineering
        - list [ref=e464]:
          - listitem [ref=e465]:
            - link "Like TestmuAI on Facebook" [ref=e466] [cursor=pointer]:
              - /url: https://www.facebook.com/testmuai/
              - img "Like TestmuAI on Facebook" [ref=e467]
          - listitem [ref=e468]:
            - link "Follow TestmuAI on Twitter" [ref=e469] [cursor=pointer]:
              - /url: https://x.com/testmuai
              - img "TestmuAI Twitter" [ref=e470]
          - listitem [ref=e471]:
            - link "Follow TestmuAI on LinkedIn" [ref=e472] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/testmu-ai/
              - img "Follow TestmuAI on Linkedin" [ref=e473]
          - listitem [ref=e474]:
            - link "Like TestmuAI on Youtube" [ref=e475] [cursor=pointer]:
              - /url: https://www.youtube.com/@TestMuAI
              - img "Subscribe TestmuAI on Youtube" [ref=e476]
          - listitem [ref=e477]:
            - link "Follow TestmuAI on Github" [ref=e478] [cursor=pointer]:
              - /url: https://github.com/LambdaTest/
              - img "GitHub" [ref=e479]
          - listitem [ref=e480]:
            - link "Follow TestmuAI on Pinterest" [ref=e481] [cursor=pointer]:
              - /url: https://www.pinterest.com/testmuai/
              - img "Pinterest" [ref=e482]
    - complementary "Chat support"
  - alert [ref=e483]
  - iframe [aria-hidden] [ref=e484]
  - button "Hello, have a question? Let’s chat." [ref=e485] [cursor=pointer]
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
  23  |         await this.locators.countryDropdown.click();
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
> 61  |             }).click();
      |                ^ Error: locator.click: Test timeout of 30000ms exceeded.
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