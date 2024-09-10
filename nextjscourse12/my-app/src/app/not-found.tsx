import Link from "next/link";

export default function NotFound() {
    return <div>
        <div>Page is not found !</div>
        <Link href={'/'}>Please click here to visit the home</Link>
    </div>
    
}