import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Agamana Constructions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#01473A',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Subtle radial highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'radial-gradient(ellipse 70% 60% at 20% 10%, rgba(81,186,124,0.25) 0%, transparent 60%)',
          }}
        />

        {/* Brand label */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#51BA7C',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            CONSTRUCTION · CIVIL WORKS · TURNKEY PROJECTS
          </span>

          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Agamana
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#51BA7C',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 32,
            }}
          >
            Constructions
          </span>

          <span
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Homes, villas, farmhouses, commercial &amp; hospitality spaces
            across Bengaluru, Shimoga &amp; Sagara.
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 40,
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Basic from ₹1,879 · Classic from ₹2,099 · Luxury from ₹2,550 /sq.ft
            </span>
          </div>
        </div>

        {/* Domain watermark */}
        <span
          style={{
            position: 'absolute',
            bottom: 40,
            right: 80,
            fontSize: 18,
            color: 'rgba(255,255,255,0.35)',
            fontWeight: 500,
            letterSpacing: '0.04em',
          }}
        >
          agamanaconstructions.com
        </span>
      </div>
    ),
    { ...size },
  );
}
