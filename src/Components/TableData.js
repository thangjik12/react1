import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
        
    }
    mappingDataUser = () =>
        this.props.dataUserProps.map((value, key) => (
            <TableDataRow
                deleteButtonClick = { (idUser) => this.deleteButtonClick(idUser)  } 
                userName={value.name}
                key={key}
                stt={key}
                id={value.id}
                tel={value.tel}
                Permission={value.Permission}
                editFunClick={(user)=>this.props.editFun(value)}
                changeEditUserStatus = { () => this.props.changeEditUserStatus()} />
        ))
            //this.props.editFun

    render() {
        // console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;