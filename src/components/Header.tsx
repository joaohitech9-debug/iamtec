export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center">
          <img
            src="/logo-iamtec.png"
            alt="IAMTEC - Instituto Amazônia de Tecnologias Sustentáveis"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
}
