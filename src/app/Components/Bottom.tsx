"use client";

interface BottomProps {
  title: string;
  onClick: () => void;
}

function Bottom({ title, onClick }: BottomProps) {
  return (
    <div
      className="Bottom"
      onClick={onClick}
    >
      <p style={{ color: "#ffffff" }}>{title}</p>
    </div>
  );
}

export default Bottom;
