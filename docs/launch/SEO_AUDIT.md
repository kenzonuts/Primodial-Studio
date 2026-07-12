# SEO Audit

## Implemented (code-verified)

| Item                     | Location / behavior                                          | Status |
| ------------------------ | ------------------------------------------------------------ | ------ |
| Metadata defaults        | `buildMetadata()` via root layout                            | OK     |
| Canonical base           | `NEXT_PUBLIC_SITE_URL` / `SITE_URL`                          | OK*    |
| Open Graph               | Metadata + dynamic OG (`opengraph-image`, `/api/og`)         | OK     |
| Twitter cards            | Via metadata helpers                                         | OK     |
| JSON-LD Org/WebSite      | Root layout                                                  | OK     |
| JSON-LD FAQ + Breadcrumb | Homepage                                                     | OK     |
| `robots.txt`             | `src/app/robots.ts` — allow `/`, disallow `/api/`, `/admin/` | OK     |
| `sitemap.xml`            | `/`, `/privacy`, `/terms` only (no thin redirect URLs)       | OK     |
| Heading structure        | Per-section `h2` + page `h1` in hero                         | OK**   |
| Internal linking         | Nav/footer → live anchors; legal pages                       | OK     |
| 404                      | Custom `not-found`                                           | OK     |
| Redirects                | Reserved routes → homepage sections (client hash)            | OK     |

\* Must match live domain in production env.  
\*\* Spot-check one h1 per page; sections use labelled headings.

## Launch actions (ops)

- [ ] Set verification meta: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (+ Bing if needed)
- [ ] Search Console: add property, verify, submit `sitemap.xml`
- [ ] Rich Results Test on homepage FAQ JSON-LD
- [ ] Facebook Sharing Debugger / Twitter Card Validator on canonical URL
- [ ] Confirm no `noindex` on production
- [ ] Monitor Coverage for soft-404 on reserved redirects (expected temporary)

## Content / alt text

- [ ] Meaningful `alt` on real images when assets replace placeholders
- [ ] Decorative visuals `aria-hidden` (already used on many backgrounds)
- [ ] Unique title/description if additional pages ship later

## Deferred (roadmap)

- Dedicated `/about`, `/services/[slug]`, `/work/[slug]`, `/blog` with unique metadata
- Re-enable `getDynamicSitemapEntries()` when templates render real content
- Case study structured data (`Article` / `CreativeWork`)

## Score expectation

Technical SEO foundation is launch-ready. Content depth and unique landing pages will improve rankings over time — not a blocker for public launch of the studio homepage.
