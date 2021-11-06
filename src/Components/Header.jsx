import React from "react";
import "../index.css";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
    return (
        <main>
            <div className="container">
                <div className="header">
                    <ul>
                        <li>Gmail</li>
                        <li>Images</li>
                        <li>
                            <span>
                                <CgMenuGridO />
                            </span>
                        </li>
                        <li>+</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default Header;
