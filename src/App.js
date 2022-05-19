import "./styles.css";
import NavbarLogo from "./components/logo";
import NavbarLinks from "./components/links";
import NavbarButton from "./components/button";

export default function App() {
  var info = [{ title: "Services" }, { title: "Projects" }, { title: "About" }];
  return (
    <>
      <div className="container">
        <NavbarLogo />
        {info.map((user) => (
          <div key={user.name}>
            <NavbarLinks {...user} />
          </div>
        ))}
        <NavbarButton />
      </div>
    </>
  );
}
