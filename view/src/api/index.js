import axios from "axios"

export function DeleteOne(params) {
  const { cname, _id } = params
  return axios.post('/base/delete_one', {
    cname,
    _id
  })
}

export function SelectAll(params) {
  const { cname } = params
  return axios.post('/base/find_all', {
    cname
  })
}

export function InsertOne(params) {
  const { cname, doc } = params
  return axios.post('/base/insert_one', {
    cname,
    doc
  })
}

export function ReplaceOne(params) {
  const { cname, _id, doc } = params
  return axios.post('/base/replace_one', {
    cname,
    _id,
    doc
  })
}