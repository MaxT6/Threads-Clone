import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      <h1>Threads</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}