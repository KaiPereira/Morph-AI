// Libraries
import Link from "next/link"

// Functions
import { logout } from "../../api/client/authentication"

type NavProps = {
    type?: "small" | "big"
}

const Nav = ({
    type="big"
}: NavProps) => {
    return (
        <nav>
            <div className={`nav-container nav-${type}`}>
                <Link href="/">
                    <img src="/branding/Typographical Logo.svg" alt="logo" className="nav-logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link href="/courses">Courses</Link></li>
                    <li><a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">Community</a></li>
                </ul>
                <div className="nav-profile">
                    <img className="nav-profile-img" src="/images/Profile Image.png" alt="User Profile" />
                    <img src="/icons/angle.svg" className="nav-profile-icon" alt="Angle Icon" />
                    <div className="dropdown">
                        <div className="dropdown-container">
                            <Link href="/">Dashboard</Link>
                            <button onClick={logout}>Sign out!</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav