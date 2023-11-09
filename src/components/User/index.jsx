import "@/components/User/User.css";

const User = () => (
  <div className="user-container">
    <i>
      <box-icon color="#fff" id="bell" type="solid" name="bell"></box-icon>
    </i>
    <div>
      <box-icon
        color="#fff"
        id="user"
        name="user-circle"
        type="solid"
      ></box-icon>
    </div>
    <div className="user-box">
      <h3>User.name</h3>
      <p className="paragraph">email@gmail.com</p>
    </div>
    <i>
      <box-icon id="arrow" name="chevron-down" color="#ffffff"></box-icon>
    </i>
  </div>
);

export default User;
