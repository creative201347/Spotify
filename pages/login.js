import { getProviders, signIn } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="provider-logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-lg"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
