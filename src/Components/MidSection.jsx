import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MdKeyboardVoice } from "react-icons/md";
import logo from "../Images/logo.jpg";

function MidSection() {
    const userSearchInput = useRef();
    const [userInput, userInputHandler] = useState(false);

    function handleChange() {
        let input = userSearchInput.current.value;
        if (input === "") {
            userInputHandler(false);
        } else {
            userInputHandler(true);
        }
    }
    return (
        <main>
            <div className="container">
                <div className="mid-section">
                    <div className="search-region">
                        <div className="image-search">
                            {userInput === false ? (
                                <img src={logo} alt="Side hustle logo" />
                            ) : (
                                <p>{userSearchInput.current.value}</p>
                            )}
                        </div>
                        <div className="search-input">
                            <span onClick={() => handleChange()}>
                                <HiSearch />
                            </span>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <input
                                    type="text"
                                    ref={userSearchInput}
                                    onSubmit={() => handleChange()}
                                />
                            </form>
                            <span>
                                <MdKeyboardVoice />
                            </span>
                        </div>
                    </div>
                    <div className="languages">
                        <p>Google offered in:</p>
                        <ul>
                            <li>Hausa</li>
                            <li>Ewe</li>
                            <li>Akan</li>
                            <li>Ga</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default MidSection;
