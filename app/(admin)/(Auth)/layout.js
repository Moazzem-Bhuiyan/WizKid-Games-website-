export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="bg-cover bg-center bg-gray-900 bg-blend-multiply min-h-screen flex items-center justify-center">
        <div className="mx-auto flex h-screen w-1/3 items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
