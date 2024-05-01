"use client";

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";

const socials = [
    {
        name: "Facebook",
        button: FacebookShareButton,
        icon: FacebookIcon,
    },
    {
        name: "LinkedIn",
        button: LinkedinShareButton,
        icon: LinkedinIcon,
    },
    {
        name: "Twitter",
        button: TwitterShareButton,
        icon: TwitterIcon,
    },
    {
        name: "Reddit",
        button: RedditShareButton,
        icon: RedditIcon,
    },
    {
        name: "Pinterest",
        button: PinterestShareButton,
        icon: PinterestIcon,
    },
    {
        name: "Email",
        button: EmailShareButton,
        icon: EmailIcon,
    },
];

export default function SocialMediaShare() {
    return (
        <div className="flex gap-2">
            {socials.map((social) => (
                <div key={social.name} title={social.name}>
                    <social.button url="https://khana-khazana.vercel.app">
                        <social.icon size={32} round={true} />
                    </social.button>
                </div>
            ))}
        </div>
    );
}
