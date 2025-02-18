const Header = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <header className="max-w-[1200px] w-full mx-auto p-5 md:p-10  ">
        <nav className="flex justify-start items-center text-primary-900">
          <div>
            <p className=" text-2xl font-bold">BOT-O-MAT</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
