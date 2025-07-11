import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function Hero() {
    return (
        <Navbar fluid style={{padding: "2rem", position: "fixed", width: "100%", paddingLeft: "2rem", paddingRight: "2rem", zIndex: "100", backgroundColor: "rgba(44, 43, 43, 0.85)" }}>
            <NavbarBrand as={Link} href="#">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">LOGO</span>
            </NavbarBrand>
            <NavbarToggle style={{color: "white"}} />
            <NavbarCollapse  >
                <NavbarLink href="#" active style={{color: "white"}}>About</NavbarLink>
                <NavbarLink as={Link} href="#" style={{color: "white"}}>Education</NavbarLink>
                <NavbarLink href="#" style={{color: "white"}}>Certifications</NavbarLink>
                <NavbarLink href="#" style={{color: "white"}}>Skills</NavbarLink>
                <NavbarLink href="#" style={{color: "white"}}>Projects</NavbarLink>
                <NavbarLink href="#" style={{color: "white"}}>Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}