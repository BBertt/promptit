import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI-Powered Prompts Made For You</span>
      </h1>
      <p className="desc text-center">
        An AI tool that helps to create prompts for better AI results.
      </p>

      <Feed />
    </section>
  )
}

export default Home;