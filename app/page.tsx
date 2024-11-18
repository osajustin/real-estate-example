import { DarkThemeToggle } from "flowbite-react";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <Navbar />
    </main>
  );
}
