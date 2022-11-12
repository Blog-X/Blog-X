import React, { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BcBlogs.module.css";
import { Star, Copy, MessageCircle } from "@web3uikit/icons";
import { BiTransfer } from "react-icons/bi";

const style = {
    blogs: `bg-[#fff] text-[#15202b] p-4 rounded-lg shadow-md text-left mt-4 flex flex-col`,
    profile: `flex items-center flex-row p-2`,
    profilechars: `flex-1 text-md font-bold`,
    engage: `flex flex-row justify-between items-center pt-4 pb-1 hower:shadow-md`,
    blogText: `text-md font-bold`,
};

const Post = forwardRef(
    ({ displayName, text, personal, onClick }, ref) => {

        return (
            <div key={blog._id} className={style.blogs}>
                <div>
                    <div className={style.profile}>
                        <div className="flex-shrink-0">
                            <Image
                                className="rounded-full"
                                src={
                                    "/pfp1.png"
                                }
                                alt=""
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className={style.profilechars}>
                            <p className="font-bold">{displayName}</p>
                            <p className="text-gray-500">
                                {displayName.slice(0, 10) +
                                    "...." +
                                    displayName.slice(-4)}
                            </p>
                        </div>
                    </div>
                    <div className={style.blogText}>
                        <Link href={"/blog/" + blog.id} key={blog.id}>
                            <div className={styles.blog_text}>
                                {" "}
                                {text}{" "}
                            </div>
                        </Link>
                    </div>
                    <div className={style.engage}>
                        <div className="flex flex-row gap-2">
                            <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div className="flex items-center gap-1">
                                <MessageCircle className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="flex items-center gap-1">
                                <BiTransfer className="w-5 h-5 text-green-400" />
                            </div>
                        </div>
                        <div
                            className="flex items-center gap-1"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    displayName
                                );
                                alert("Copied to clipboard!");
                            }}
                        >
                            <Copy />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;