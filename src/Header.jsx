import user from "./img/cart.png";
export const Header = () => {
  return (
    <div className="header">
      <h2>MNTN</h2>
      <ul>
        <li>Equipment</li>
        <li>About us</li>
        <li>Blog</li>
      </ul>
      <div>
        <img
          src={user}
          alt="user icon"
        />
        Account
      </div>
    </div>
  );
};
