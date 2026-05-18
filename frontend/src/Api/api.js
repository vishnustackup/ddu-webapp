const baseurl = "http://localhost:3000"



// get all post

export const getdata = async () => {
    const res = await fetch(`${baseurl}/blog/allposts`)
    return res.json()

}





// login

export const LoginUser = async (postdata) => {

    const res = await fetch(`${baseurl}/user/loginuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",

        body: JSON.stringify(postdata)
    })

    return res.json()
}




export const createpost = async (postdata) => {

    const res = await fetch(`${baseurl}/blog/createblog`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",


        body: JSON.stringify(postdata)
    })

    return res.json()
}





export const getsinglepost = async (id) => {
    const res = await fetch(`${baseurl}/blog/edit/${id}`)
    return res.json()

}





export const Updatepost = async (id, data) => {

    const res = await fetch(`${baseurl}/blog/updatepost/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",

        body: JSON.stringify(data)
    })

    return res.json()
}


export const deletepost = async (id) => {
    const res = await fetch(`${baseurl}/blog/deletepost/${id}`, {
        method: "DELETE",

        credentials: "include",

    })

    return res.json()
}

