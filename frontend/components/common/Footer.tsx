// States
import { useEffect, useState } from "react"

// Libraries
import Link from "next/link"

const FooterColumn = ({
    header,
    children
}: any) => {
    return (
        <div className="footer-content-column">
            <p className="footer-column-header">{header}</p>
            <div className="footer-column-content">
                {children}
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-branding">
                    <img src="/branding/Typographical Logo White.svg" alt="Morph Logo" />
                    <p>Harness the Power of Modern AI with Hands-On Projects on Morph.</p>
                </div>
                <div className="footer-content">
                    <FooterColumn 
                        header="Product"
                    >
                        <Link href="/">Dashboard</Link>
                        <Link href="/courses">Courses</Link>
                    </FooterColumn>
                    <FooterColumn 
                        header="Resources"
                    >
                        <a href="mailto:morphai.xyz@gmail.com" target="_blank" rel="noreferrer">Support</a>
                    </FooterColumn>
                    <FooterColumn 
                        header="Social"
                    >
                        <a href="https://twitter.com/_MorphAI" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">Discord</a>
                        <a href="https://www.instagram.com/_morphai/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.youtube.com/channel/UCKqVMnGYuZHZpgZqQy2HW4Q" target="_blank" rel="noreferrer">Youtube</a>
                    </FooterColumn>
                    <FooterColumn 
                        header="Legal"
                    >
                        <a href="mailto:morphai.xyz@gmail.com" target="_blank" rel="noreferrer">Contact</a>
                    </FooterColumn>
                </div>                
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© KaiPereira 2023. All Rights Reserved</p>
                    <div className="footer-socials">
                        <a href="https://twitter.com/_MorphAI" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://discord.gg/fMM8SdJ49a" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-discord"></i>
                        </a>
                        <a href="https://www.instagram.com/_morphai/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCKqVMnGYuZHZpgZqQy2HW4Q" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer