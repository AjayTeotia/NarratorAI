import { SignUp } from "@clerk/nextjs";
import AuthHeader from "../../components/AuthHeader";

export default function Page() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] outfit-regular">
      <AuthHeader />

      <div className="my-10 flex items-center justify-center">
        <SignUp />
      </div>
    </div>
  );
}
