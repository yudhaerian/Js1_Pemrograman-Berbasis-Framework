import React from 'react';

const MahasiswaPost = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Mahasiswa"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nama-mahasiswa">{props.nama}</div>
                <p className="nim-mahasiswa">{props.nim}</p>
                <p className="alamat-mahasiswa">{props.alamat}</p>
                <p className="hp-mahasiswa">{props.hp}</p>
                <p className="angkatan-mahasiswa">{props.angkatan}</p>
                <p className="status-mahasiswa">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default MahasiswaPost;