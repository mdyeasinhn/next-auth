import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session)
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
          <h1 className="text-4xl text-center mt-10">Loged-in user email {session?.user?.email}</h1>
          <Image
     
            src={session?.user?.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mt-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
