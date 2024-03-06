"use client";

import Link from "next/link";

import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Navigation() {
  const router = useRouter();
  const { useSessionUser } = useSession();
  const [ boleanUser, setBoleanUser ] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
        <img src="https://www.unbosque.edu.co/sites/default/files/logo.png" alt="Bootstrap"  height="50"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navigation;
