'use client'

import Image from 'next/image'

export function TreatedImage({
  src,
  alt,
  index,
  objectPosition,
  className = '',
}: {
  src?: string
  alt: string
  index: string
  tag?: string
  metric?: string
  objectPosition?: string
  className?: string
}) {
  return (
    <figure className={`treated-image ${className}`}>
      <div className="treated-image-media">
        {src ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 800px) 82vw, 380px"
              draggable={false}
              style={objectPosition ? { objectPosition } : undefined}
            />
            <span className="treated-image-wash" />
          </>
        ) : (
          <div
            className="treated-image-placeholder"
            role="img"
            aria-label={alt}
          >
            <strong>{index}</strong>
          </div>
        )}
      </div>
    </figure>
  )
}
