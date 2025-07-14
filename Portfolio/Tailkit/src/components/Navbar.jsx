const Navbar = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
      <header className="relative flex flex-none items-center py-8">
        <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 contaienr xl:max-w-7xl mx-auto px-4 lg:px8">
          <div>
            <a
              href="/"
              className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <span>Company</span>
            </a>
          </div>
          <nav className="space-x-3 md:space-x-6">
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Features</span>
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Pricing</span>
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Team</span>
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
