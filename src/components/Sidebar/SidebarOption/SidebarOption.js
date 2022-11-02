import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../../../firebase";


function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    db.collection("rooms").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("/title/");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
    //const { roomId } = useParams();

    if (channelName) {
      
      db.collection("rooms").add({
        name: channelName,
      });

      
      
      
      
      
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption-channel">
          <span className="sidebarOption-hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
