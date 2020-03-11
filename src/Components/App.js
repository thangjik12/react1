import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm:true,
      data: [],
      SearchText: '',
      editUserStatus: false,
      userEditObject:{}
    }
  }
  UNSAFE_componentWillMount() {
    //kiem tra xem co localStorage nay chua
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
      
  }
  
  getUserEditInfoApp =  (info) => {
    
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
      
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));

  }
  changeEditUserStatus =  () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  editUser = (user) => {
    console.log("Da ket noi ok");
    this.setState({
      userEditObject:user
    });
    
  }

  getNewUserData  = (name,tel,Permission) => {

    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));

    
    
  }
  deleteUser =  (idUser) => {
    
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    // day vao du lieu
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  getTextSearch = (dl) => {
    
    this.setState({
      SearchText:dl
    });
    // console.log(' Du lieu bo nha duoc la ' + this.state.SearchText);
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
//   thongBao = () => {
//     alert("Ket noi thanh cong");
    
// }
  render() {
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.SearchText) !==-1){
        ketqua.push(item);
      }
    })
    
    
    
    
    return (
      <div >
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
              getUserEditInfoApp = { (info) => this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject}
              changeEditUserStatus = { () => this.changeEditUserStatus() }
              editUserStatus={this.state.editUserStatus}
              checkConnectProps = {(dl)=>this.getTextSearch(dl)} 
              ketNoi={()=>this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm}/>
              <TableData
              deleteUser = { (idUser) => this.deleteUser(idUser)}
              changeEditUserStatus = { () => this.changeEditUserStatus()} 
              editFun={ (user) => this.editUser(user)} dataUserProps={ketqua}/>
              <AddUser add={ (name,tel,Permission) => this.getNewUserData(name,tel,Permission)} hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


