const Home = (props) => {
  return (
    <div>
      <div className="container mx-auto h-full text-center my-36">
        <span className="text-[70px] md:text-[100px]">Struck</span>
        <span>Industries</span>
        <h2 className="font-bold">Welcome to Struck Industries</h2>
        <h1 className="my-5 font-bold text-blue-900 md:text-[20px]">
          {props.name ? "Hi " + props.name + "!" : " "}
        </h1>
      </div>
    </div>
  );
};

export default Home;
