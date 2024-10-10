"use client";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
