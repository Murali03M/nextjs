import Cart from "@/components/cart";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function Page() {



      const session =await getServerSession(authOptions);
 if (!session) {
        redirect("/api/auth/signin"); // Redirect to the login page
      } 

  return (
    <div>
      {session ? <Cart /> : <div>Please login to see the cart items</div>}
    </div>
  );
}


