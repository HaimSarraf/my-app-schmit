const Footer = () => {
  const openHour = 12;
  const closeHour = 22;
  const nowHour = new Date().getHours();
  const isOpen = nowHour >= openHour && nowHour <= closeHour;

  return (
    <div className="text-2xl font-extrabold lg:text-6xl lg:font-light ">
      {isOpen ? (
        <div className=" font-mono text-gray-600">
          We're So Willing To See You Here
          <span className="text-pink-400">{" :) "}</span>
        </div>
      ) : (
        <div className="font-mono text-gray-600">
          Sorry, We're Close Right Now{" "}
          <span className="text-yellow-500">{" :( "}</span>
        </div>
      )}
    </div>
  );
};
export default Footer;
