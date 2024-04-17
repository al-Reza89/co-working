import Image from "next/image";
import HomePage from "./components/home-page/HomePage";
import SignUpPage from "./components/signup-page/SignUpPage";
import VerityEmailPage from "./components/verify-email-page/VerityEmailPage";
import ContinuePage from "./components/continue-page/ContinuePage";

export default function Home() {
  return (
    <main className="flex justify-end px-4 py-2">
      {/* <HomePage /> */}
      {/* <SignUpPage /> */}
      {/* <VerityEmailPage /> */}
      <ContinuePage />
    </main>
  );
}
