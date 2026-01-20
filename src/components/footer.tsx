import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 l flex items-center justify-center">
        {currentYear} {APP_NAME}. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
