"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const logedIn = false;
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [dropDown, setdropDown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, []);
    // useEffect(async () => {
    //     setProviders(await getProviders());
    // },[]);
    
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href={"/"} className="flex gap-2 flex-center">
            <Image
            src={"/assets/images/stroke.svg"}
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"/>
            <p className="logo_text">InspireNote</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href={"/create-prompt"} className="black_btn">
                        Create Post
                    </Link>

                    <button type="button" className="outline_btn" onClick={signOut}> Sign Out</button>
                    
                    <Link href={"/profile"}>
                        <Image 
                        src={session?.user?.image}
                        alt="Profile" 
                        width={37} 
                        height={37}
                        className="rounded-full"/>
                    </Link>
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}>
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {session?.user ? (
                <div className="flex">
                        <Image 
                        src={session?.user.image} 
                        alt="Profile" 
                        width={37} 
                        height={37}
                        className="rounded-full"
                        onClick= {() => setdropDown((prev) => !prev)}/>
                    {dropDown && (
                        <div className="dropdown">
                            <Link 
                            href={"/profile"}
                            className="dropdown_link"
                            onClick={() => setdropDown(false)}>
                            My Profile
                            </Link>
                            <Link 
                            href={"/create-prompt"}
                            className="dropdown_link"
                            onClick={() => setdropDown(false)}>
                            Create Prompt
                            </Link>
                            <button type="button" className="mt-5 w-full black_btn" onClick={() => {signOut(); setdropDown(false)}}>Sign Out</button>
                        </div>
                    )}
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}>
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav