import Image from 'next/image'

const projectMedia: Record<
  string,
  {
    src: string
    logo?: string
    alt: string
    tag: string
    domain: string
  }
> = {
  civitas: {
    src: '/images/work/civitas-cover-hd.png',
    logo: '/images/work/civitas-logo.png',
    alt: 'Civitas private payroll interface on Solana',
    tag: 'CIVITAS · SOLANA ZK',
    domain: 'meetcivitas.xyz',
  },
  chainpot: {
    src: '/images/work/chainpot-cover-hd.png',
    logo: '/images/work/chainpot-logo.jpg',
    alt: 'ChainPot rotating savings protocol interface',
    tag: 'CHAINPOT · CERTORA AUDITED',
    domain: 'chainpot.fun',
  },
  'divergence-router': {
    src: '/images/work/divergence-router-cover-hd.png',
    logo: '/images/work/divergence-router-logo.jpg',
    alt: 'Divergence Router relative-value execution interface on Somnia',
    tag: 'DIVERGENCE ROUTER · SOMNIA',
    domain: 'divergence-router.vercel.app',
  },
  'core-nexus': {
    src: '/images/work/core-nexus-cover-hd.png',
    alt: 'Core Nexus 36-hour Web3 hackathon mainstage at Jagran Lakecity University Bhopal',
    tag: 'CORE NEXUS · JLU BHOPAL',
    domain: 'dorahacks.io · core-nexus-bhopal',
  },
}

export function ProjectArtwork({ project }: { project: string }) {
  const media = projectMedia[project] ?? projectMedia.civitas

  return (
    <div className={`project-artwork project-artwork-photo project-artwork-${project}`}>
      <div className="project-frame-bar" aria-hidden="true">
        <div className="project-frame-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="project-frame-url">{media.domain}</span>
        <span className="project-frame-spacer" />
      </div>

      <div className="project-frame-viewport">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          sizes="(max-width: 800px) 92vw, 680px"
          className="project-artwork-img"
        />
      </div>
    </div>
  )
}
