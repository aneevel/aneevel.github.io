import React from "react"

const Contact = () => {
    return (
        <footer id="contact"
            className="pt-4 mx-auto w-full container flex flex-col"
        >
            <h3
                className="pl-12 text-4xl font-bold"
            >
                Want to get in touch?
            </h3>
            <p
                className="pl-12 pt-12 w-2/3"
            >
                Getting in touch with me is easy! Whether you have 
                questions regarding my projects, want to contact me 
                for freelance work or a job offer, or simply want to chat
                about my various interests, please feel free to send me a
                message via email or social media.
            </p>
            <a 
                className="pl-12 mt-6 block text-red-500 hover:text-red-800 transition-colors duration-300 ease-out"
                href="mailto:aneevel15@gmail.com"
            >
                aneevel15@gmail.com
            </a>
        </footer>
    )
}

export default Contact;