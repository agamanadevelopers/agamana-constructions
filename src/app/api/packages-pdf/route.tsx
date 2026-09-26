import { NextResponse } from 'next/server';
import { renderToBuffer, Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { packages } from '@/data/packages';
import path from 'path';
import fs from 'fs';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff', fontWeight: 700 },
  ],
});

const GREEN = '#2d6a4f';
const DARK = '#0f2318';
const MUTED = '#6b7280';
const LIGHT_BG = '#f4f6f0';
const BORDER = '#e0e8e0';
const WHITE = '#ffffff';

const s = StyleSheet.create({
  page: { fontFamily: 'Inter', backgroundColor: WHITE, paddingBottom: 60 },

  // Header
  header: { backgroundColor: DARK, paddingHorizontal: 36, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logoArea: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandName: { color: WHITE, fontSize: 14, fontWeight: 700, letterSpacing: 0.5 },
  brandSub: { color: '#9ca3af', fontSize: 7, letterSpacing: 2, marginTop: 2 },
  headerRight: { alignItems: 'flex-end' },
  headerRightText: { color: '#9ca3af', fontSize: 7.5 },

  // Title section
  titleSection: { backgroundColor: LIGHT_BG, paddingHorizontal: 36, paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: BORDER },
  docTitle: { fontSize: 20, fontWeight: 700, color: DARK },
  docSubtitle: { fontSize: 9, color: MUTED, marginTop: 4 },

  // Package header cards
  packageCardsRow: { flexDirection: 'row', gap: 10, paddingHorizontal: 36, paddingTop: 20, paddingBottom: 10 },
  packageCard: { flex: 1, borderWidth: 1, borderColor: BORDER, borderRadius: 8, padding: 12, backgroundColor: WHITE },
  packageCardFeatured: { flex: 1, borderWidth: 1.5, borderColor: GREEN, borderRadius: 8, padding: 12, backgroundColor: '#f0faf5' },
  featuredBadge: { backgroundColor: GREEN, color: WHITE, fontSize: 6.5, fontWeight: 700, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 3, alignSelf: 'flex-start', marginBottom: 6, letterSpacing: 0.5 },
  packageName: { fontSize: 13, fontWeight: 700, color: DARK },
  packagePrice: { fontSize: 11, fontWeight: 700, color: GREEN, marginTop: 3 },
  packagePriceSub: { fontSize: 7.5, color: MUTED, fontWeight: 400 },
  packageTagline: { fontSize: 7.5, color: MUTED, marginTop: 5, lineHeight: 1.4 },
  highlightRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 4, gap: 4 },
  bullet: { width: 4, height: 4, borderRadius: 2, backgroundColor: GREEN, marginTop: 3.5, flexShrink: 0 },
  highlightText: { fontSize: 7.5, color: DARK, flex: 1, lineHeight: 1.4 },

  // Spec section
  specSection: { paddingHorizontal: 36, paddingTop: 6 },
  categoryBlock: { marginBottom: 12 },
  categoryHeader: { backgroundColor: DARK, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 4, marginBottom: 6 },
  categoryTitle: { fontSize: 8, fontWeight: 700, color: WHITE, letterSpacing: 0.5 },
  specRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  specCell: { flex: 1, paddingHorizontal: 8, paddingVertical: 5, borderRightWidth: 1, borderRightColor: '#f0f0f0' },
  specCellLast: { flex: 1, paddingHorizontal: 8, paddingVertical: 5 },
  specItem: { fontSize: 7, color: DARK, lineHeight: 1.5 },
  specItemDash: { fontSize: 7, color: '#d1d5db' },

  // Disclaimer
  disclaimer: { marginHorizontal: 36, marginTop: 14, borderWidth: 1, borderColor: BORDER, borderRadius: 6, padding: 10, backgroundColor: LIGHT_BG },
  disclaimerText: { fontSize: 7, color: MUTED, lineHeight: 1.6 },
  disclaimerBold: { fontWeight: 700, color: DARK },

  // Footer
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: DARK, paddingHorizontal: 36, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerText: { color: '#9ca3af', fontSize: 7.5 },
  footerBrand: { color: WHITE, fontSize: 7.5, fontWeight: 600 },
});

export async function GET() {
  const logoPath = path.join(process.cwd(), 'public', 'logo-light.webp');
  const logoData = fs.existsSync(logoPath)
    ? `data:image/webp;base64,${fs.readFileSync(logoPath).toString('base64')}`
    : null;

  const categoryKeys = [
    'design', 'structure', 'kitchen', 'bathrooms', 'doorsWindows',
    'flooring', 'painting', 'electrical', 'plumbing', 'miscellaneous',
  ];

  const buffer = await renderToBuffer(
    <Document title="Agamana Constructions – Construction Packages" author="Agamana Constructions">
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View style={s.logoArea}>
            {logoData && <Image src={logoData} style={{ width: 28, height: 28 }} />}
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

        {/* Title */}
        <View style={s.titleSection}>
          <Text style={s.docTitle}>Construction Packages</Text>
          <Text style={s.docSubtitle}>Bengaluru · Shimoga · Sagara  ·  Prices are per sq.ft of built-up area</Text>
        </View>

        {/* Package summary cards */}
        <View style={s.packageCardsRow}>
          {packages.map((pkg) => (
            <View key={pkg.slug} style={pkg.featured ? s.packageCardFeatured : s.packageCard}>
              {pkg.featured && <Text style={s.featuredBadge}>MOST POPULAR</Text>}
              <Text style={s.packageName}>{pkg.name}</Text>
              <Text style={s.packagePrice}>{pkg.priceLabel}/sq.ft <Text style={s.packagePriceSub}>onwards</Text></Text>
              <Text style={s.packageTagline}>{pkg.tagline}</Text>
              {pkg.highlights.map((h) => (
                <View key={h} style={s.highlightRow}>
                  <View style={s.bullet} />
                  <Text style={s.highlightText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Spec categories */}
        <View style={s.specSection}>
          {categoryKeys.map((key) => {
            const label = packages[0].categories.find((c) => c.key === key)?.label ?? key;
            return (
              <View key={key} style={s.categoryBlock} wrap={false}>
                <View style={s.categoryHeader}>
                  <Text style={s.categoryTitle}>{label.toUpperCase()}</Text>
                </View>
                {(() => {
                  const maxRows = Math.max(...packages.map((p) => p.categories.find((c) => c.key === key)?.items.length ?? 0));
                  return Array.from({ length: maxRows }).map((_, i) => (
                    <View key={i} style={s.specRow}>
                      {packages.map((pkg, pi) => {
                        const item = pkg.categories.find((c) => c.key === key)?.items[i];
                        const isLast = pi === packages.length - 1;
                        return (
                          <View key={pkg.slug} style={isLast ? s.specCellLast : s.specCell}>
                            {item
                              ? <Text style={s.specItem}>{item}</Text>
                              : <Text style={s.specItemDash}>—</Text>
                            }
                          </View>
                        );
                      })}
                    </View>
                  ));
                })()}
              </View>
            );
          })}
        </View>

        {/* Disclaimer */}
        <View style={s.disclaimer}>
          <Text style={s.disclaimerText}>
            <Text style={s.disclaimerBold}>Disclaimer: </Text>
            The above package prices are applicable for projects with a minimum built-up area of 3,000 sq.ft. The final project estimate may vary depending on the project requirements, site location, site conditions, specifications, scope of work, and prevailing material prices at the time of construction. Final pricing will be confirmed based on the project-specific requirements and detailed estimation.
          </Text>
        </View>

        {/* Footer */}
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

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Agamana-Constructions-Packages.pdf"',
    },
  });
}
