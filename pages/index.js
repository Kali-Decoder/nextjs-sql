import { Button } from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mt-5"  >
        <div className="d-flex">
          <Button size="lg" >
            <Link href="/register">Signup</Link>
          </Button>

          <Button size="lg" className="mx-3">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
