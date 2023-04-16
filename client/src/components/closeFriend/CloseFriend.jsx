import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PUBLIC_FOLDER
      : process.env.REACT_APP_LOCAL_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
