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
            <div
                className="pl-10 pt-2 flex items-center text-red-300"
            >
                <a href="https://github.com/aneevel" rel="noopener noreferrer" target="_blank">
                    <svg class="w-6 h-6 lg:w-8 lg:h-8 fill-current transform transition-transform
                        duration-100 ease-out hover:scale-125" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm5.345 14.345a7.538 7.538 0 01-3.1
                            1.875v-1.349c0-.709-.243-1.23-.729-1.564a7.92 7.92 0
                            00.84-.123c.274-.059.544-.135.808-.229.284-.1.539-.218.765-.356.24-.149.458-.33.65-.536.21-.222.386-.474.523-.747.14-.278.252-.612.334-1.002.082-.39.123-.819.123-1.288
                            0-.908-.296-1.68-.888-2.32.27-.703.24-1.468-.087-2.294l-.22-.026c-.153-.018-.427.047-.822.193-.396.147-.84.387-1.332.72a8.085
                            8.085 0 00-2.17-.29 7.93 7.93 0 00-2.163.29 7.53 7.53 0 00-.883-.522
                            4.506 4.506 0 00-.668-.281 2.292 2.292 0 00-.743-.101.562.562 0
                            00-.087.017c-.329.832-.358 1.597-.089 2.294-.591.639-.887 1.412-.887
                            2.32 0 .469.041.899.123 1.288.082.39.193.724.334
                            1.002.14.278.315.527.523.747.192.207.41.387.65.536.242.145.498.265.765.356.284.1.554.176.809.229.255.052.534.093.839.123-.48.328-.72.85-.72
                            1.564v1.375a7.536 7.536 0 01-3.188-1.901A7.534 7.534 0 014.441 12a7.536
                            7.536 0 012.214-5.345A7.535 7.535 0 0112 4.441a7.537 7.537 0 015.345
                            2.214A7.536 7.536 0 0119.559 12a7.535 7.535 0 01-2.214 5.345z" class="__web-inspector-hide-shortcut__">
                        </path>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/alec-neevel" rel="noopener noreferrer" target="_blank">
                    <svg class="w-6 h-6 lg:w-8 lg:h-8 fill-current transform transition-transform
                        duration-100 ease-out hover:scale-125" viewBox="0 0 24 24">
                        <path d="M19.372 3H4.628C3.73 3 3 3.729 3 4.628v14.744C3 20.27 3.729 21 4.628
                            21h14.744C20.27 21 21 20.271 21 19.372V4.628C21 3.73 20.271 3 19.372
                            3zM8.57 18.542a.474.474 0 01-.474.474H6.08a.474.474 0
                            01-.474-.474v-8.455c0-.262.212-.474.474-.474h2.017c.262 0
                            .474.212.474.474v8.455zM7.088 8.816a1.916 1.916 0 110-3.832 1.916 1.916
                            0 010 3.832zM19.11 18.58c0 .241-.195.436-.436.436h-2.164a.436.436 0
                            01-.436-.435v-3.966c0-.592.174-2.593-1.546-2.593-1.334 0-1.604
                            1.37-1.659 1.984v4.575c0 .24-.195.435-.435.435H10.34a.436.436 0
                            01-.436-.435v-8.532c0-.24.196-.436.436-.436h2.094c.24 0
                            .435.195.435.436v.738c.495-.743 1.23-1.316 2.795-1.316 3.466 0 3.446
                            3.238 3.446 5.017v4.093z">
                        </path>
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Contact;