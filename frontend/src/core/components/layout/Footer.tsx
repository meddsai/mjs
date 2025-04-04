import Link from "next/link";
import { Button } from "@/core/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-bold mb-4">MJS</h3>
            <p className="text-sm text-muted-foreground">
              Modern Journal Systems
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              A customizable academic journal platform
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">For Authors</h4>
            <ul className="space-y-2">
              <li><Link href="/submit" className="text-sm text-muted-foreground hover:text-foreground">Submit Manuscript</Link></li>
              <li><Link href="/guidelines" className="text-sm text-muted-foreground hover:text-foreground">Author Guidelines</Link></li>
              <li><Link href="/ethics" className="text-sm text-muted-foreground hover:text-foreground">Publication Ethics</Link></li>
              <li><Link href="/fees" className="text-sm text-muted-foreground hover:text-foreground">Publication Fees</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Journal Info</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About the Platform</Link></li>
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/documentation" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with the latest features and news
            </p>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="justify-start">Subscribe to Updates</Button>
              <Button variant="outline" size="sm" className="justify-start">Contact Support</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MJS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
