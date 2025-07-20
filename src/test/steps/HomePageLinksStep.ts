import { Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pagefixture';
import axios from 'axios';

Then('I can validate the TestLinks', { timeout: 120000 }, async function () {
  const page = pageFixture.page!;
  const links = await page.$$eval('a', (elements) =>
    elements.map((el) => el.getAttribute('href')).filter((href) => href !== null && href !== '')
  );

  console.log(`🔗 Total links found: ${links.length}`);

  for (const url of links) {
    // Handle relative links by skipping them or converting to full if needed
    if (!url!.startsWith('http')) {
      console.log(`⚠️ Skipped relative or unsupported link: ${url}`);
      continue;
    }

    try {
      const response = await axios.head(url!, { timeout: 10000 });
      if (response.status === 200) {
        console.log(`✅ ${url} - OK`);
      } else {
        console.log(`❌ ${url} - ${response.status} is a broken link`);
      }
    } catch (error: any) {
      console.log(`❌ ${url} - Broken or Unreachable (${error?.response?.status || error.message})`);
    }
  }
});
