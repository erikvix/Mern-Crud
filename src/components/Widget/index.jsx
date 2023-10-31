import "./Widget.css";
import { WidgetBox } from "@/components/WidgetBox";
const navLinks = [{
  type: "dashboard",
  text: "Dashboard",
  pathName: "/dashboard"
},
{
  type: "users",
  text: "UserList",
  pathName: "/" 
}
];
const Widget = () => (
  <section className="widget-container">
    <div className="widget-items">
      {
        navLinks.map((link, index) => (
          <WidgetBox
            key={index}
            type={link.type}
            pathName={link.pathName}
          >
            {link.text}
          </WidgetBox>
        ))
      }
    </div>
  </section>
);

export default Widget;
