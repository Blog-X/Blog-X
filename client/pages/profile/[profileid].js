import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import { defaultImgs } from "../../components/defaultImgs";
import Blogs from "../../components/Blogs";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { CiGlass } from "react-icons/ci";

const styles = {
    wrapper:
        "flex justify-center items-center h-screen w-screen bg-[#0f172a] text-white overflow-x-hidden",
    columns:
        "flex justify-between h-screen w-full text-center  text-white gap-0.5",
    sides: "basis-1/4 bg-slate-900 h-full overflow-y-auto",
    side2: "basis-3/4 bg-slate-900 h-full flex flex-row overflow-x-hidden  ",
    feed: "basis-2/3 bg-slate-800 h-full overflow-x-hidden overflow-y-auto px-4 no-scrollbar",
    widgets: "basis-1/3 bg-slate-900 h-full overflow-x-hidden overflow-y-auto",
    banner: "h-64 w-full bg-slate-900",
    pfpContainer:
        "w-full  h-1/3 bg-slate-900 border-b-2 border-sky-500 rounded-b-2xl mt-2",
    profilePFP:
        "w-32 h-32 rounded-full border-4 border-white object-cover bg-blend-multiply ml-2 -mt-10",
    profileName: "w-1/4 text-2xl font-bold ml-2 mt-2",
    profileWallet: "w-1/4 text-sm font-light ml-2 ",
    profileEdit:
        " text-bold  border-2 border-sky-500 rounded-full p-3  m-2  float-right  transform -translate-y-10 -mt-20 mr-5",
    profileBio: "w-1/4 ext-sm ml-1 pt-2 pb-1",
    profileTabs:
        "text-sm w-full font-bold bg-slate-900 overflw-x-hidden overflow-y-auto",
    profileTab: "no-scrollbar h-full text-sm font-bold",
};

export default function ProfileSlug() {
    const { Moralis, isInitialized, user } = useMoralis();
    const [currentUser, setCurrentUser] = useState();
    const router = useRouter();
    const { asPath } = useRouter();
    console.log(asPath && asPath.split("/")[2]);

    const currentId = asPath.split("/")[2];


    useEffect(() => {
        const getUser = async () => {
            if (isInitialized) {
                console.log("Moralis initialized");
                // setCurrentUser(Moralis.User.current());
                const Users = Moralis.Object.extend("User");
                const query = new Moralis.Query(Users);
                const user = await query.get(currentId);
                setCurrentUser(user);
                console.log("Current user: ", currentUser);
            } else {
                router.push("/user-profile");
            }
        }
        getUser();
    }, []);
    // const currentUser = Moralis.User.current();
    // console.log(currentUser);

    if (!currentUser) {
        return (
            <>
                <Head>
                    <title>Blog-x</title>
                    <meta name="description" content="Blog-x" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Navbar />
                    <div className={styles.wrapper}>
                        <div className={styles.columns}>
                            <div className={styles.sides}>
                                <Sidebar />
                            </div>
                            <div className="flex justify-center items-center">
                                <div
                                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                                    role="status"
                                >
                                    <span className="visually-hidden">📍</span>
                                </div>
                            </div>

                            <div className={styles.widgets}>
                                <Widgets />
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <title>Blog-x</title>
                    <meta name="description" content="Blog-x" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Navbar />

                </main>
            </>
        );
    }
}
