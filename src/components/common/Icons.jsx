const Icons = ({ icon, className = '', ...props }) => {
    const iconsList = {
        'instagram': (<svg className={`${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8 7.32423C16.8 8.44152 16.8 9.5585 16.8 10.6758C16.7932 10.7562 16.7817 10.8364 16.7808 10.9168C16.7707 11.6825 16.7533 12.4469 16.5882 13.2004C16.1577 15.1654 14.6836 16.4901 12.6772 16.6781C12.0066 16.7409 11.3308 16.7458 10.6575 16.7784C10.5922 16.7814 10.5277 16.7927 10.4628 16.8C9.48776 16.8 8.51276 16.8 7.53776 16.8C7.45762 16.7924 7.37779 16.7823 7.29736 16.7775C6.54874 16.7339 5.78976 16.7546 5.05333 16.6361C3.30534 16.3549 2.10335 15.3726 1.53815 13.669C1.30446 12.9649 1.24718 12.2318 1.2289 11.4945C1.22219 11.2419 1.2097 10.9893 1.19995 10.7367C1.19995 9.57892 1.19995 8.42111 1.19995 7.26329C1.2094 7.04118 1.21275 6.81845 1.2292 6.59664C1.26668 6.09664 1.27551 5.59147 1.35869 5.09879C1.68136 3.19023 2.75873 1.93004 4.65176 1.44315C5.15114 1.31457 5.68373 1.30726 6.20262 1.26461C6.64624 1.22804 7.0923 1.22043 7.53745 1.20001C8.51245 1.20001 9.48745 1.20001 10.4625 1.20001C10.5426 1.20763 10.6224 1.21768 10.7028 1.22256C11.4466 1.26552 12.2001 1.24572 12.9319 1.3618C14.7345 1.6476 15.9465 2.67043 16.4925 4.43275C16.7028 5.11098 16.7539 5.8145 16.771 6.52077C16.7774 6.78859 16.7902 7.05641 16.8 7.32423ZM8.88021 2.38829C7.78455 2.43491 6.55788 2.43826 5.34157 2.55313C4.14841 2.66586 3.2703 3.30601 2.79438 4.43336C2.53966 5.03633 2.46349 5.67983 2.45618 6.32577C2.4382 7.85896 2.42967 9.39275 2.44429 10.9259C2.45008 11.5481 2.48329 12.1767 2.57866 12.7906C2.8218 14.3561 4.02197 15.417 5.59598 15.4847C6.68128 15.5313 7.7681 15.5794 8.8537 15.5733C10.1221 15.566 11.3954 15.5584 12.6571 15.4442C13.9146 15.3302 14.8094 14.6328 15.2579 13.4241C15.4724 12.8461 15.5382 12.2382 15.5443 11.6282C15.5599 10.1152 15.5696 8.60179 15.5547 7.08901C15.5483 6.46166 15.5157 5.82822 15.4197 5.20909C15.1781 3.64818 13.9929 2.59487 12.4179 2.51626C11.2827 2.45959 10.1456 2.43308 8.88021 2.38829Z" fill="#111111" />
            <path d="M8.96918 12.8083C6.8714 12.8089 5.16089 11.0984 5.16089 9.00031C5.16089 6.90131 6.86958 5.19202 8.96857 5.19171C11.067 5.19141 12.7772 6.90101 12.7775 8.9997C12.7781 11.0975 11.0676 12.808 8.96918 12.8083ZM8.96644 6.41016C7.54172 6.41107 6.38025 7.57315 6.37994 8.99848C6.37964 10.4241 7.53989 11.5874 8.9643 11.5895C10.3963 11.5917 11.5618 10.4253 11.559 8.99299C11.5563 7.56888 10.3927 6.40955 8.96644 6.41016Z" fill="#111111" />
            <path d="M13.2006 3.97297C13.7073 3.97144 14.1199 4.38399 14.1177 4.89068C14.1159 5.39007 13.707 5.79865 13.2073 5.80018C12.7003 5.8017 12.289 5.38976 12.2905 4.88215C12.2924 4.38186 12.7 3.97449 13.2006 3.97297Z" fill="#111111" />
        </svg>
        ),
        'linkedin': (<svg className={`${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_51_833)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2176 7.44044C11.2284 6.27818 12.3717 5.68868 13.8172 5.75984C16.1688 5.87543 17.824 7.51259 17.943 10.0684C18.0474 12.3196 17.9733 14.5786 17.9894 16.8336C17.9933 17.3748 17.7399 17.577 17.2206 17.5639C16.5249 17.5463 15.8267 17.5303 15.1327 17.5708C14.4442 17.611 14.1824 17.3347 14.1942 16.6508C14.2213 15.1198 14.2046 13.5877 14.2016 12.0562C14.2007 11.6388 14.2059 11.2195 14.1732 10.8041C14.0727 9.51832 13.3182 8.74235 12.1997 8.75107C11.0501 8.75993 10.12 9.68384 10.0997 10.913C10.0701 12.7226 10.0879 14.5329 10.0841 16.3429C10.0815 17.5548 10.0805 17.5548 8.8839 17.5626C6.2964 17.5792 6.29738 17.5792 6.2964 14.9912C6.29542 12.3459 6.31468 9.69987 6.27615 7.05513C6.26504 6.28929 6.52112 5.98259 7.28471 6.05416C7.72628 6.09565 8.17501 6.0588 8.62079 6.06063C9.95082 6.06654 9.95082 6.06724 10.2176 7.44044ZM0.270197 11.7635C0.270197 10.177 0.299307 8.58977 0.2574 7.00451C0.238135 6.26313 0.521213 6.00649 1.23587 6.05051C1.92915 6.09298 2.62749 6.07441 3.32274 6.05965C3.84503 6.04882 4.08113 6.26145 4.07917 6.80074C4.06679 10.1407 4.0651 13.4803 4.07157 16.8203C4.07256 17.3549 3.84137 17.5753 3.31557 17.5642C2.56449 17.5481 1.81201 17.5422 1.06149 17.5671C0.485354 17.5864 0.268932 17.3402 0.275119 16.7732C0.2934 15.1034 0.281588 13.4332 0.281588 11.7634C0.278072 11.7635 0.274135 11.7635 0.270197 11.7635ZM2.13503 4.40393C0.913276 4.39873 0.00835359 3.55737 5.67133e-05 2.41887C-0.00838079 1.29977 0.925651 0.425649 2.1301 0.424805C3.44073 0.424102 4.32835 1.23185 4.32315 2.42027C4.31753 3.63049 3.45831 4.40913 2.13503 4.40393Z" fill="#111111" />
            </g>
            <defs>
                <clipPath id="clip0_51_833">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
        ),
        'facebook': (<svg className={`${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.32522 17L6.3 9.5625H3V6.375H6.3V4.25C6.3 1.3821 8.13866 0 10.7873 0C12.056 0 13.1465 0.0912369 13.4642 0.132016V3.12914L11.6273 3.12994C10.1868 3.12994 9.90786 3.79111 9.90786 4.76132V6.375H14L12.9 9.5625H9.90785V17H6.32522Z" fill="#111111" />
        </svg>
        ),
        'youtube': (<svg className={`${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.93472 2.91898C10.6645 2.98654 12.3945 3.04803 14.1237 3.12589C14.5312 3.14437 14.9397 3.19873 15.3417 3.27078C16.3169 3.44576 16.944 4.10742 17.1287 5.13618C17.3821 6.54711 17.433 7.97361 17.3852 9.40063C17.3517 10.3983 17.2559 11.3946 17.159 12.3888C17.0881 13.1169 16.7927 13.7366 16.1506 14.1507C15.7587 14.4035 15.3163 14.4769 14.8674 14.5244C13.1255 14.7081 11.3763 14.7498 9.62751 14.7411C7.86742 14.7321 6.10732 14.6791 4.34776 14.6221C3.7827 14.6039 3.21685 14.5313 2.65654 14.4492C1.69508 14.3085 1.0387 13.6485 0.839971 12.6572C0.641502 11.6672 0.595051 10.6619 0.565756 9.6569C0.527487 8.33439 0.568395 7.01372 0.735986 5.69992C0.773462 5.40512 0.823608 5.10953 0.89777 4.82212C1.12501 3.93983 1.84578 3.34547 2.80091 3.22565C4.44699 3.01927 6.10231 3.00185 7.75736 2.97387C8.14902 2.96727 8.54121 2.97282 8.93314 2.97282C8.93366 2.95487 8.93419 2.93692 8.93472 2.91898ZM7.30764 6.33703C7.30764 8.02718 7.30764 9.68936 7.30764 11.3761C8.7703 10.5339 10.2147 9.70203 11.6829 8.85669C10.215 8.01135 8.7732 7.18105 7.30764 6.33703Z" fill="#111111" />
        </svg>
        ),
        'twitter': (<svg className={`${className}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.176 1H16.9362L10.9061 7.77744L18 17H12.4455L8.09511 11.4066L3.11721 17H0.355445L6.80516 9.75077L0 1H5.69544L9.62786 6.11262L14.176 1ZM13.2073 15.3754H14.7368L4.8644 2.53928H3.22317L13.2073 15.3754Z" fill="#111111" />
        </svg>
        ),

    }
    return icon && iconsList[icon]
}

export default Icons