// const domainPath = "http://localhost:3001"; // simpan url domain server API pada variabel
// const GetAPI = (path) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}`)
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           resolve(result);
//         },
//         (err) => {
//           reject(err);
//         }
//       );
//   });
//   return promise;
// };

// const PostAPI = (path, data) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}`, {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then(
//       (result) => {
//         resolve(result);
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
//   return promise;
// };

// const DeleteAPI = (path, data) => {
//   const promise = new Promise((resolve, reject) => {
//     fetch(`${domainPath}/${path}/${data}`, { method: "DELETE" }).then(
//       (result) => {
//         resolve(result);
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
// };

import GetAPI from './get';
import PostAPI from './post';
import DeleteAPI from './delete';

const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");
const postNewsBlog = (dataYgDikirim) => PostAPI("posts", dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI("posts", dataYgDihapus);

const getNewsMahasiswa = () => GetAPI("mahasiswa?_sort=id&_order=desc");
const postNewsMahasiswa = (dataYgDikirim) => PostAPI("mahasiswa", dataYgDikirim);
const deleteNewsMahasiswa = (dataYgDihapus) => DeleteAPI("mahasiswa", dataYgDihapus);

const API = {
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog,

  getNewsMahasiswa,
  postNewsMahasiswa,
  deleteNewsMahasiswa
};

export default API;
