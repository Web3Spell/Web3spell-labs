import { notFound } from 'next/navigation'
import { PageShell } from '@/components/site-shell'
import { CaseStudyDossier } from '@/components/case-study-dossier'
import { caseStudies } from '@/lib/content'

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const currentIndex = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug)
  if (currentIndex === -1) notFound()

  const item = caseStudies[currentIndex]
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <PageShell>
      <CaseStudyDossier item={item} prevStudy={prevStudy} nextStudy={nextStudy} />
    </PageShell>
  )
}
