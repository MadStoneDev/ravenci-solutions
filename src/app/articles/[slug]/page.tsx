export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <div>Article Page: {params.slug}</div>;
}
