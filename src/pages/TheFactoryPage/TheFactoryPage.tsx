import Header from "../../components/HeaderComponent/Header";
import TheFactoryPageStyled from "./TheFactoryPageStyled";

const TheFactoryPage = (): JSX.Element => {
  return (
    <TheFactoryPageStyled>
      <Header />
      <section className="section1">
        <div className="hola">
          <h2>THE FACTORY</h2>

          <p>
            Astro Factory is a trans-dimensional manufacturing plant. Our Astro
            Factory uses NFTs to build new NFTs.
          </p>
          <p>
            This is your opportunity to make an NFT your own. The Component NFTs
            will be claimed randomly, but how you combine them to mint a
            Completed Astro is entirely up to you. We are putting the power in
            your hands. You, the community, will decide -out of 113,500+
            potential combinations- which 1,000 Astros the world needs.
          </p>
          <p>Build the Astro you desire, the Astro that defines you.</p>

          <button> ASSEMBLE AN ASTRO </button>
        </div>

        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f"
            alt="hola"
          />
        </div>
      </section>

      <section className="section2">
        <h2>ASSEMBLING YOUR ASTRO</h2>

        <div className="adeu">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO.png?alt=media&token=5314d5ea-94ef-41ae-8238-5e38879ffd08"
            alt="hola"
          />
          <p>+</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT.png?alt=media&token=bea70d12-3e3f-4dcf-aac6-d5303d0bdb23"
            alt="hola"
          />
          <p>+</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ROCKET.png?alt=media&token=e1c642db-2806-4d43-aa9e-c6b8c6a1e4f5"
            alt="hola"
          />
        </div>

        <p>
          A Completed Astro is composed of three Component NFTs: an Astro
          itself, a Naut Astro, and a Rocket Astro. An Astro, a Naut Astro, and
          a Rocket Astro may be combined to form a Completed Astro NFT. The
          Component NFTs are burned, and a Perfect Astro NFT is minted. Our
          Astro Factory has enough inventory to assemble 1,000 Completed
          Rockets.
        </p>
      </section>
      <section className="section3">
        <div className="perfect">
          <h2>PERFECT ASTRO</h2>
          <p>
            A Perfect Astro is singular in its branding, composed of three
            matching Component NFTs - total perfection.
          </p>

          <div className="adeu">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO.png?alt=media&token=7cef6c2a-6169-470c-80b7-10e2a2a948f8"
              alt="VUE ASTRO"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT.png?alt=media&token=4b03982b-30c6-47e7-aa2d-0600ee3972e8"
              alt="VUE NAUT"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ROCKET.png?alt=media&token=e1c642db-2806-4d43-aa9e-c6b8c6a1e4f5"
              alt="VUE ROCKET"
            />
          </div>

          <div className="astronaut">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO_2.png?alt=media&token=38211c53-319e-44d3-a007-cdecb9853c91"
              alt="VUE ASTRO"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6"
              alt="VUE NAUT"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ROCKET_2.png?alt=media&token=6b162e07-11a6-450f-9957-0c274808ee2a"
              alt="VUE ROCKET"
            />
          </div>
        </div>
        <div className="perfect">
          <h2>MUTANT ASTRO</h2>
          <p>
            A Mutant Astro is a disparate clusterfuck of branding, composed of
            unmatching Component NFTs.
          </p>

          <div className="adeu">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO.png?alt=media&token=5314d5ea-94ef-41ae-8238-5e38879ffd08"
              alt="hola"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f"
              alt="REACT NAUT"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET.png?alt=media&token=9a7568ac-361a-43c9-8941-d310281f54e4"
              alt="ANGULAR ROCKET"
            />
          </div>

          <div className="astronaut">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a"
              alt="JQUERY ASTRO"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00"
              alt="REACT NAUT"
            />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937"
              alt="ANGULAR ROCKET"
            />
          </div>
        </div>
      </section>
    </TheFactoryPageStyled>
  );
};

export default TheFactoryPage;
