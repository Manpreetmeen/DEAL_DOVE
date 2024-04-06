import Link from "next/link";
export default function Navbar() {
  return (
    <main>
      <div className="flex justify-between">
          <div className="content p-8 cursor-pointer">
          <h2>DEALDOVE</h2>
          <h2>DEALDOVE</h2>
          </div>
        <ul className="flex justify-start py-6">
          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            <Link href={"/products"}> Products List</Link>
          </li>
          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            <Link href={"/addproduct"}> Add Products </Link>
          </li>

          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            <Link href={"/products"}>Update Products</Link>
          </li>
        </ul>
        <ul className="flex justify-end p-6 ">
          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            Profile
          </li>
          <li className="px-5 cursor-pointer opacity-60 hover:opacity-100">
            Log Out
          </li>
        </ul>
      </div>
    </main>
  );
}
