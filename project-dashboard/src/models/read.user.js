import React, {Component} from 'react'
import axios from 'axios';
import CreateUser from './create.user';
import EditUser from './edit.user';
import Config from '../config/config';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class readUser extends Component {
  /**
   * @description konstruktor kelas konten
   * @param {*} props untuk menampung daftar user yang terdapat pada database
   */
  constructor(props){
    super(props);
    this.state = {
      listUser:[]
    }
  }

  /**
   * @description method untuk memanggil dan memanipulasi data agar data dapat ditampil sesuai dengan paging short, limit entry
   */
  componentDidMount(){
     this.loadUser()
     const script = document.createElement("script");
        script.src = 'js/content.js';
        script.async = true;

        document.body.appendChild(script);
  }

  /**
   * @description method untuk memanggil dan memanipulasi data dari database ke server
   */
  loadUser(){
    const url = Config.baseUrl+"/users"
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data
        this.setState({listUser:data})
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  } 

    /**
     * @description method untuk manampilkan tabel daftar user pada halaman dashboard
     */
    render() {
      return (
        <div>
          <div className="content-wrapper">
            {/* Main content */}
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  {/* /.box */}
                  <div className="box">
                    <div className="box-header">
                      <section className="content-header">
                        <h3 className="box-title">Daftar User</h3>
                        <ol className="breadcrumb">
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-default">
                          Create User
                          
                          </button>
                        </ol>
                      </section>        
                    </div>
                      <br></br>

                      <CreateUser/>
                      <EditUser/>
                      

                      <div className="box-body">
                        <table id="example1" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Nama</th>
                              <th scope="col">Email</th>
                              <th scope="col">No. Handphone</th>
                              <th scope="col">Role</th>
                              <th scope="col">Options</th>
                            </tr>
                          </thead>
                          <tbody>
                            
                            {this.loadFillData()}
                          </tbody>
                        </table>
                      </div>
                    {/* /.box-body */}
                    </div>
                {/* /.box */}
                </div>
              {/* /.col */}
              </div>
            </section>
          </div>
        </div>
      );
    }

    /**
     * @description method untuk memanggil sesuai dengan permintaan kedalam tabel
     */
    loadFillData(){
      return this.state.listUser.map((data)=>{
        return(
          <tr key={data.id}>
            {/* <td>{data.id}</td> */}
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.role.role}</td>
            <td>
              <div className="input-group-btn">
              <button type="button" className="btn btn-default btn-block" data-toggle="dropdown">...</button>
                <ul className="dropdown-menu">
                  <li>
                    <a data-toggle="modal" data-target="#modal-default2" onClick={()=>this.onEdit(data.id)}>
                      <i className="fa fa-pencil"/> <span>Edit</span>
                    </a>                
                  </li>
                  
                  <li className="divider"></li>
                  <li>
                    <a onClick={()=>this.onDelete(data.id)}>
                      <i className="fa fa-trash" /> <span>Delete</span>
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        )
      })
    }

    onDelete(id){
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this data!',
        // type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((response) => {
        if (response.value) {
          this.sendDelete(id)
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your data is safe :)',
            'error'
          )
        }
      })
    }

    onEdit(id){
      console.log(id)
      //userId = id;
      this.setState({
        //id: id
        name : this.props["campName"],
        email : this.props["campEmail"],
          phone : this.props["campPhone"],
          password : this.props["campPassword"],
          role  : this.props.selectRole
      })
    }

    sendDelete(userId)
  {
    // url backend
    const url = Config.baseUrl+"/users/"+userId    // parameter data post
    // network
    axios.delete(url,{id:userId})
    .then(response =>{
      console.log(response)
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
        this.loadUser()
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }
 

}
export default readUser;
