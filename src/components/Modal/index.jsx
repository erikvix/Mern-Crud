export default function Modal({ isOpen, children }) {
  return isOpen ? (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/70">
      <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-white text-black dark:text-white dark:bg-slate-900 w-[500px] h-auto p-8 rounded-[2rem]">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  ) : null;
}
