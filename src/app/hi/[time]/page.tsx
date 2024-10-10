// /hi/[time]/page.tsx

export default function HiTime({ params }: { params: { time: string } }) {
  return <div>Good {params.time}!</div>;
}
