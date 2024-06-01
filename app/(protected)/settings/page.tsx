import { auth, signOut } from "@/auth";

type Props = {};
const SettingPage = async ({}: Props) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingPage;
