"use client"; // 클라이언트 컴포넌트로 설정

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function HelloPage() {
  // search params 가져오기
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // URL에서 특정 파라미터(id)를 가져옴
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  console.log('id:', id, 'name:', name);

  // searchParams 업데이트 함수
  const setSearchParam = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    // searchParams를 업데이트한 후 경로를 새로 설정
    if (router && pathname) {
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  // 버튼 클릭 시 search params 업데이트
  const handleUpdateParams = () => {
    setSearchParam('id', '100');
    setSearchParam('name', 'John Doe');
  };

  return (
    <div>
      <h1>Hello Page</h1>
      <p>Current ID: {id}</p>
      <p>Current Name: {name}</p>
      <button onClick={handleUpdateParams}>Update Search Params</button>
    </div>
  );
}
