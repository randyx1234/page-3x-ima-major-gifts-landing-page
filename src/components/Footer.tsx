import imaLogo from "@/assets/ima-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 bg-section-light border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={imaLogo} alt="Independent Medical Alliance" className="h-16" />
          <div className="text-center space-y-2 max-w-2xl">
            <p className="text-muted-foreground">
              Independent Medical Alliance (IMA) is a 501(c)(3) nonprofit organization.
            </p>
            <p className="text-muted-foreground">
              All contributions are tax-deductible to the fullest extent allowed by law.
            </p>
            <p className="text-muted-foreground">
              No goods or services are provided in exchange for your contribution.
            </p>
          </div>
          <div className="pt-6 border-t border-border w-full text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Independent Medical Alliance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
