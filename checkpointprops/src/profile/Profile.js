import PropTypes from "prop-types";

const Profile = ({ fullname, work, bio, children, Notify }) => {
  return (
    <div style={{ color: "pink" }}>
      {Notify}
      My name is {fullname} <br /> i work as {work}.
      <p style={{ color: "orange" ,fontSize:50}}>
        About me:
        <br />
        {bio}
      </p>
      {children}
    </div>
  );
};

Profile.defaultProps = {
  fullname: "Mohamed Amine ",
  work: "Nothing",
  bio: "In a few words :'Just a normal guy'",
};
Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  work: PropTypes.string,
};
export default Profile;
