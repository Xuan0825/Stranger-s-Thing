const baseUrl = 'https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT'
const tokenUrl = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAwYThmNGJjMGI5YzAwMTQwZmExNzUiLCJ1c2VybmFtZSI6Inh1YW4wOCIsImlhdCI6MTY5NDU0MjA2OH0.kfHU4kjDU_QOuBEJNDIonyZuFf8L9b8X1Z2l_kuujcQ"

export async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`
    );
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function fetchAllUser({token}){
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (err) {
    console.error(err);
  }
}
export async function fetchSinglePost({token}, id) {  
  try {
    const posts = await fetchAllPosts();
    const singlePost = posts.filter(post => { 
      /*
        id = 3
        post._id = 1 
        post._id === id --> 1 === 3 NOt satisfy the condition so no return 
        -----
        post._id = 2
        post._id === id --> 2 === 3 NOt satisfy the condition so no return 
        -----
        post._id = 3
        post._id === id --> 3 === 3 condition satified so return

      */
      return post._id === id;

    })
    return singlePost[0];
  } catch (err) {
      console.error( err);
  }
};

const updatePost = async ({token},id) => {
  try {
  
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver:  deliver
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost({token},id)
{
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}  