import Image from 'next/image';

/**
 * Agamana Constructions brand lockup.
 * - default: dark logo (green icon + dark wordmark) for light backgrounds
 * - light:   white logo for dark backgrounds
 * Source files live in /public (logo-dark.webp, logo-light.webp), 2000×500 (4:1).
 */
export default function Wordmark({
  light = false,
  className = 'h-9 w-auto',
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={light ? '/logo-light.webp' : '/logo-dark.webp'}
      alt="Agamana Constructions"
      width={200}
      height={50}
      priority
      className={className}
    />
  );
}
