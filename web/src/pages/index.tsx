import { getAccessToken, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Hello World. I'm Veras!</h1>
      <h2>This is the FrontEnd application</h2>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const token = getAccessToken(req, res);
  
  console.log(token);
  return {
    props: {},
  }
}