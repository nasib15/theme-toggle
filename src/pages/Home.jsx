import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import UserCard from "../components/UserCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Home Page | Incubator</title>
      </Helmet>
      <Banner />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">
            Featured Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item) => (
              <UserCard key={item.id} item={item}></UserCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
