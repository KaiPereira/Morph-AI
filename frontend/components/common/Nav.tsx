// Libraries
import Link from "next/link"
import Image from "next/image"

// Functions
import { logout } from "../../api/client/authentication"

// Components
import Button from "../subcomponents/Button"

type NavProps = {
    type?: "small" | "big",
    signedIn?: boolean
}

const Nav = ({
    type="big",
    signedIn=true
}: NavProps) => {
    return (
        <nav>
            <div className={`nav-container nav-${type}`}>
                <Link href="/">
                    <img src="/branding/Typographical Logo.svg" alt="logo" className="nav-logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link href="/">Courses</Link></li>
                    <li><a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">Community</a></li>
                </ul>
                { signedIn ?
                <div className="nav-profile">
                    <Image className="nav-profile-img" src="/images/Profile Image.png" alt="User Profile" width="43" height="43" />
                    <img src="/icons/angle.svg" className="nav-profile-icon" alt="Angle Icon"/>
                    <div className="dropdown dropdown-desktop">
                        <div className="dropdown-container">
                            <Link href="/">Dashboard</Link>
                            <button onClick={logout}>Sign out!</button>
                        </div>
                    </div>
                    <div className="dropdown dropdown-mobile">
                        <div className="dropdown-container">
                            <Link href="/">Dashboard</Link>
                            <a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">Community</a>
                            <button onClick={logout}>Sign out!</button>
                        </div>
                    </div>
                </div>
                :
                <div className="nav-buttons">
                    <Button
                        type="light"
                        link="/login"
                    >
                        Login
                    </Button>
                    <Button
                        type="black"
                        link="/register"
                    >
                        Get Started!
                    </Button>
                </div>
                }
            </div>
        </nav>
    )
}

export default Nav