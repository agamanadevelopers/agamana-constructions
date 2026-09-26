import { useState, useEffect } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { type ConstructionPackage } from '@/data/packages';

const G = '#2d6a4f';   // brand green
const G2 = '#1a3d2b';  // dark green
const DARK = '#0f2318';
const MUTED = '#6b7280';
const LITE = '#f4f9f6';
const BORDER = '#d1e0d8';
const WHITE = '#ffffff';
const GOLD = '#b8860b';

const s = StyleSheet.create({
  page: { backgroundColor: WHITE, fontFamily: 'Helvetica' },

  // ── Cover header ──
  header: {
    backgroundColor: DARK,
    paddingHorizontal: 40, paddingTop: 28, paddingBottom: 24,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  logoWrap: { flexDirection: 'row', alignItems: 'center' },
  logoImg: { width: 40, height: 40, marginRight: 12 },
  brandCol: {},
  brandName: { color: WHITE, fontSize: 16, fontFamily: 'Helvetica-Bold', letterSpacing: 0.3 },
  brandTagline: { color: '#86a898', fontSize: 7.5, marginTop: 3, letterSpacing: 1.5 },
  headerContact: { alignItems: 'flex-end' },
  headerContactLine: { color: '#86a898', fontSize: 8, marginBottom: 3 },

  // ── Hero strip ──
  hero: {
    backgroundColor: G,
    paddingHorizontal: 40, paddingVertical: 18,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  heroTitle: { color: WHITE, fontSize: 22, fontFamily: 'Helvetica-Bold' },
  heroSub: { color: '#a8d4bc', fontSize: 9, marginTop: 4 },
  heroBadge: {
    borderWidth: 1, borderColor: '#a8d4bc', borderRadius: 4,
    paddingHorizontal: 10, paddingVertical: 5,
  },
  heroBadgeText: { color: WHITE, fontSize: 8, fontFamily: 'Helvetica-Bold' },

  // ── Package summary cards ──
  cardsSection: { paddingHorizontal: 40, paddingTop: 20, paddingBottom: 8 },
  cardsSectionTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: MUTED, letterSpacing: 1.5, marginBottom: 10 },
  cardsRow: { flexDirection: 'row', gap: 10 },

  card: { flex: 1, borderWidth: 1, borderColor: BORDER, borderRadius: 8, overflow: 'hidden' },
  cardFeatured: { flex: 1, borderWidth: 2, borderColor: G, borderRadius: 8, overflow: 'hidden' },

  cardTop: { backgroundColor: LITE, paddingHorizontal: 12, paddingVertical: 10 },
  cardTopFeatured: { backgroundColor: G, paddingHorizontal: 12, paddingVertical: 10 },
  cardBadge: { color: '#a8d4bc', fontSize: 6.5, fontFamily: 'Helvetica-Bold', letterSpacing: 1, marginBottom: 4 },
  cardName: { color: DARK, fontSize: 14, fontFamily: 'Helvetica-Bold' },
  cardNameFeatured: { color: WHITE, fontSize: 14, fontFamily: 'Helvetica-Bold' },
  cardPrice: { color: G, fontSize: 12, fontFamily: 'Helvetica-Bold', marginTop: 4 },
  cardPriceFeatured: { color: '#a8d4bc', fontSize: 12, fontFamily: 'Helvetica-Bold', marginTop: 4 },
  cardPriceSub: { fontSize: 7.5 },
  cardTagline: { color: MUTED, fontSize: 7, marginTop: 3 },
  cardTaglineFeatured: { color: '#c8e6d4', fontSize: 7, marginTop: 3 },

  cardBody: { paddingHorizontal: 12, paddingVertical: 10, backgroundColor: WHITE },
  cardBodyFeatured: { paddingHorizontal: 12, paddingVertical: 10, backgroundColor: '#fafffe' },
  hlRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 },
  hlDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: G, marginTop: 2.5, marginRight: 5, flexShrink: 0 },
  hlText: { fontSize: 7.5, color: DARK, flex: 1, lineHeight: 1.4 },

  // ── Spec table ──
  specSection: { paddingHorizontal: 40, paddingTop: 12, paddingBottom: 4 },
  specTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: MUTED, letterSpacing: 1.5, marginBottom: 10 },

  // Column header row
  colHeaderRow: { flexDirection: 'row', marginBottom: 0 },
  colHeaderSpacer: { width: 0 },
  colHeader: { flex: 1, backgroundColor: G2, paddingVertical: 7, alignItems: 'center' },
  colHeaderFeatured: { flex: 1, backgroundColor: G, paddingVertical: 7, alignItems: 'center' },
  colHeaderText: { color: WHITE, fontSize: 8, fontFamily: 'Helvetica-Bold', letterSpacing: 0.5 },
  colHeaderPrice: { color: '#a8d4bc', fontSize: 6.5, marginTop: 1 },

  categoryBlock: { marginBottom: 0 },
  categoryHeader: {
    backgroundColor: '#edf4f0',
    paddingHorizontal: 10, paddingVertical: 5,
    flexDirection: 'row', alignItems: 'center',
  },
  categoryDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: G, marginRight: 6 },
  categoryTitle: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: G2, letterSpacing: 0.3 },

  specRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f0f5f2' },
  specRowAlt: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f0f5f2', backgroundColor: '#fafffe' },
  specCell: { flex: 1, paddingHorizontal: 8, paddingVertical: 5, borderRightWidth: 1, borderRightColor: '#f0f5f2' },
  specCellLast: { flex: 1, paddingHorizontal: 8, paddingVertical: 5 },
  specText: { fontSize: 7, color: DARK, lineHeight: 1.4 },
  specDash: { fontSize: 7, color: '#d1d5db' },

  // ── Disclaimer ──
  disclaimerWrap: { marginHorizontal: 40, marginTop: 14, marginBottom: 70, borderLeftWidth: 3, borderLeftColor: G, paddingLeft: 10, paddingVertical: 4 },
  disclaimerText: { fontSize: 6.5, color: MUTED, lineHeight: 1.6 },
  disclaimerBold: { fontFamily: 'Helvetica-Bold', color: DARK },

  // ── Footer ──
  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: DARK,
    paddingHorizontal: 40, paddingVertical: 14,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  footerLeft: {},
  footerBrand: { color: WHITE, fontSize: 8.5, fontFamily: 'Helvetica-Bold' },
  footerAddr: { color: '#86a898', fontSize: 7, marginTop: 2 },
  footerRight: { alignItems: 'flex-end' },
  footerLine: { color: '#86a898', fontSize: 7, marginBottom: 2 },
  footerPage: { color: '#4a6a58', fontSize: 6.5, marginTop: 4 },
});

const CATEGORY_KEYS = [
  'design', 'structure', 'kitchen', 'bathrooms', 'doorsWindows',
  'flooring', 'painting', 'electrical', 'plumbing', 'miscellaneous',
];

function PackagesDocument({ packages, logoUrl }: { packages: ConstructionPackage[]; logoUrl: string | null }) {
  return (
    <Document title="Agamana Constructions – Construction Packages" author="Agamana Constructions">
      <Page size="A4" style={s.page}>

        {/* ── Header ── */}
        <View style={s.header}>
          <View style={s.logoWrap}>
            {logoUrl && <Image src={logoUrl} style={s.logoImg} />}
            <View style={s.brandCol}>
              <Text style={s.brandName}>Agamana Constructions</Text>
              <Text style={s.brandTagline}>CONSTRUCTION  ·  CIVIL WORKS  ·  TURNKEY</Text>
            </View>
          </View>
          <View style={s.headerContact}>
            <Text style={s.headerContactLine}>agamanaconstructions.com</Text>
            <Text style={s.headerContactLine}>+91 7090 644 644</Text>
            <Text style={s.headerContactLine}>sales@agamana.com</Text>
          </View>
        </View>

        {/* ── Hero strip ── */}
        <View style={s.hero}>
          <View>
            <Text style={s.heroTitle}>Construction Packages</Text>
            <Text style={s.heroSub}>Bengaluru · Shimoga · Sagara  ·  All prices per sq.ft of built-up area</Text>
          </View>
          <View style={s.heroBadge}>
            <Text style={s.heroBadgeText}>SPEC COMPARISON</Text>
          </View>
        </View>

        {/* ── Package summary cards ── */}
        <View style={s.cardsSection}>
          <Text style={s.cardsSectionTitle}>PACKAGES AT A GLANCE</Text>
          <View style={s.cardsRow}>
            {packages.map((pkg) => {
              const isFeatured = !!pkg.featured;
              return (
                <View key={pkg.slug} style={isFeatured ? s.cardFeatured : s.card}>
                  <View style={isFeatured ? s.cardTopFeatured : s.cardTop}>
                    {isFeatured && <Text style={s.cardBadge}>★  MOST POPULAR</Text>}
                    <Text style={isFeatured ? s.cardNameFeatured : s.cardName}>{pkg.name}</Text>
                    <Text style={isFeatured ? s.cardPriceFeatured : s.cardPrice}>
                      {pkg.priceLabel}<Text style={s.cardPriceSub}> /sq.ft</Text>
                    </Text>
                    <Text style={isFeatured ? s.cardTaglineFeatured : s.cardTagline}>{pkg.tagline}</Text>
                  </View>
                  <View style={isFeatured ? s.cardBodyFeatured : s.cardBody}>
                    {pkg.highlights.slice(0, 4).map((h) => (
                      <View key={h} style={s.hlRow}>
                        <View style={s.hlDot} />
                        <Text style={s.hlText}>{h}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ── Spec comparison table ── */}
        <View style={s.specSection}>
          <Text style={s.specTitle}>DETAILED SPECIFICATIONS</Text>

          {/* Column headers */}
          <View style={s.colHeaderRow}>
            <View style={s.colHeaderSpacer} />
            {packages.map((pkg) => (
              <View key={pkg.slug} style={pkg.featured ? s.colHeaderFeatured : s.colHeader}>
                <Text style={s.colHeaderText}>{pkg.name.toUpperCase()}</Text>
                <Text style={s.colHeaderPrice}>{pkg.priceLabel}/sq.ft</Text>
              </View>
            ))}
          </View>

          {/* Category rows */}
          {CATEGORY_KEYS.map((key) => {
            const label = packages[0].categories.find((c) => c.key === key)?.label ?? key;
            const maxRows = Math.max(...packages.map((p) => p.categories.find((c) => c.key === key)?.items.length ?? 0));
            return (
              <View key={key} style={s.categoryBlock} wrap={false}>
                <View style={s.categoryHeader}>
                  <View style={s.categoryDot} />
                  <Text style={s.categoryTitle}>{label}</Text>
                </View>
                {Array.from({ length: maxRows }).map((_, i) => (
                  <View key={i} style={i % 2 === 1 ? s.specRowAlt : s.specRow}>
                    {packages.map((pkg, pi) => {
                      const item = pkg.categories.find((c) => c.key === key)?.items[i];
                      const isLast = pi === packages.length - 1;
                      return (
                        <View key={pkg.slug} style={isLast ? s.specCellLast : s.specCell}>
                          {item
                            ? <Text style={s.specText}>{item}</Text>
                            : <Text style={s.specDash}>—</Text>
                          }
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        {/* ── Disclaimer ── */}
        <View style={s.disclaimerWrap}>
          <Text style={s.disclaimerText}>
            <Text style={s.disclaimerBold}>Disclaimer: </Text>
            The above package prices are applicable for projects with a minimum built-up area of 3,000 sq.ft. The final project estimate may vary depending on the project requirements, site location, site conditions, specifications, scope of work, and prevailing material prices at the time of construction. Final pricing will be confirmed based on the project-specific requirements and detailed estimation.
          </Text>
        </View>

        {/* ── Footer ── */}
        <View style={s.footer} fixed>
          <View style={s.footerLeft}>
            <Text style={s.footerBrand}>Agamana Constructions</Text>
            <Text style={s.footerAddr}>No.57, Wodeyar Building, 1st Floor, Near Old Private Bus Stand, B.H. Road, Sagara – 577401</Text>
          </View>
          <View style={s.footerRight}>
            <Text style={s.footerLine}>+91 7090 644 644</Text>
            <Text style={s.footerLine}>sales@agamana.com</Text>
            <Text
              style={s.footerPage}
              render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
            />
          </View>
        </View>

      </Page>
    </Document>
  );
}

export default function PackagesPdfContent({ packages }: { packages: ConstructionPackage[] }) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Convert logo to base64 so @react-pdf/renderer can embed it
    fetch('/logo-light.webp')
      .then((r) => r.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setLogoUrl(reader.result as string);
        reader.readAsDataURL(blob);
      })
      .catch(() => setLogoUrl(null));
  }, []);

  return (
    <PDFDownloadLink
      document={<PackagesDocument packages={packages} logoUrl={logoUrl} />}
      fileName="Agamana-Constructions-Packages.pdf"
      className="inline-flex items-center gap-2 rounded-lg border border-brand bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90 active:scale-[0.98]"
    >
      {({ loading }) => (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {loading ? 'Preparing PDF…' : 'Download Packages PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
}
