"use client";

export default function CmtDetail({ params }: { params: { time: string, cmt: string } }) {
  return (
    <div>
      Good {params.time} - {params.cmt}
    </div>
  );
}
