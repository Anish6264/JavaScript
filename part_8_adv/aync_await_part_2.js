function fetchpostdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}

function fetchcommentdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment data fetched successfully");
    }, 4000);
  });
}

async function getblogdata() {
  try {
    console.log("fetching blog data...");
    // const blogdata = await fetchpostdata();

    // const commentdata = await fetchcommentdata();

    const [blogdata,commentdata] = await Promise.all([
        fetchpostdata(),
        fetchcommentdata()
    ])
    console.log("blog data:", blogdata);
    console.log("comment data:", commentdata);
    console.log("fetch coomplete");
  } catch (error) {
    console.log("error fetching data", error);
  }
}
getblogdata();
