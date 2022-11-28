import React from "react";
import Image from "next/image";

import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1920}
          height={300}
          className={Style.banner_img_img}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1920}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
