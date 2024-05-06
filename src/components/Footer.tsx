import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="relative h-20 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="flex h-full flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="pb-2 text-center md:pb-0 md:text-left">
            <p className="text-sm text-muted-foreground">&copy;</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
