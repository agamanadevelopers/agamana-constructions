import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { type ConstructionPackage } from '@/data/packages';

const GREEN = '#2d6a4f';
const DARK = '#0f2318';
const MUTED = '#6b7280';
const LIGHT_BG = '#f4f6f0';
const BORDER = '#e0e8e0';
const WHITE = '#ffffff';

const s = StyleSheet.create({
  page: { backgroundColor: WHITE, paddingBottom: 60 },
  header: { backgroundColor: DARK, paddingHorizontal: 36, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logoArea: { flexDirection: 'row', alignItems: 'center' },
  logoImg: { width: 28, height: 28, marginRight: 10 },
  brandName: { color: WHITE, fontSize: 14, fontFamily: 'Helvetica-Bold' },
  brandSub: { color: '#9ca3af', fontSize: 7, marginTop: 2 },
  headerRight: { alignItems: 'flex-end' },
  headerRightText: { color: '#9ca3af', fontSize: 7.5 },
  titleSection: { backgroundColor: LIGHT_BG, paddingHorizontal: 36, paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: BORDER },
  docTitle: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: DARK },
  docSubtitle: { fontSize: 9, color: MUTED, marginTop: 4 },
  packageCardsRow: { flexDirection: 'row', paddingHorizontal: 36, paddingTop: 20, paddingBottom: 10 },
  packageCard: { flex: 1, borderWidth: 1, borderColor: BORDER, borderRadius: 8, padding: 12, backgroundColor: WHITE, marginRight: 8 },
  packageCardFeatured: { flex: 1, borderWidth: 1.5, borderColor: GREEN, borderRadius: 8, padding: 12, backgroundColor: '#f0faf5', marginRight: 8 },
  packageCardLast: { flex: 1, borderWidth: 1, borderColor: BORDER, borderRadius: 8, padding: 12, backgroundColor: WHITE },
  featuredBadge: { backgroundColor: GREEN, color: WHITE, fontSize: 6.5, fontFamily: 'Helvetica-Bold', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 3, alignSelf: 'flex-start', marginBottom: 6 },
  packageName: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: DARK },
  packagePrice: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: GREEN, marginTop: 3 },
  packagePriceSub: { fontSize: 7.5, color: MUTED },
  packageTagline: { fontSize: 7.5, color: MUTED, marginTop: 5 },
  highlightRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 },
  bullet: { width: 4, height: 4, borderRadius: 2, backgroundColor: GREEN, marginTop: 3.5, marginRight: 4, flexShrink: 0 },
  highlightText: { fontSize: 7.5, color: DARK, flex: 1 },
  specSection: { paddingHorizontal: 36, paddingTop: 6 },
  categoryBlock: { marginBottom: 10 },
  categoryHeader: { backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 4, marginBottom: 4 },
  categoryTitle: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: WHITE },
  specRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  specCell: { flex: 1, paddingHorizontal: 8, paddingVertical: 4, borderRightWidth: 1, borderRightColor: '#f0f0f0' },
  specCellLast: { flex: 1, paddingHorizontal: 8, paddingVertical: 4 },
  specItem: { fontSize: 7, color: DARK },
  specItemDash: { fontSize: 7, color: '#d1d5db' },
  disclaimer: { marginHorizontal: 36, marginTop: 14, borderWidth: 1, borderColor: BORDER, borderRadius: 6, padding: 10, backgroundColor: LIGHT_BG },
  disclaimerText: { fontSize: 7, color: MUTED },
  disclaimerBold: { fontFamily: 'Helvetica-Bold', color: DARK },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: DARK, paddingHorizontal: 36, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerText: { color: '#9ca3af', fontSize: 7.5 },
  footerBrand: { color: WHITE, fontSize: 7.5, fontFamily: 'Helvetica-Bold' },
});

const CATEGORY_KEYS = [
  'design', 'structure', 'kitchen', 'bathrooms', 'doorsWindows',
  'flooring', 'painting', 'electrical', 'plumbing', 'miscellaneous',
];

function PackagesDocument({ packages }: { packages: ConstructionPackage[] }) {
  return (
    <Document title="Agamana Constructions – Construction Packages" author="Agamana Constructions">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View style={s.logoArea}>
            <Image src="/logo-light.webp" style={s.logoImg} />
            <View>
              <Text style={s.brandName}>Agamana Constructions</Text>
              <Text style={s.brandSub}>CONSTRUCTION · CIVIL WORKS · TURNKEY</Text>
            </View>
          </View>
          <View style={s.headerRight}>
            <Text style={s.headerRightText}>agamanaconstructions.com</Text>
            <Text style={[s.headerRightText, { marginTop: 2 }]}>+91 7090 644 644</Text>
          </View>
        </View>

        <View style={s.titleSection}>
          <Text style={s.docTitle}>Construction Packages</Text>
          <Text style={s.docSubtitle}>Bengaluru · Shimoga · Sagara  ·  Prices are per sq.ft of built-up area</Text>
        </View>

        <View style={s.packageCardsRow}>
          {packages.map((pkg, idx) => {
            const isLast = idx === packages.length - 1;
            const cardStyle = pkg.featured ? s.packageCardFeatured : isLast ? s.packageCardLast : s.packageCard;
            return (
              <View key={pkg.slug} style={cardStyle}>
                {pkg.featured && <Text style={s.featuredBadge}>MOST POPULAR</Text>}
                <Text style={s.packageName}>{pkg.name}</Text>
                <Text style={s.packagePrice}>{pkg.priceLabel}<Text style={s.packagePriceSub}>/sq.ft onwards</Text></Text>
                <Text style={s.packageTagline}>{pkg.tagline}</Text>
                {pkg.highlights.map((h) => (
                  <View key={h} style={s.highlightRow}>
                    <View style={s.bullet} />
                    <Text style={s.highlightText}>{h}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        <View style={s.specSection}>
          {CATEGORY_KEYS.map((key) => {
            const label = packages[0].categories.find((c) => c.key === key)?.label ?? key;
            const maxRows = Math.max(...packages.map((p) => p.categories.find((c) => c.key === key)?.items.length ?? 0));
            return (
              <View key={key} style={s.categoryBlock} wrap={false}>
                <View style={s.categoryHeader}>
                  <Text style={s.categoryTitle}>{label.toUpperCase()}</Text>
                </View>
                {Array.from({ length: maxRows }).map((_, i) => (
                  <View key={i} style={s.specRow}>
                    {packages.map((pkg, pi) => {
                      const item = pkg.categories.find((c) => c.key === key)?.items[i];
                      const isLast = pi === packages.length - 1;
                      return (
                        <View key={pkg.slug} style={isLast ? s.specCellLast : s.specCell}>
                          {item ? <Text style={s.specItem}>{item}</Text> : <Text style={s.specItemDash}>—</Text>}
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        <View style={s.disclaimer}>
          <Text style={s.disclaimerText}>
            <Text style={s.disclaimerBold}>Disclaimer: </Text>
            The above package prices are applicable for projects with a minimum built-up area of 3,000 sq.ft. The final project estimate may vary depending on the project requirements, site location, site conditions, specifications, scope of work, and prevailing material prices at the time of construction. Final pricing will be confirmed based on the project-specific requirements and detailed estimation.
          </Text>
        </View>

        <View style={s.footer} fixed>
          <View>
            <Text style={s.footerBrand}>Agamana Constructions</Text>
            <Text style={[s.footerText, { marginTop: 2 }]}>No.57, Wodeyar Building, B.H. Road, Sagara – 577401</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={s.footerText}>sales@agamana.com</Text>
            <Text style={[s.footerText, { marginTop: 2 }]}>+91 7090 644 644</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function PackagesPdfContent({ packages }: { packages: ConstructionPackage[] }) {
  return (
    <PDFDownloadLink
      document={<PackagesDocument packages={packages} />}
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
