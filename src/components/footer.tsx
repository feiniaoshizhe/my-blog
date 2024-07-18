import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className=" bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className=" container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className=" space-y-4">
            <div className=" flex items-center space-x-2">
              <Icons.logo className=" h-6 w-6" />
              <span className=" text-md font-semibold">Coding Bird</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              A Programming Rookie Want to Become the Senior Development
              Engineer, Welcome to My World, Nice to Meet you.
            </p>
            <div className=" flex space-x-4">
              <a
                href="http://bilibili.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bilibili"
              >
                <Icons.messageCircle className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
