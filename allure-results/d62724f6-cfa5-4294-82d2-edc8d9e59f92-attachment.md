# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> TC03 - Verify disabled values in dropdown
- Location: tests\Dropdown.spec.ts:39:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('span[role="combobox"]').nth(2)
Expected substring: "Puerto Rico"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('span[role="combobox"]').nth(2) with timeout 5000ms
  - waiting for locator('span[role="combobox"]').nth(2)

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```