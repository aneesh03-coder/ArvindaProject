import React, { useEffect, useState } from "react";
import axios from "axios";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {useDispatch,useSelector} from "react-redux";
import {selectUserInfo} from "../reducers/userInfo";
import RenderData from "./RenderData";
import "./FeedbackSummary.css";
const FeedbackSummary = () => {
  let userInfo=useSelector(selectUserInfo);
  const dispatch=useDispatch();
  const [response, setResponse] = useState([]);
  useEffect(() => {
    //Axios call
    //  axios.get("http://localhost:5000/feedback_summary").then((res) => {
    //    console.log("successfully received ",res  );
    //    setResponse(res.data);
    //  });
   

    dispatch({type:"FETCH_USER_INFO"});    
    // setResponse(userInfo);
    
  }, []);
  const showModal=(id)=>{
    console.log("This is working fine"+id);
    let row=document.getElementById(id);
    document.getElementById("edit__userName").value=row.cells[0].innerHTML;
    document.getElementById("edit__courseName").value=row.cells[1].innerHTML;
    document.getElementById("edit__rating").value=row.cells[2].innerHTML;
    document.getElementById("edit__comment").value=row.cells[3].innerHTML;
    document.getElementById("unique_id").value=id;
    console.log(`This is working`);
    console.log(document.getElementById("unique_id").value);
    $('#myModal').modal('show');

  }
 
 
  return (
    
    <div className="summary">
      <h1>SUMMARY  OF  FEEDBACK</h1>
      {console.log("Summary Response ",response )}
      
      <table style={{width:"100%" }} >
      
        <tr>
          <th>Username</th>
          <th>Coursename</th> 
          <th>Rating</th>
          <th>Comments</th>
          <th></th>
        </tr>
      
      {response.map((item, index) => (
          
          <tr key={item._id} id={item._id}>
            <td>{item.username}</td>
            <td>{item.coursename}</td>
            <td>{item.rating}</td>
            <td>{item.comments}</td>
            <td ><EditRoundedIcon className="edit__button" onClick={()=>{showModal(item._id)}}/></td>
          </tr> 
      ))}

      </table>
      <div class="modal" tabindex="-1" role="dialog" id="myModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">EDIT USER FEEDBACK</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="" className="edit__summary">
          <input type="text" placeholder="User Name" id="edit__userName"/>
          <input type="text" placeholder="Course Name" id="edit__courseName"/>
          <input type="text" placeholder="Rating" id="edit__rating"/>
          <input type="text" placeholder="Comments" id="edit__comment"/>
          <input type="text" hidden id="unique_id"/>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  <RenderData fn={setResponse} />
    </div>
 
  );
};

export default FeedbackSummary;