const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display font-bold text-sm">
        Portfolio<span className="text-primary">.</span>
      </p>
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
