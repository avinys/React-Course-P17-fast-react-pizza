import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "disabled:cursor--not-allowed inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-sm text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 ";
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 text-sm transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
