import { Box, ThemeWrapper } from "retro-ui";
import bannerCat from "assets/banner.jpeg";
const Header = () => {
  return (
    <div>
      <p className="text-7xl text-center h-32 mt-16 text-blue-900">
        What is Stray Cat NFT Collection?
      </p>
      <div className="flex justify-center my-16">
        <ThemeWrapper>
          <Box className="w-2/3 h-64 ">
            Stray Cat Collection is a digital art collection. It is an NFT
            project on Etheruem that contains 205 unique NFT photos of each
            stray cat. It is unique (1/1 Edition), each one is 100% yours and
            cannot be duplicated or destroyed. Each cat is divided into levels
            as follows.
            <br />
            RARITY : ★★★ (47 / 168) ★★★★ (8/ 28) ★★★★★ (1/ 7) ★★★★★★ (0/2) Stray
            cats have the ability to attract allies. People with stray cats in
            the collection Chance to get a stray cat (special) Owners of cats in
            pairs (male and female) Chance to get a stray kitten * Random
            giveaway once a month until the end of the collection.
          </Box>
        </ThemeWrapper>
      </div>
      <img className="w-screen" src={bannerCat} alt="bannerCat" />
    </div>
  );
};

export default Header;
