import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MdKeyboardVoice } from "react-icons/md";
import logo from "../Images/logo.png";

function MidSection() {
    const userSearchInput = useRef();
    const [userInput, userInputHandler] = useState(false);
    const [currentUserInput, currentUserInputHandler] = useState("");

    //Function changes state based on the staus of the user input
    function handleChange() {
        let input = userSearchInput.current.value; //Current user input
        if (input === "") {
            userInputHandler(false);
        } else {
            currentUserInputHandler(input);
            userInputHandler(true);
            input = "";
        }
    }
    return (
        <main>
            <div className="container">
                <div className="mid-section">
                    <div className="search-region">
                        <div className="image-search">
                            {/* {If userInput is false logo is rendered otherwise the user input} */}
                            {userInput === false ? (
                                <img src={logo} alt="Side hustle logo" />
                            ) : (
                                <p>{currentUserInput}</p>
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
                                    onChange={() => handleChange()}
                                />
                            </form>
                            <span>
                                <MdKeyboardVoice />
                            </span>
                        </div>
                    </div>
                    <div className="buttons">
                        <button>Google Search</button>
                        <button>I'm Feeling Lucky</button>
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
