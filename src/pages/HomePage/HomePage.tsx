import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="info">
        <header>
          <img src="images/logo.png" alt="" />
        </header>
        <h2> CHECK-IN </h2>
        <p>
          The entirety of humankind's existence has led to this moment. We have
          set foot on the Martian surface. Astro Factory - Mars Rock NFT Mining
          Mission is live. RESTRICTED ACCESS - Mothership Ticket NFT required.
          Mission ends Jun 17th, 2022.
        </p>
        <p>We boldly go where no Mining Mission has gone before. Join us.</p>
        <p>Select Mining Experience:</p>
        <div>
          <button>Log-In</button>
          <button>Sign-Up</button>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
