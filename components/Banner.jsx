import React from "react";

const Banner = (props) => {
  const { mobileSrc, tabletSrc, desktopSrc, alt, bannerClass } = props;
  return (
    <div className="banner">
      <div className="banner-title">
        <h1>My banner</h1>
      </div>
      <picture>
        <source srcset={mobileSrc} media="(max-width: 639px)" />
        <source
          srcset={tabletSrc}
          media="(min-width: 640px) and (max-width: 768px)"
        />
        <source srcset={desktopSrc} media="(min-width: 769px)" />
        <img className={bannerClass} src="large.jpg" alt={alt} />
      </picture>
    </div>
  );
};

export default Banner;
