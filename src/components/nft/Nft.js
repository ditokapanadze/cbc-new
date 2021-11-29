import React from "react";
import "./nft.css";

function Nft() {
  return (
    <section className="about__nfts">
      <p style={{ fontSize: "34px", color: "rgb(245, 237, 237)" }}>
        About Nfts
      </p>
      <div className="aboutNft__container">
        <div style={{ marginRight: "30px" }}>
          <span style={{ color: "rgb(245, 237, 237)" }}>What are Nfts?</span>
          <p>
            NFT stands for a non-fungible token, which means that hidden in
            those quirky artworks, there is a totally unique and
            non-interchangeable unit of data stored on a digital ledger that
            uses blockchain technology to establish proof of ownership. NFTs are
            collectable digital assets that hold value, just like how physical
            art holds value, so do NFTs.{" "}
          </p>
        </div>
        <div>
          <span style={{ color: "rgb(245, 237, 237)" }}>
            Why should you own Nfts?
          </span>
          <p>
            When you buy an NFT, you’re paying for a token that represents a
            unique item. In other words, you’re paying for an extremely small
            digital record (likely only a few bytes in size, which often
            contains a URL or a serial number) that’s sent to your address on
            the blockchain. That’s it. Having ownership of this token means you
            can prove that you own a specific item and that the item you own is
            authentic—kind of like a certificate of authenticity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nft;
