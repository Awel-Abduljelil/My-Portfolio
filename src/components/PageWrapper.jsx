export default function PageWrapper({ children, className = "" }) {
  return (
    <main
      className={`animate-[fadeIn_0.4s_ease] min-h-[70vh] px-5 sm:px-8 py-12 ${className}`}
    >
      {children}
    </main>
  );
}
