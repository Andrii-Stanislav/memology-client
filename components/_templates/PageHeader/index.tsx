import Link from "next/link";

export const PageHeader = () => {
  return (
    <header
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        backgroundColor: "blue",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
