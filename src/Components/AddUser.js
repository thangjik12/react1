import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        
        this.setState({
            [name]:value
        });
        // var item ={};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);
        
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" onChange={  (event) => {this.isChange(event)}} className="form-control" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="tel"onChange={  (event) => {this.isChange(event)}}className="form-control" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" name="Permission" onChange={  (event) => {this.isChange(event)}}required>
                                    <option value>Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)} 
                                className="btn btn-block btn-primary" value="Thêm mới" />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }
    render() {

        //console.log(this.state);
        
        return (

            <div >

                {this.kiemTraTrangThai()}


            </div>


        );
    }
}

export default AddUser;