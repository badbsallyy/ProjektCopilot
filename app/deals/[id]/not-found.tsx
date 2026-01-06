import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 space-y-4">
      <h2 className="text-3xl font-bold">Deal nicht gefunden</h2>
      <p className="text-muted-foreground">
        Der gesuchte Deal existiert nicht oder wurde entfernt.
      </p>
      <Link href="/">
        <Button>Zurück zur Startseite</Button>
      </Link>
    </div>
  );
}
