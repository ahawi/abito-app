import "./Header.css";

export const Header = () => {
  return (
    <header className="header container">
      <a href="#!" className="header__logo logo">
        <img
          src="/images/logo.svg"
          alt="Abito"
          className="logo"
          width="91"
          height="28"
          loading="lazy"
        />
      </a>
      <div className="header__right-menu">
        <a href="#!" className="header__login">
          Вход и регистрация
        </a>
        <button className="header__button button">Подать объявление</button>
      </div>
    </header>
  );
};
