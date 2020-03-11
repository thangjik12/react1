import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (parseInt(this.props.Permission) === 1) {
            return "Admin";
        }
        else if (parseInt(this.props.Permission) === 2) {
            return "Moderator";

        }
        else {
            return "Normal User";
        }
    }
    editClick =  () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick =  (idUser) => {
        this.props.deleteButtonClick(idUser);
        
    }
    render() {
        // props.editFunClick
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" 
                        
                        onClick={()=>this.editClick()}><i className="fa fa-edit">Sửa</i></div>
                        <div onClick={(idUser)=>this.deleteButtonClick(this.props.id)} 
                        className="btn btn-danger xoa"><i className="fa fa-delete">Xóa</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;