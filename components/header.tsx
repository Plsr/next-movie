export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">Next Orange</h1>
      <nav>
        <ul className="flex">
          <li className="mr-2">Top</li>
          <li className="mr-2">New</li>
          <li className="mr-2">Ask</li>
        </ul>
      </nav>
      <span>Login</span>
    </header>
  )
}
