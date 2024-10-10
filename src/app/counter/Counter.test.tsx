// Counter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";
describe("Counter Component", () => {
  test("increments counter on button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Increment/i);

    // 초기 카운터 값 확인
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

    // 버튼 클릭 시뮬레이션
    fireEvent.click(buttonElement);

    // 카운터 값 증가 확인
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});
