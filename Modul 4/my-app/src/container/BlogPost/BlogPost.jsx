import React, {Component} from 'react';
import './BlogPost.css';
import Post from '../../component/BlogPost/Post';


class BlogPost extends Component{
    state = {                   // komponen state dari react untuk  statefull component
        listArtikel: [],        // variabel array yg digunakan utk menyiman data API
        insertArtikel: {        // VARIABEL YG DGUNAKAN UTK MENAMPUNG SEMENTARA DATA YG AKAN DI INSERT
            userId: 1,          // KOLOM userid, id, title dan body sama mengikuri yg ada pada list artikel
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    componentDidMount() { // komponen untuk mengeek ketika component telah di mount-ing maka panngil SPI
        fetch('http://localhost:3001/posts') //alamat url api yang ingin kita ambil datanya
            .then(response => response.json()) //ubah data dari url api menjadi sebuat data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API kita masukkan ke dalam listARtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }
    handleHapusArtikel= (data) => { // fungsi yang menghandle button action hapus data
        fetch(`http://localhost:3001/posts/${data}`, {method:'DELETE'}) //alamat url HAPUS
            .then(response => response.json()) //ubah data dari url api menjadi sebuat data json
            .then( res => { // ketika proses hapus berhasil, maka ambil data dari server API lokal
                    this.ambilDataDariServerAPI()
                })
            }

    handleTambahArtikel = (event) => {
            let formInsertArtikel = {...this.state.insertArtikel};
            let timeStamp = new Date().getTime();
            formInsertArtikel['id'] = timeStamp;
            formInsertArtikel[event.target.name] = event.target.value;
            this.setState({
                insertArtikel: formInsertArtikel
            });
        }

        handleTombolSimpan = () => {
            fetch('http://localhost:3001/posts', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.insertArtikel)
            })
                .then((Response) => {
                    this.ambilDataDariServerAPI();
                });
        }
        
    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
            )
        }
    }
export default BlogPost;