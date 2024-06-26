import { GithubIcon, LinkedinIcon, MailIcon} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-slate-50 dark:bg-background dark:text-gray-400 text-gray-900 py-2 pb-20 md:pb-10 md:py-10 border-t">
      <footer className="max-w-6xl container mx-auto flex flex-col md:flex-row items-start justify-between p6-4 px-6">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col w-1/2">
            <p className="hidden md:block text-sm mt-4">
              © Shaishav Shah {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link
              className="text-gray-900 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white mr-4"
              href="mailto:shaishav.shah04@gmail.com"
              target="_blank"
            >
              <MailIcon className="h-6 w-6" aria-label="Email" />
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white mr-4"
              href="https://github.com/ShaishavShah04"
              target="_blank"
            >
              <GithubIcon className="h-6 w-6" aria-label="Github" />
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
              href="https://www.linkedin.com/in/shaishavshah04/"
              target="_blank"
            >
              <LinkedinIcon className="h-6 w-6" aria-label="LinkedIn" />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-row mt-8 md:mt-12 md:hidden items-center justify-between gap-2 border-t-2 py-4">
          <p className="block md:hidden text-sm">
            © Shaishav Shah {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
