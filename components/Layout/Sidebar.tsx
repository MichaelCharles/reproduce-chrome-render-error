export default function Sidebar() {
  const menu = (
    <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-pink-500 px-5 pt-2 pb-5">
      <div className="flex h-16 shrink-0 items-center"></div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-3"></ul>
      </nav>
    </div>
  );

  return (
    <>
      <div className="fixed inset-y-0 flex flex-col w-64">{menu}</div>
    </>
  );
}
