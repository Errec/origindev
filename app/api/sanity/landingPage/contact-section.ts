import { sanityClient } from '@/lib/sanity-client';
import { ContactSection } from '@/types/contact-section';

export async function getContactSectionData(): Promise<
  ContactSection & { blogPostCount: number }
> {
  try {
    const query = `
      *[_type == "landingPage"][0] {
        contactSection {
          smallTitle,
          bigTitle,
          ctaPhrase,
          businessEnquiries,
          openPositions,
          locations
        },
        "blogPostCount": count(*[_type == "blog"])
      }
    `;
    const result = await sanityClient.fetch(query);
    return { ...result.contactSection, blogPostCount: result.blogPostCount };
  } catch (error) {
    console.error('Error fetching contact section data:', error);
    throw error;
  }
}
